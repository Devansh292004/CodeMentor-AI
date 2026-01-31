import { Module } from "../../types";

export const dsaModule: Module = {
  id: "dsa-1",
  title: "Data Structures & Algorithms",
  subjectId: "dsa",
  courses: [
    {
      id: "complexity-analysis",
      title: "Asymptotic Analysis",
      description: "Master Big O notation and algorithm efficiency.",
      lessons: [
        {
          id: "big-o-intro",
          title: "Introduction to Big O",
          type: "theory",
          content: "Big O notation describes the complexity of an algorithm as the input size grows.",
        },
        {
          id: "complexity-quiz",
          title: "Identifying Time Complexity",
          type: "quiz",
          content: "Test your ability to recognize different growth rates.",
          quizOptions: [
            {
              question: "What is the time complexity of searching an element in a sorted array using binary search?",
              options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
              correctIndex: 2,
              explanation: "Binary search divides the search space in half each time, leading to logarithmic complexity."
            }
          ]
        }
      ]
    },
    {
      id: "arrays-strings",
      title: "Arrays & Strings",
      description: "Fundamental contiguous data structures.",
      lessons: [
        {
          id: "arr-complexity",
          title: "Array Performance",
          type: "visualization",
          content: "Understand why array access is constant time but insertion can be linear.",
          visualizationId: "array-viz",
        },
        {
          id: "two-pointers",
          title: "Two-Pointer Strategy",
          type: "coding",
          content: "A powerful technique for optimizing array problems.",
          codeSnippet: "def has_pair_with_sum(arr, k):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        s = arr[left] + arr[right]\n        if s == k: return True\n        if s < k: left += 1\n        else: right -= 1\n    return False",
          language: "python",
        }
      ],
    },
    {
      id: "linked-lists",
      title: "Linked Lists",
      description: "Dynamic memory allocation patterns.",
      lessons: [
        {
          id: "linked-list-intro",
          title: "Nodes and Pointers",
          type: "visualization",
          content: "See how elements are linked in non-contiguous memory.",
          visualizationId: "linked-list-viz"
        },
        {
          id: "linked-list-impl",
          title: "Implementing a Node",
          type: "coding",
          content: "Define the basic structure of a singly linked list node.",
          codeSnippet: "class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None",
          language: "python"
        }
      ]
    },
    {
      id: "sorting-algorithms",
      title: "Sorting Algorithms",
      description: "Efficiently organizing data.",
      lessons: [
        {
          id: "bubble-sort-viz",
          title: "Bubble Sort",
          type: "visualization",
          content: "Visualize the simplest sorting algorithm in action.",
          visualizationId: "array-viz"
        },
        {
          id: "merge-sort",
          title: "Merge Sort (Divide & Conquer)",
          type: "theory",
          content: "Merge sort is an O(n log n) algorithm that uses recursion to sort subarrays and merge them.",
        }
      ]
    }
  ],
};
