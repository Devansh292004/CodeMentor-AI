import { Module } from "../../types";
import { expandedCurriculum } from "./expanded_lessons";
import { fundamentalsModule } from "./fundamentals";
import { dsaModule } from "./dsa";
import { osModule } from "./os";
import { databasesModule, mlAiModule, cybersecurityModule, dataScienceModule } from "./others";
import { sePrinciplesModule } from "./se_principles";
import { webDevModule, devopsModule } from "./web_devops";
import { advancedModule } from "./advanced";

// Merge expanded curriculum with existing modules for a truly massive knowledge base
export const curriculum: Module[] = [
  ...expandedCurriculum,
  fundamentalsModule,
  dsaModule,
  osModule,
  databasesModule,
  sePrinciplesModule,
  webDevModule,
  devopsModule,
  mlAiModule,
  dataScienceModule,
  cybersecurityModule,
  advancedModule,
];

export const getAllLessons = () => curriculum.flatMap(m => m.courses).flatMap(c => c.lessons);

export const getNextLesson = (currentId: string, performance: 'good' | 'bad' | 'neutral') => {
  const all = getAllLessons();
  const idx = all.findIndex(l => l.id === currentId);

  if (performance === 'bad') return all[Math.max(0, idx - 1)]; // Go back or stay
  if (performance === 'good') return all[Math.min(all.length - 1, idx + 2)]; // Skip one
  return all[Math.min(all.length - 1, idx + 1)]; // Normal flow
};
