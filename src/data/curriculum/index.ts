import { Module } from "../../types";
import { masterCurriculum } from "./master_curriculum";

export const curriculum: Module[] = masterCurriculum;

export const getAllLessons = () => curriculum.flatMap(m => m.courses).flatMap(c => c.lessons);

export const getNextLesson = (currentId: string, performance: 'good' | 'bad' | 'neutral') => {
  const all = getAllLessons();
  const idx = all.findIndex(l => l.id === currentId);

  if (performance === 'bad') return all[Math.max(0, idx - 1)]; // Go back or stay
  if (performance === 'good') return all[Math.min(all.length - 1, idx + 2)]; // Skip one
  return all[Math.min(all.length - 1, idx + 1)]; // Normal flow
};
