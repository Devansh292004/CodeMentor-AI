import { Module } from "../../types";
import { fundamentalsModule } from "./fundamentals";
import { dsaModule } from "./dsa";
import { osModule } from "./os";
import { databasesModule, webDevModule, mlAiModule } from "./others";
import { sePrinciplesModule } from "./se_principles";
import { devopsModule } from "./devops";
import { cybersecurityModule } from "./cybersecurity";
import { dataScienceModule } from "./data_science";

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
