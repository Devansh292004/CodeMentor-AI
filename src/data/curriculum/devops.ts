import { Module } from "../../types";

export const devopsModule: Module = {
  id: "devops-1",
  title: "DevOps & Cloud",
  subjectId: "devops",
  courses: [
    {
      id: "docker-foundations",
      title: "Docker & Containerization",
      description: "Build, ship, and run any app anywhere.",
      lessons: [
        {
          id: "docker-intro",
          title: "Introduction to Docker",
          type: "theory",
          content: "Docker allows you to package an application with all of its dependencies into a standardized unit called a container.",
        },
        {
          id: "dockerfile-lesson",
          title: "Writing a Dockerfile",
          type: "coding",
          content: "Learn how to automate the creation of Docker images.",
          codeSnippet: "FROM node:14\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD [\"npm\", \"start\"]",
          language: "dockerfile",
        }
      ]
    },
    {
      id: "ci-cd-pipelines",
      title: "CI/CD Pipelines",
      description: "Automate your release process.",
      lessons: [
        {
          id: "pipeline-viz",
          title: "Visualizing a Pipeline",
          type: "visualization",
          content: "See how code moves from commit to production.",
          visualizationId: "cicd-viz"
        }
      ]
    }
  ],
};
