import { Module } from "../../types";

export const databasesModule: Module = {
  id: "db-1",
  title: "Databases",
  subjectId: "databases",
  courses: [
    {
      id: "sql-intro",
      title: "SQL Fundamentals",
      description: "Learn how to query and manage data with SQL.",
      lessons: [
        {
          id: "sql-select",
          title: "The SELECT Statement",
          type: "coding",
          content: "SELECT is used to retrieve data from a database.",
          codeSnippet: "SELECT * FROM users WHERE age > 21;",
          language: "sql",
        },
        {
          id: "sql-joins",
          title: "Understanding Joins",
          type: "visualization",
          content: "Visualize how INNER, LEFT, and RIGHT joins combine tables.",
          visualizationId: "sql-join-viz",
        }
      ]
    }
  ],
};

export const webDevModule: Module = {
  id: "web-1",
  title: "Web Development",
  subjectId: "web_dev",
  courses: [
    {
      id: "react-basics",
      title: "React Hooks",
      description: "Master useState and useEffect.",
      lessons: [
        {
          id: "use-state",
          title: "useState Hook",
          type: "coding",
          content: "Manage state in functional components.",
          codeSnippet: "const [count, setCount] = useState(0);",
          language: "javascript",
        }
      ]
    }
  ],
};

export const mlAiModule: Module = {
  id: "ai-1",
  title: "Machine Learning & AI",
  subjectId: "ml_ai",
  courses: [
    {
      id: "neural-nets",
      title: "Neural Networks",
      description: "Intro to deep learning.",
      lessons: [
        {
          id: "perceptron",
          title: "The Perceptron",
          type: "theory",
          content: "The building block of neural networks.",
          visualizationId: "perceptron-viz",
        }
      ]
    }
  ],
};
