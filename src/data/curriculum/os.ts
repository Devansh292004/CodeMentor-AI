import { Module } from "../../types";

export const osModule: Module = {
  id: "os-1",
  title: "Operating Systems",
  subjectId: "os",
  courses: [
    {
      id: "proc-mgmt",
      title: "Process & Thread Management",
      description: "How the OS executes multiple programs concurrently.",
      lessons: [
        {
          id: "threads-vs-procs",
          title: "Execution Units",
          type: "theory",
          content: "Processes are independent execution environments. Threads share the same address space.",
        },
        {
          id: "scheduling-viz",
          title: "CPU Scheduling",
          type: "visualization",
          content: "See how the OS decides which process runs next.",
          visualizationId: "cpu-scheduler"
        },
        {
          id: "deadlocks-intro",
          title: "The Deadlock Problem",
          type: "theory",
          content: "Deadlocks occur when processes are waiting for resources held by each other.",
        }
      ]
    },
    {
      id: "memory-mgmt",
      title: "Memory Architecture",
      description: "Managing the hierarchy from registers to disk.",
      lessons: [
        {
          id: "virtual-memory",
          title: "Virtual Memory & Paging",
          type: "theory",
          content: "Virtual memory allows processes to use more memory than physically available by swapping with disk.",
        },
        {
          id: "stack-heap-viz",
          title: "Stack vs Heap",
          type: "visualization",
          content: "See how the stack handles local variables while the heap manages dynamic memory.",
          visualizationId: "memory-viz"
        }
      ]
    }
  ],
};
