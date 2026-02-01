import { Module } from "../../types";

export const expandedCurriculum: Module[] = [
  {
    id: "fundamentals-1",
    title: "Programming Fundamentals",
    subjectId: "fundamentals",
    courses: [
      {
        id: "logic-mastery",
        title: "Logic & Control Flow",
        description: "Master the foundations of computational thinking.",
        lessons: [
          {
            id: "boolean-logic",
            title: "Boolean Algebra",
            type: "quiz",
            content: "Learn how AND, OR, and NOT gates form the basis of all computer logic.",
            quizOptions: [{
              question: "What is the result of (True AND False) OR True?",
              options: ["True", "False", "Null", "Undefined"],
              correctIndex: 0,
              explanation: "(True AND False) is False. False OR True is True."
            }]
          },
          {
            id: "loops-intro",
            title: "Iteration & Loops",
            type: "coding",
            content: "Learn how to repeat actions efficiently using while and for loops.",
            codeSnippet: "for i in range(5):\n    print(i)",
            language: "python",
            solution: "0\n1\n2\n3\n4"
          },
          {
            id: "recursion-basics",
            title: "Intro to Recursion",
            type: "theory",
            content: "Understand how a function can call itself to solve complex sub-problems.",
            codeSnippet: "def fact(n):\n    if n == 1: return 1\n    return n * fact(n-1)"
          }
        ]
      }
    ]
  },
  {
    id: "dsa-1",
    title: "Data Structures & Algorithms",
    subjectId: "dsa",
    courses: [
      {
        id: "linear-structures",
        title: "Linear Data Structures",
        description: "Arrays, Linked Lists, Stacks, and Queues.",
        lessons: [
          {
            id: "stack-ops",
            title: "Stack Operations (LIFO)",
            type: "visualization",
            content: "Visualize how elements are pushed and popped from a stack.",
            visualizationId: "memory-viz"
          },
          {
            id: "queue-ops",
            title: "Queue Operations (FIFO)",
            type: "coding",
            content: "Implement a queue using a list.",
            codeSnippet: "queue = []\nqueue.append(1)\nqueue.pop(0)",
            language: "python"
          },
          {
            id: "linked-list-reversal",
            title: "Reversing a Linked List",
            type: "coding",
            content: "Challenge: Reverse the pointers of a singly linked list.",
            codeSnippet: "def reverse(head):\n    prev = None\n    curr = head\n    while curr:\n        next_node = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_node\n    return prev",
            language: "python"
          }
        ]
      },
      {
        id: "sorting-searching",
        title: "Sorting & Searching",
        description: "O(n log n) algorithms and binary search.",
        lessons: [
          {
            id: "binary-search-impl",
            title: "Binary Search Mastery",
            type: "coding",
            content: "Search a sorted array in logarithmic time.",
            codeSnippet: "def search(arr, x):\n    low = 0\n    high = len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] < x: low = mid + 1\n        elif arr[mid] > x: high = mid - 1\n        else: return mid\n    return -1",
            language: "python"
          },
          {
             id: "quick-sort-viz",
             title: "Quick Sort Visualization",
             type: "visualization",
             content: "See the pivot-based partitioning in action.",
             visualizationId: "array-viz"
          }
        ]
      }
    ]
  },
  {
    id: "os-deep-dive",
    title: "Operating Systems",
    subjectId: "os",
    courses: [
      {
        id: "kernel-internals",
        title: "Kernel & Syscalls",
        description: "How software talks to hardware.",
        lessons: [
          {
            id: "syscall-fork",
            title: "The fork() Syscall",
            type: "theory",
            content: "Learn how the OS creates new processes by cloning the current one.",
            codeSnippet: "pid_t p = fork();\nif (p == 0) printf(\"Child\");"
          },
          {
            id: "memory-paging",
            title: "Paging & Segmentation",
            type: "visualization",
            content: "Visualize how virtual addresses map to physical memory frames.",
            visualizationId: "memory-viz"
          },
          {
            id: "deadlock-prevention",
            title: "Avoiding Deadlocks",
            type: "quiz",
            content: "Test your knowledge on the Banker's Algorithm.",
            quizOptions: [{
              question: "Which condition is NOT required for a deadlock?",
              options: ["Mutual Exclusion", "Hold and Wait", "No Preemption", "Safe State"],
              correctIndex: 3,
              explanation: "A Safe State is the opposite of a deadlock state."
            }]
          }
        ]
      }
    ]
  },
  {
    id: "web-arch",
    title: "Web Architecture",
    subjectId: "web_dev",
    courses: [
      {
        id: "backend-mastery",
        title: "Distributed Systems",
        description: "Scaling applications to millions of users.",
        lessons: [
          {
            id: "load-balancing",
            title: "Load Balancing 101",
            type: "theory",
            content: "Learn about Round Robin and Least Connections strategies.",
            visualizationId: "networking-viz"
          },
          {
            id: "caching-redis",
            title: "Caching with Redis",
            type: "coding",
            content: "Implement a simple LRU cache mechanism.",
            codeSnippet: "cache = {}\ndef get(key):\n    return cache.get(key)",
            language: "python"
          },
          {
             id: "microservices",
             title: "Microservices vs Monoliths",
             type: "reflection",
             content: "Think about the trade-offs of network latency vs scalability."
          }
        ]
      }
    ]
  },
  {
    id: "ai-ml-expanded",
    title: "Advanced AI & ML",
    subjectId: "ml_ai",
    courses: [
      {
        id: "neural-nets",
        title: "Neural Networks",
        description: "From Perceptrons to Transformers.",
        lessons: [
          {
            id: "nn-backprop",
            title: "Backpropagation",
            type: "visualization",
            content: "Visualize how errors flow back through the network to update weights.",
            visualizationId: "perceptron-viz"
          },
          {
            id: "transformers-intro",
            title: "Attention Mechanism",
            type: "theory",
            content: "The breakthrough that powered GPT: 'Attention is All You Need'.",
          },
          {
            id: "cnn-vision",
            title: "Computer Vision (CNN)",
            type: "coding",
            content: "Implement a simple convolution operation.",
            codeSnippet: "import numpy as np\ndef conv2d(img, kernel):\n    return np.convolve(img, kernel)",
            language: "python"
          }
        ]
      }
    ]
  }
];
