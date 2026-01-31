import { Module } from "../../types";

export const sePrinciplesModule: Module = {
  id: "se-1",
  title: "Software Engineering Principles",
  subjectId: "se_principles",
  courses: [
    {
      id: "design-patterns",
      title: "Design Patterns",
      description: "Master the art of reusable software solutions.",
      lessons: [
        {
          id: "singleton-pattern",
          title: "The Singleton Pattern",
          type: "coding",
          content: "Learn how to ensure a class has only one instance and provides a global point of access to it.",
          codeSnippet: "class Singleton:\n    _instance = None\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance",
          language: "python",
        },
        {
          id: "factory-pattern",
          title: "The Factory Method",
          type: "theory",
          content: "Understand how to delegate object instantiation to subclasses.",
        },
        {
          id: "observer-pattern",
          title: "The Observer Pattern",
          type: "theory",
          content: "Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified."
        }
      ]
    },
    {
      id: "agile-methodology",
      title: "Agile & Scrum",
      description: "Modern software development workflows.",
      lessons: [
        {
          id: "sprints-backlog",
          title: "Sprints and Backlogs",
          type: "quiz",
          content: "Test your knowledge on Agile ceremonies.",
          quizOptions: [
            {
              question: "What is the primary purpose of a Daily Stand-up?",
              options: ["Assigning blame", "Synchronizing the team", "Demoing to clients", "Long-term planning"],
              correctIndex: 1,
              explanation: "The Daily Stand-up is for team synchronization and identifying blockers."
            }
          ]
        }
      ]
    },
    {
      id: "testing-foundations",
      title: "Testing Strategies",
      description: "Unit, Integration, and E2E testing.",
      lessons: [
        {
          id: "tdd-cycle",
          title: "The TDD Cycle",
          type: "theory",
          content: "Red -> Green -> Refactor. Write the test first, then the minimum code to pass it."
        },
        {
          id: "mocking-lesson",
          title: "Mocking and Stubbing",
          type: "coding",
          content: "Isolate units of code by replacing dependencies with controlled doubles.",
          codeSnippet: "mock_api = Mock()\nmock_api.get.return_value = {'status': 200}",
          language: "python"
        }
      ]
    }
  ],
};
