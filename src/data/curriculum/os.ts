import { Module } from "../../types";

export const osModule: Module = {
  id: "os-1",
  title: "Operating Systems",
  subjectId: "os",
  courses: [
    {
      id: "proc-mgmt",
      title: "Process Management",
      description: "How CPUs handle multiple tasks simultaneously.",
      lessons: [
        {
          id: "threads-vs-procs",
          title: "Threads vs Processes",
          type: "theory",
          content: "A process is a program in execution, while a thread is a unit of execution within a process.",
          externalResources: [
            { title: "Modern OS by Tanenbaum", url: "https://en.wikipedia.org/wiki/Modern_Operating_Systems", type: "doc" }
          ]
        },
        {
          id: "scheduling-viz",
          title: "CPU Scheduling Algorithms",
          type: "visualization",
          content: "See how Round Robin differs from First-Come, First-Served.",
          visualizationId: "cpu-scheduler"
        }
      ]
    }
  ],
};
