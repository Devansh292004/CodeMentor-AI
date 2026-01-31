import { Module } from "../../types";

export const dsaModule: Module = {
  id: "dsa-1",
  title: "Data Structures & Algorithms",
  subjectId: "dsa",
  courses: [
    {
      id: "arrays-strings",
      title: "Arrays & Strings",
      description: "The building blocks of data organization.",
      lessons: [
        {
          id: "arr-complexity",
          title: "Time Complexity of Arrays",
          type: "theory",
          content: "Understand why array access is O(1) and insertion is O(n).",
          visualizationId: "array-viz",
        },
        {
          id: "two-pointers",
          title: "The Two-Pointer Technique",
          type: "coding",
          content: "A common technique for solving array problems efficiently.",
          codeSnippet: "def reverse_string(s):\n    l, r = 0, len(s) - 1\n    while l < r:\n        s[l], s[r] = s[r], s[l]\n        l += 1\n        r -= 1",
          language: "python",
        }
      ],
    },
    {
      id: "trees-graphs",
      title: "Trees & Graphs",
      description: "Master hierarchical and networked data structures.",
      lessons: [
        {
          id: "bfs-dfs",
          title: "BFS vs DFS",
          type: "visualization",
          content: "Visualize how different traversal algorithms explore a graph.",
          visualizationId: "graph-traversal",
        }
      ]
    }
  ],
};
