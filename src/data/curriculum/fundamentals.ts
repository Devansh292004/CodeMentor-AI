import { Module } from "../../types";

export const fundamentalsModule: Module = {
  id: "fundamentals-1",
  title: "Programming Fundamentals",
  subjectId: "fundamentals",
  courses: [
    {
      id: "python-basics",
      title: "Python for Beginners",
      description: "Master the syntax and core concepts of Python.",
      lessons: [
        {
          id: "py-intro",
          title: "Introduction to Variables",
          type: "theory",
          content: "Variables are used to store information to be referenced and manipulated in a computer program.",
          codeSnippet: "x = 5\ny = 'Hello World'\nprint(x, y)",
        },
        {
          id: "py-control-flow",
          title: "If-Else and Loops",
          type: "coding",
          content: "Learn how to control the flow of your program using conditionals and loops.",
          codeSnippet: "for i in range(5):\n    if i % 2 == 0:\n        print(f'{i} is even')\n    else:\n        print(f'{i} is odd')",
          language: "python",
          solution: "even odd even odd even",
        },
      ],
    },
    {
      id: "cpp-basics",
      title: "C++ Foundations",
      description: "Introduction to systems programming with C++.",
      lessons: [
        {
          id: "cpp-memory",
          title: "Memory and Pointers",
          type: "theory",
          content: "Pointers are a fundamental feature of C++ that allow you to work directly with memory addresses.",
          codeSnippet: "int x = 10;\nint* ptr = &x;\nstd::cout << *ptr << std::endl;",
        }
      ]
    }
  ],
};
