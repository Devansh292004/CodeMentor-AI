import { Module } from "../../types";
import { fundamentalsModule } from "./fundamentals";
import { dsaModule } from "./dsa";
import { osModule } from "./os";
import { databasesModule, webDevModule, mlAiModule } from "./others";

export const sePrinciplesModule: Module = {
  id: "se-1",
  title: "Software Engineering Principles",
  subjectId: "se_principles",
  courses: [],
};

export const devopsModule: Module = {
  id: "devops-1",
  title: "DevOps & Cloud",
  subjectId: "devops",
  courses: [],
};

export const dataScienceModule: Module = {
  id: "ds-1",
  title: "Data Science & Analytics",
  subjectId: "data_science",
  courses: [],
};

export const cybersecurityModule: Module = {
  id: "cyber-1",
  title: "Cybersecurity & Networking",
  subjectId: "cybersecurity",
  courses: [],
};

export const curriculum: Module[] = [
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
];
