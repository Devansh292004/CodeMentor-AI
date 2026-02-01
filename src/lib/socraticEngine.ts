import { Lesson } from "@/types";

// Deep knowledge base for Socratic fallback
const technicalKnowledge: Record<string, string[]> = {
  syscalls: [
    "A system call is the 'bridge' between a user process and the OS kernel. If the CPU is a gated library, how does a visitor (process) ask the librarian (kernel) to fetch a restricted book?",
    "Every file read or network packet sent involves a syscall. Why do you think the OS forces processes to go through this 'handshake' instead of letting them touch hardware directly?",
    "Think about 'Privilege Escalation'. How do syscalls act as a security barrier in this context?"
  ],
  pointers: [
    "A pointer is simply a memory address. If a variable is a house, what is the 'pointer' to that house?",
    "In C++, dereferencing a pointer is like looking inside the house. What happens if the piece of paper (pointer) has an address that doesn't exist? (Null or garbage value)",
    "Why do high-level languages like Java or Python hide pointers from the developer? What are the safety trade-offs?"
  ],
  complexity: [
    "Big O measures how 'scaling' works. If an O(n) algorithm takes 1ms for 10 items, it takes 100ms for 1000 items. But what happens if it's O(n²)?",
    "Think of searching a physical phonebook. Is flipping to the middle (Binary Search) more like O(n) or O(log n)? Why?",
    "Space complexity is often ignored in favor of time. Can you think of a situation where you'd sacrifice speed to save memory?"
  ],
  react: [
    "React uses a 'Virtual DOM'. If the real DOM is a massive marble statue, why is it faster to plan changes on a small clay model (Virtual DOM) before carving the marble?",
    "What is the difference between 'State' and 'Props' in a family tree analogy?",
    "Hooks allow functional components to 'remember' things. How did we manage state before Hooks were introduced in 2018?"
  ],
  ml: [
    "Neural networks learn through 'Weights'. If you're deciding whether to buy a car, and 'Price' is very important to you, is its 'Weight' in your decision high or low?",
    "Backpropagation is like a student getting a graded test back. How does the student use the errors to study better for the next test?",
    "What is the 'Black Box' problem in AI? Why is it hard to explain WHY a model made a specific prediction?"
  ]
};

export const getSocraticResponse = (userInput: string, lesson?: Lesson, history: { role: string, content: string }[] = []): string => {
  const input = userInput.toLowerCase();
  const seenResponses = new Set(history.map(h => h.content));

  // Anti-cheating logic
  if (input.includes("give me the answer") || input.includes("solve this") || input.includes("what is the code")) {
    return "I would be doing you a disservice if I just gave you the solution. Let's build the intuition together. What part of the current logic is confusing you?";
  }

  // Knowledge base lookup
  for (const [topic, responses] of Object.entries(technicalKnowledge)) {
    if (input.includes(topic) || (lesson?.title.toLowerCase().includes(topic))) {
      const unused = responses.filter(r => !seenResponses.has(r));
      const chosen = unused.length > 0 ? unused[0] : responses[Math.floor(Math.random() * responses.length)];
      return chosen;
    }
  }

  // Context-aware defaults
  if (lesson?.type === 'coding') {
    return `Looking at the challenge "${lesson.title}", how would you describe the goal in plain English? If we can say it, we can code it.`;
  }

  if (lesson?.type === 'visualization') {
    return "The visualization shows the underlying movement of data. What patterns do you notice when the algorithm progresses?";
  }

  // Ultimate fallbacks
  const fallbackPrompts = [
    "That is an interesting observation. How does it connect to the core concept we are exploring here?",
    "If you had to explain this specific step to a beginner, what analogy would you use?",
    "Let's look at the constraints. How would this behavior change if the input size doubled?",
    "You're making progress. Take a closer look at the relationship between the inputs and the expected output.",
    "What's the 'worst-case scenario' for the logic we're discussing right now?"
  ];

  const unusedFallback = fallbackPrompts.filter(p => !seenResponses.has(p));
  return unusedFallback.length > 0 ? unusedFallback[0] : fallbackPrompts[Math.floor(Math.random() * fallbackPrompts.length)];
};
