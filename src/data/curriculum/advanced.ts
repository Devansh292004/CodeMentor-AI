import { Module } from "../../types";

export const advancedModule: Module = {
  id: "advanced-1",
  title: "Advanced Engineering",
  subjectId: "fundamentals", // Reusing ID for skill tree logic simplicity
  courses: [
    {
      id: "quantum-computing",
      title: "Quantum Information",
      description: "Qubits, Superposition, and Shor's Algorithm.",
      lessons: [
        {
          id: "qubit-intro",
          title: "The Qubit",
          type: "theory",
          content: "Unlike classical bits, qubits can exist in a superposition of states. This is modeled using complex-valued vectors in Hilbert space.",
        },
        {
          id: "shors-algorithm",
          title: "Shor's Algorithm",
          type: "theory",
          content: "Shor's algorithm uses quantum Fourier transforms to factor large integers in polynomial time, threatening modern RSA encryption.",
        }
      ]
    },
    {
      id: "distributed-systems",
      title: "Distributed Architecture",
      description: "CAP Theorem, Consensus, and Paxos.",
      lessons: [
        {
          id: "cap-theorem",
          title: "The CAP Theorem",
          type: "theory",
          content: "Consistency, Availability, and Partition Tolerance. In the presence of a network partition, a distributed system must choose between consistency and availability.",
        },
        {
          id: "raft-consensus",
          title: "Raft Consensus",
          type: "visualization",
          content: "Understand how nodes in a cluster elect a leader and maintain a replicated log.",
          visualizationId: "cicd-viz" // Placeholder for complex logic
        }
      ]
    },
    {
      id: "kernel-dev",
      title: "OS Kernel Internals",
      description: "Syscalls, Interrupts, and drivers.",
      lessons: [
        {
          id: "interrupt-handling",
          title: "Hardware Interrupts",
          type: "theory",
          content: "Learn how the CPU handles asynchronous events from peripherals by pausing the current context and jumping to an ISR (Interrupt Service Routine).",
        }
      ]
    }
  ],
};
