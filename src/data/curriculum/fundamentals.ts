import { Module } from "../../types";

export const fundamentalsModule: Module = {
  id: "fundamentals-1",
  title: "Programming Fundamentals",
  subjectId: "fundamentals",
  courses: [
    {
      id: "python-deep-dive",
      title: "Python Deep Dive",
      description: "Master Python from basics to advanced asynchronous patterns.",
      lessons: [
        {
          id: "py-intro",
          title: "Introduction to Variables",
          type: "theory",
          content: "Variables are used to store information to be referenced and manipulated in a computer program. In Python, they are dynamically typed.",
          codeSnippet: "x = 5\ny = 'CodeMentor'\nprint(x, y)",
        },
        {
          id: "py-data-types",
          title: "Numbers and Strings",
          type: "coding",
          content: "Python supports integers, floating-point numbers, and complex numbers. Strings are sequences of characters.",
          codeSnippet: "price = 19.99\nquantity = 3\ntotal = price * quantity\nprint(f'Total cost: {total}')",
          language: "python",
          solution: "Total cost: 59.97"
        },
        {
          id: "py-control-flow",
          title: "Control Flow & Logic",
          type: "coding",
          content: "Control flow allows you to execute code based on conditions.",
          codeSnippet: "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
          language: "python",
          solution: "Adult"
        },
        {
          id: "py-functions",
          title: "Functions and Scope",
          type: "coding",
          content: "Functions help modularize code. Python uses indentation to define scope.",
          codeSnippet: "def greet(name):\n    return f'Hello, {name}!'\n\nprint(greet('Jules'))",
          language: "python",
          solution: "Hello, Jules!"
        },
        {
          id: "py-oop",
          title: "Object Oriented Programming",
          type: "theory",
          content: "OOP is a paradigm based on 'objects'. In Python, everything is an object.",
          codeSnippet: "class Robot:\n    def __init__(self, name):\n        self.name = name\n\nr1 = Robot('Mentor')\nprint(r1.name)",
        }
      ],
    },
    {
      id: "cpp-mastery",
      title: "C++ Advanced Systems",
      description: "Understand low-level memory management and the STL.",
      lessons: [
        {
          id: "cpp-pointers",
          title: "Pointers and Memory",
          type: "theory",
          content: "Pointers store the address of another variable. They are essential for systems programming.",
          codeSnippet: "int val = 10;\nint* ptr = &val;\nstd::cout << *ptr << std::endl;",
        },
        {
          id: "cpp-stl",
          title: "Standard Template Library",
          type: "coding",
          content: "The STL provides a set of template classes for common data structures.",
          codeSnippet: "#include <vector>\n#include <algorithm>\n\nstd::vector<int> v = {4, 2, 5};\nstd::sort(v.begin(), v.end());",
          language: "cpp",
        }
      ]
    }
  ],
};
