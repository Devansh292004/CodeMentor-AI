import { Module } from "../../types";

export const webDevModule: Module = {
  id: "web-1",
  title: "Web Development",
  subjectId: "web_dev",
  courses: [
    {
      id: "react-architecture",
      title: "Modern Frontend (React)",
      description: "Build reactive user interfaces.",
      lessons: [
        {
          id: "hooks-deep-dive",
          title: "Advanced React Hooks",
          type: "coding",
          content: "Learn optimization hooks like useMemo.",
          codeSnippet: "const memoVal = useMemo(() => expensiveFn(a), [a]);",
          language: "javascript"
        },
        {
          id: "custom-hooks",
          title: "Custom Hooks",
          type: "coding",
          content: "Abstract logic into reusable functions.",
          codeSnippet: "function useWindowSize() {\n  const [size, setSize] = useState(window.innerWidth);\n  return size;\n}",
          language: "javascript"
        }
      ]
    },
    {
      id: "backend-apis",
      title: "API Design",
      description: "REST and GraphQL standards.",
      lessons: [
        {
          id: "http-methods",
          title: "RESTful Principles",
          type: "theory",
          content: "Representational State Transfer (REST) uses HTTP methods to manipulate resources.",
        },
        {
          id: "graphql-intro",
          title: "Intro to GraphQL",
          type: "theory",
          content: "GraphQL allows clients to request exactly what they need and nothing more."
        }
      ]
    },
    {
      id: "web-performance",
      title: "Web Performance",
      description: "Optimizing for speed and SEO.",
      lessons: [
        {
          id: "core-web-vitals",
          title: "Core Web Vitals",
          type: "theory",
          content: "Understand LCP, FID, and CLS."
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
        },
        {
          id: "docker-compose",
          title: "Multi-Container Orchestration",
          type: "theory",
          content: "Docker Compose allows you to define and run multi-container applications."
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
         },
         {
           id: "github-actions",
           title: "GitHub Actions",
           type: "coding",
           content: "Automate your workflow directly on GitHub.",
           codeSnippet: "on: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest",
           language: "yaml"
         }
       ]
    },
    {
      id: "cloud-providers",
      title: "Cloud Infrastructure",
      description: "AWS, GCP, and Azure.",
      lessons: [
        {
          id: "serverless-intro",
          title: "Serverless Computing",
          type: "theory",
          content: "Focus on code, not infrastructure, using FaaS (Function as a Service)."
        }
      ]
    }
  ],
};
