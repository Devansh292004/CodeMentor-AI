import { useStore } from '../store/useStore';

// Mocking localStorage for Zustand persist
if (typeof window === 'undefined') {
  // @ts-expect-error - mocking global window
  global.window = {};
  // @ts-expect-error - mocking global localStorage
  global.localStorage = {
    getItem: () => null,
    setItem: () => null,
  };
}

describe('useStore', () => {
  it('should add XP and level up', () => {
    const { addXP } = useStore.getState();
    addXP(1500);
    expect(useStore.getState().xp).toBe(1500);
    expect(useStore.getState().level).toBe(2);
  });

  it('should complete a lesson and update state', () => {
    const { completeLesson } = useStore.getState();
    completeLesson('test-lesson', 0, 60);
    expect(useStore.getState().completedLessons).toContain('test-lesson');
    expect(useStore.getState().adaptiveMetrics.timeSpentPerLesson['test-lesson']).toBe(60);
  });
});
