import { Module } from "../../types";

export const sePrinciplesModule: Module = {
  id: "se-1",
  title: "Software Engineering Principles",
  subjectId: "se_principles",
  courses: [
    {
      id: "solid-principles",
      title: "SOLID Principles",
      description: "Writing maintainable and scalable code.",
      lessons: [
        {
          id: "srp-intro",
          title: "Single Responsibility",
          type: "theory",
          content: "Every class should have only one reason to change.",
        },
        {
          id: "ocp-coding",
          title: "Open-Closed Principle",
          type: "coding",
          content: "Classes should be open for extension but closed for modification.",
          codeSnippet: "class Shape:\n    def area(self): pass\n\nclass Circle(Shape):\n    def area(self): return 3.14 * r * r",
          language: "python"
        }
      ]
    },
    {
       id: "design-patterns",
       title: "Design Patterns",
       description: "Reusable solutions to common problems.",
       lessons: [
         {
           id: "singleton-pattern",
           title: "The Singleton",
           type: "coding",
           content: "Ensuring a class has only one instance.",
           codeSnippet: "class S:\n  _inst = None\n  @classmethod\n  def get(cls):\n    if not cls._inst: cls._inst = S()\n    return cls._inst",
           language: "python"
         }
       ]
    }
  ],
};

export const devopsModule: Module = {
  id: "devops-1",
  title: "DevOps & Cloud",
  subjectId: "devops",
  courses: [
    {
      id: "docker-foundations",
      title: "Docker & Infrastructure",
      description: "Automating deployments with containers.",
      lessons: [
        {
          id: "docker-intro",
          title: "What is Docker?",
          type: "theory",
          content: "Containers package code and dependencies for consistent execution.",
        },
        {
          id: "dockerfile-coding",
          title: "Writing a Dockerfile",
          type: "coding",
          content: "Learn how to build images step-by-step.",
          codeSnippet: "FROM node:latest\nWORKDIR /app\nCOPY . .\nCMD [\"npm\", \"start\"]",
          language: "dockerfile"
        }
      ]
    },
    {
       id: "cicd-mastery",
       title: "CI/CD Pipelines",
       description: "Continuous integration and delivery.",
       lessons: [
         {
           id: "pipeline-viz",
           title: "Pipeline Flow",
           type: "visualization",
           content: "See how code changes move from branch to production.",
           visualizationId: "cicd-viz"
         }
       ]
    }
  ],
};

export const cybersecurityModule: Module = {
  id: "cyber-1",
  title: "Cybersecurity & Networking",
  subjectId: "cybersecurity",
  courses: [
    {
      id: "cryptography-foundations",
      title: "Cryptography",
      description: "The science of securing communication.",
      lessons: [
        {
          id: "encryption-coding",
          title: "Symmetric Encryption",
          type: "coding",
          content: "Implement a Caesar cipher.",
          codeSnippet: "def rot13(s):\n  return ''.join(chr((ord(c)-97+13)%26+97) for c in s)",
          language: "python"
        }
      ]
    },
    {
       id: "network-protocols",
       title: "Network Security",
       description: "Securing the transport layer.",
       lessons: [
         {
           id: "tcp-viz",
           title: "The TCP Handshake",
           type: "visualization",
           content: "Visualize the SYN-ACK sequence.",
           visualizationId: "tcp-stack-viz"
         }
       ]
    }
  ],
};

export const dataScienceModule: Module = {
  id: "ds-1",
  title: "Data Science & Analytics",
  subjectId: "data_science",
  courses: [
    {
      id: "pandas-mastery",
      title: "Data Engineering",
      description: "Cleaning and processing large datasets.",
      lessons: [
        {
          id: "pandas-coding",
          title: "Cleaning Data",
          type: "coding",
          content: "Remove null values and handle outliers.",
          codeSnippet: "import pandas as pd\ndf = pd.read_csv('data.csv')\ndf.dropna(inplace=True)",
          language: "python"
        }
      ]
    }
  ],
};
