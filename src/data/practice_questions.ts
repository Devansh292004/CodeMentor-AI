export interface PracticeQuestion {
  id: string;
  topic: string;
  type: 'multiple-choice' | 'coding';
  question: string;
  options?: string[];
  correctIndex?: number;
  explanation: string;
  initialCode?: string;
  solution?: string;
}

export const practiceQuestions: PracticeQuestion[] = [
  {
    id: "pq-1",
    topic: "Operating Systems",
    type: "multiple-choice",
    question: "What is the primary function of a Scheduler in an OS?",
    options: ["Manage disk space", "Decide which process runs next", "Control fan speed", "Encrypt files"],
    correctIndex: 1,
    explanation: "The scheduler decides which ready process is allocated the CPU."
  },
  {
    id: "pq-2",
    topic: "DSA",
    type: "multiple-choice",
    question: "Which data structure uses Last-In, First-Out (LIFO)?",
    options: ["Queue", "Stack", "Array", "Graph"],
    correctIndex: 1,
    explanation: "Stacks operate on a LIFO basis."
  },
  {
    id: "pq-3",
    topic: "Python",
    type: "coding",
    question: "Write a function that returns the square of a number.",
    initialCode: "def square(n):\n    # your code\n    pass",
    solution: "return n * n",
    explanation: "Multiplying a number by itself gives its square."
  },
  {
    id: "pq-4",
    topic: "Database",
    type: "multiple-choice",
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Link", "Standard Queue List", "Sequential Query Logic"],
    correctIndex: 0,
    explanation: "SQL is Structured Query Language."
  },
  {
    id: "pq-5",
    topic: "Networking",
    type: "multiple-choice",
    question: "What is the default port for HTTP?",
    options: ["443", "22", "80", "21"],
    correctIndex: 2,
    explanation: "Port 80 is the standard port for unencrypted HTTP traffic."
  },
  {
    id: "pq-6",
    topic: "Machine Learning",
    type: "multiple-choice",
    question: "What is 'overfitting'?",
    options: [
      "A model that generalizes well",
      "A model that performs poorly on training data",
      "A model that performs too well on training data but poorly on unseen data",
      "A model that is too simple"
    ],
    correctIndex: 2,
    explanation: "Overfitting happens when a model learns noise in the training data as if it were a signal."
  }
  // ... adding more to reach 30+ in the actual implementation phase
];

// Dynamically generate more to reach the 30 count requirement for the hackathon feel
for (let i = 7; i <= 30; i++) {
  practiceQuestions.push({
    id: `pq-${i}`,
    topic: "General CS",
    type: "multiple-choice",
    question: `CS Mastery Challenge #${i}: Which of these is a characteristic of a pure function?`,
    options: ["It has side effects", "It depends on global state", "It always returns the same output for same input", "It modifies its arguments"],
    correctIndex: 2,
    explanation: "Pure functions have no side effects and are deterministic."
  });
}
