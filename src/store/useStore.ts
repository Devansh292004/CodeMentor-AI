import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProgress } from '../types';

interface AppState extends UserProgress {
  showLevelUp: boolean;
  dismissLevelUp: () => void;
  addXP: (amount: number) => void;
  completeLesson: (lessonId: string, mistakes: number, timeSpent: number) => void;
  updateStreak: () => void;
  getLessonDifficulty: (lessonId: string) => 'easy' | 'medium' | 'hard';
  syncWithBackend: () => Promise<void>;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      completedLessons: [],
      xp: 0,
      streak: 0,
      lastActive: new Date().toISOString(),
      level: 1,
      showLevelUp: false,
      topicMastery: {},
      weakTopics: [],
      adaptiveMetrics: {
        mistakesPerLesson: {},
        timeSpentPerLesson: {},
      },

      dismissLevelUp: () => set({ showLevelUp: false }),

      addXP: (amount) => {
        const oldLevel = get().level;
        const newXP = get().xp + amount;
        const newLevel = Math.floor(newXP / 1000) + 1;

        set({
          xp: newXP,
          level: newLevel,
          showLevelUp: newLevel > oldLevel
        });
        get().syncWithBackend();
      },

      completeLesson: (lessonId, mistakes, timeSpent) => {
        const { completedLessons, adaptiveMetrics, xp } = get();

        const newCompleted = [...new Set([...completedLessons, lessonId])];
        const newMistakes = { ...adaptiveMetrics.mistakesPerLesson, [lessonId]: mistakes };
        const newTime = { ...adaptiveMetrics.timeSpentPerLesson, [lessonId]: timeSpent };

        set({
          completedLessons: newCompleted,
          adaptiveMetrics: {
            mistakesPerLesson: newMistakes,
            timeSpentPerLesson: newTime,
          },
          xp: xp + 50, // Base XP for completion
        });

        // Trigger streak update
        get().updateStreak();
        get().syncWithBackend();
      },

      updateStreak: () => {
        const { lastActive, streak } = get();
        const today = new Date().toDateString();
        const lastActiveDate = new Date(lastActive).toDateString();

        if (today === lastActiveDate) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastActiveDate === yesterday.toDateString()) {
          set({ streak: streak + 1, lastActive: new Date().toISOString() });
        } else {
          set({ streak: 1, lastActive: new Date().toISOString() });
        }
      },

      getLessonDifficulty: (lessonId) => {
        const mistakes = get().adaptiveMetrics.mistakesPerLesson[lessonId] || 0;
        if (mistakes > 5) return 'easy'; // Give easier version if struggled
        if (mistakes === 0 && get().completedLessons.includes(lessonId)) return 'hard';
        return 'medium';
      },

      syncWithBackend: async () => {
        const state = get();
        try {
          await fetch('/api/sync', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userId: 'default-user',
              xp: state.xp,
              streak: state.streak,
              level: state.level,
              completedLessons: state.completedLessons,
              adaptiveMetrics: state.adaptiveMetrics,
            }),
          });
        } catch (error) {
          console.error('Failed to sync with backend:', error);
        }
      }
    }),
    {
      name: 'codementor-storage',
    }
  )
);
