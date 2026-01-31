export interface ResearchPaper {
  title: string;
  summary: string;
  link: string;
  year: number;
}

export const fetchLatestResearch = async (topic: string): Promise<ResearchPaper[]> => {
  // Simulating a real-time internet scraping service for latest SE research
  // In a production environment, this would hit a Google Scholar or ArXiv API
  const mockResearch: Record<string, ResearchPaper[]> = {
    "Quantum Information": [
      {
        title: "Quantum Fourier Transform in O(log^2 n) steps",
        summary: "A breakdown of the latest optimizations in QFT implementation.",
        link: "https://arxiv.org/abs/2401.xxxxx",
        year: 2024
      }
    ],
    "Distributed Architecture": [
      {
        title: "Consensus in the Age of 5G",
        summary: "How low-latency networks change the Paxos tradeoffs.",
        link: "https://ieee.org/xxxx",
        year: 2025
      }
    ],
    "Linux Kernel": [
      {
        title: "eBPF and the future of Kernel Monitoring",
        summary: "Deep dive into secure kernel-space execution.",
        link: "https://kernel.org/docs",
        year: 2024
      }
    ]
  };

  return mockResearch[topic] || [
    {
      title: `Latest advances in ${topic}`,
      summary: `State-of-the-art developments in the field of ${topic}.`,
      link: "#",
      year: 2025
    }
  ];
};
