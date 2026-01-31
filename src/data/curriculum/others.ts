import { Module } from "../../types";

export const databasesModule: Module = {
  id: "db-1",
  title: "Databases",
  subjectId: "databases",
  courses: [
    {
      id: "sql-mastery",
      title: "SQL & Querying",
      description: "Master relational data management.",
      lessons: [
        {
          id: "sql-joins",
          title: "Inner and Outer Joins",
          type: "coding",
          content: "Learn how to combine records from two or more tables.",
          codeSnippet: "SELECT a.name, b.order_date \nFROM users a \nJOIN orders b ON a.id = b.user_id;",
          language: "sql"
        },
        {
          id: "sql-aggregation",
          title: "Aggregating Data",
          type: "coding",
          content: "Use GROUP BY and COUNT to summarize data.",
          codeSnippet: "SELECT category, COUNT(*) FROM products GROUP BY category;",
          language: "sql"
        },
        {
          id: "indexing-theory",
          title: "B-Trees and Indexing",
          type: "theory",
          content: "Indexes use balanced trees to speed up search operations from O(n) to O(log n).",
        }
      ]
    },
    {
       id: "database-design",
       title: "Schema Design",
       description: "Normalization and entity relationships.",
       lessons: [
         {
           id: "normalization",
           title: "Normal Forms (1NF, 2NF, 3NF)",
           type: "theory",
           content: "Normalization minimizes redundancy by splitting tables.",
         },
         {
           id: "er-diagrams",
           title: "Entity Relationships",
           type: "visualization",
           content: "Map out the architecture of your data.",
           visualizationId: "sql-join-viz"
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
        },
        {
          id: "asymmetric-crypto",
          title: "RSA & Public Keys",
          type: "theory",
          content: "Asymmetric encryption uses two keys: public for encryption, private for decryption.",
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
         },
         {
           id: "dns-lesson",
           title: "DNS & Phishing",
           type: "theory",
           content: "Domain Name System translates names to IPs. Learn how attackers poison caches.",
         }
       ]
    },
    {
      id: "web-security",
      title: "Web Attacks",
      description: "OWASP Top 10 vulnerabilities.",
      lessons: [
        {
          id: "xss-intro",
          title: "Cross-Site Scripting",
          type: "coding",
          content: "Learn how to sanitize user input to prevent JS injection.",
          codeSnippet: "const sanitized = input.replace(/</g, '&lt;');",
          language: "javascript"
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
        },
        {
          id: "vectorization",
          title: "Vectorized Operations",
          type: "theory",
          content: "NumPy uses SIMD instructions to process arrays without explicit Python loops.",
        }
      ]
    },
    {
      id: "stats-foundations",
      title: "Applied Statistics",
      description: "Probability and inference.",
      lessons: [
        {
          id: "probability-dist",
          title: "Normal Distribution",
          type: "visualization",
          content: "Visualize the Bell Curve and Standard Deviation.",
          visualizationId: "eda-plot-viz"
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
      id: "deep-learning",
      title: "Deep Learning Foundations",
      description: "The mechanics of neural networks.",
      lessons: [
        {
          id: "perceptron-lesson",
          title: "The Perceptron Model",
          type: "visualization",
          content: "Visualize how a single neuron computes outputs from inputs.",
          visualizationId: "perceptron-viz"
        },
        {
          id: "activation-functions",
          title: "ReLU vs Sigmoid",
          type: "theory",
          content: "Activation functions introduce non-linearity into the network.",
        },
        {
          id: "backprop-coding",
          title: "Gradient Descent",
          type: "coding",
          content: "Implement a simple weight update rule.",
          codeSnippet: "weight = weight - learning_rate * gradient",
          language: "python"
        }
      ]
    },
    {
      id: "nlp-foundations",
      title: "Natural Language Processing",
      description: "How machines understand human text.",
      lessons: [
        {
          id: "tokenization",
          title: "Tokenization Strategies",
          type: "theory",
          content: "Splitting text into meaningful units: words vs subwords.",
        }
      ]
    },
    {
      id: "mlops",
      title: "MLOps & Deployment",
      description: "Bringing models to production.",
      lessons: [
        {
          id: "model-export",
          title: "Model Quantization",
          type: "visualization",
          content: "Learn how to compress models for efficient edge inference.",
          visualizationId: "mlops-viz"
        }
      ]
    }
  ],
};
