import { Module } from "../../types";

export const databasesModule: Module = {
  id: "db-1",
  title: "Databases",
  subjectId: "databases",
  courses: [
    {
      id: "sql-mastery",
      title: "SQL & Query Optimization",
      description: "Master relational data management.",
      lessons: [
        {
          id: "sql-joins",
          title: "Complex Joins",
          type: "coding",
          content: "Learn to combine data from multiple tables using INNER, LEFT, and RIGHT joins.",
          codeSnippet: "SELECT orders.id, users.name\nFROM orders\nINNER JOIN users ON orders.user_id = users.id;",
          language: "sql"
        },
        {
          id: "indexing-concept",
          title: "Database Indexing",
          type: "theory",
          content: "Indexes are used to quickly locate data without having to search every row in a database table every time a database table is accessed."
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
      id: "frontend-mastery",
      title: "React & Next.js",
      description: "Build modern web applications.",
      lessons: [
        {
          id: "react-hooks",
          title: "Advanced Hooks",
          type: "coding",
          content: "Understand useMemo and useCallback for performance optimization.",
          codeSnippet: "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);",
          language: "javascript"
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
      id: "neural-networks",
      title: "Deep Learning Foundations",
      description: "The math and logic behind AI.",
      lessons: [
        {
          id: "perceptron-lesson",
          title: "The Perceptron",
          type: "visualization",
          content: "Visualize how a single neuron processes information.",
          visualizationId: "perceptron-viz"
        }
      ]
    }
  ],
};
