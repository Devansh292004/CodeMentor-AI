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
  ],
  docker: [
    "A Docker container is a standard unit of software. Imagine shipping a delicate vase; do you ship the whole house, or just put it in a padded box (container) that fits on any truck?",
    "How does a Container differ from a Virtual Machine in terms of resources? Think about the 'Kernel'.",
    "What is an 'Image' vs a 'Container' in a recipe analogy? (Image is the recipe, Container is the meal being cooked)."
  ],
  normalization: [
    "Database normalization is about 'One Fact in One Place'. If you store a customer's address in every order row, what happens if they move?",
    "What is the difference between 2NF and 3NF? Think about 'Transitive Dependencies'.",
    "When would you purposefully 'Denormalize' a database? (Think about read performance)."
  ],
  cap: [
    "The CAP theorem is a trade-off. If you're at a bank during a network outage, would you rather the ATM tells you 'System Unavailable' (Consistency) or gives you money but might be wrong about your balance (Availability)?",
    "Can we ever have 'Partition Tolerance' AND 'Consistency' AND 'Availability' in a distributed system? Why or why not?",
    "Most modern NoSQL databases are 'Eventual Consistent'. What does that mean for the user experience?"
  ],
  recursion: [
    "Recursion is solving a problem by solving smaller versions of itself. What is the most important part of a recursive function to prevent it from running forever?",
    "Think of the 'Call Stack'. Each time the function calls itself, it adds a new frame. What is 'Stack Overflow'?",
    "Can every recursive function be written as a loop (iteration)? What are the trade-offs in memory?"
  ],
  kubernetes: [
    "Kubernetes is an 'Orchestrator'. If Docker is a single musician, Kubernetes is the conductor of the whole orchestra. How does the conductor handle it if a musician (container) stops playing?",
    "What is a 'Pod' in Kubernetes? Why do we group containers together instead of running them individually?",
    "Think about 'Auto-scaling'. How does Kubernetes know when to add more replicas of your service?"
  ],
  security: [
    "Security is about layers of defense. If you have a strong front door but your windows are open, is your house safe? How does this apply to Web APIs?",
    "What is the difference between Authentication (who you are) and Authorization (what you can do)?",
    "Why is it a bad idea to 'roll your own' cryptography? Think about the years of peer-review that go into standard algorithms like RSA or AES."
  ],
  pandas: [
    "Pandas is all about DataFrames. If a DataFrame is like a spreadsheet, why is it much faster to process using Python than clicking through Excel?",
    "What are 'Vectorized Operations' in Pandas? Why do they make our code more readable and efficient?",
    "How do we handle missing data in a dataset? Should we delete the row, or fill it with a mean/median value?"
  ],
  solid: [
    "SOLID is a mnemonic for five design principles. Let's look at the 'S' (Single Responsibility). If a Swiss Army knife is one tool, is it following SRP?",
    "The 'O' stands for Open/Closed. Software entities should be open for extension but closed for modification. How would you add a new feature without changing existing, tested code?",
    "Liskov Substitution Principle (LSP) says sub-types must be substitutable for their base types. If it looks like a duck and quacks like a duck but needs batteries, is it a duck?",
    "Let's look at the 'D' in SOLID: Dependency Inversion. High-level modules should not depend on low-level modules. Both should depend on abstractions. Why does this make our code easier to test?",
    "Interface Segregation says no client should be forced to depend on methods it does not use. How does this prevent 'fat' interfaces from bloating our codebase?",
    "How does SRP (Single Responsibility) help in reducing the 'Blast Radius' of a bug?"
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
    const isTopicMatch = input.includes(topic) ||
                        (lesson?.title.toLowerCase().includes(topic)) ||
                        (topic === 'syscalls' && input.includes('system call')) ||
                        (topic === 'ml' && (input.includes('ai') || input.includes('machine learning'))) ||
                        (topic === 'cap' && input.includes('distributed'));

    if (isTopicMatch) {
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
