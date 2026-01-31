import { Lesson } from "@/types";

// Simulate a mini-knowledge base for the fallback engine
const knowledgeBase: Record<string, string[]> = {
  syscalls: [
    "A system call is the programmatic way in which a computer program requests a service from the kernel. If the CPU is a gated community, how does a resident (process) ask the gatekeeper (kernel) for a delivery?",
    "Think of syscalls as the 'bridge' between user space and kernel space. Why do you think we don't let user programs access hardware directly?",
    "Every time you read a file or print to console, a syscall happens. In Linux, do you know which syscall is responsible for creating a new process?"
  ],
  memory: [
    "Memory is like a giant warehouse of boxes, each with an address. If we have a 'Stack' and a 'Heap', which one do you think is managed more like a 'last-in, first-out' pile of cafeteria trays?",
    "Virtual memory allows us to pretend we have more RAM than we actually do. If your physical RAM is a small desk, what would the 'swap space' on the disk be in this office analogy?",
    "Pointers store memory addresses. If a pointer is a piece of paper with a house address on it, what is the 'dereferencing' operation in that story?"
  ],
  concurrency: [
    "A process is like a whole factory, while threads are workers within that factory. If one worker (thread) makes a mistake and breaks a shared machine, what happens to the other workers?",
    "Deadlocks occur when two threads are waiting for each other to release a resource. It's like two people meeting in a narrow hallway and neither will step aside. How would you design a rule to prevent this 'standoff'?",
    "Mutexes and Semaphores are tools for synchronization. If a Mutex is a key to a single bathroom, what would a Semaphore be in a locker room with 5 showers?"
  ],
  complexity: [
    "Big O notation measures how an algorithm's time grows with input size. If an O(n) algorithm takes 1 second for 10 items, how long does it take for 100 items? What about an O(n^2) one?",
    "Space complexity is about how much extra 'scratch paper' an algorithm needs. If you're sorting a deck of cards by moving them around in your hands, is that more or less space-efficient than laying them all out on a table?",
    "Binary search is O(log n). Why is it so much faster than linear search for large datasets? Think about how many items you eliminate at each step."
  ],
  ml: [
    "Neural networks are inspired by the brain. If a neuron only 'fires' when its inputs reach a certain threshold, how does that help a computer make a 'yes' or 'no' decision?",
    "Training a model is like teaching a child by showing examples. If the child only sees pictures of Golden Retrievers, will they know what a Chihuahua is? This is called 'overfitting' or 'bias'—how do we fix it?",
    "Gradient descent is like walking down a mountain in the fog by feeling the slope under your feet. How do you know when you've reached the bottom (the minimum error)?"
  ],
  devops: [
    "A container is like a standard shipping container on a cargo ship. Why is it easier to move a shipping container between different ships (servers) than to move the entire ship?",
    "CI/CD is about automation. If you had to manually test your code every time you saved a file, what would happen to your productivity? How does a 'pipeline' solve this?",
    "Infrastructure as Code (IaC) allows you to define your servers using a text file. Why is this better than manually clicking buttons in a cloud console?"
  ],
  recursion: [
    "Recursion is a function that calls itself. Imagine you're standing between two mirrors—what's the one thing that must happen to prevent you from seeing infinite copies of yourself?",
    "Every recursive call needs a 'base case'. If you're searching for a book in a stack, what is your base case?",
    "Think of the Call Stack. Each time a function calls itself, a new layer is added. What happens if we add too many layers?"
  ],
  security: [
    "Cross-Site Scripting (XSS) is like someone slipping a fake note into your pocket that tells you to give them your wallet. How can we make sure we don't 'execute' instructions from strangers?",
    "SQL Injection happens when untrusted data is treated as code. If a login form asks for your name, and you type 'Robert'); DROP TABLE Students;--', what is the database trying to do?",
    "Encryption is like a secret code. Symmetric encryption uses one key, while asymmetric uses two. Why is it safer to give out your 'Public Key' but keep your 'Private Key' hidden?"
  ]
};

export const getSocraticResponse = (userInput: string, lesson?: Lesson, history: { role: string, content: string }[] = []): string => {
  // Use history to avoid repetition
  const seenResponses = new Set(history.map(h => h.content));

  const input = userInput.toLowerCase();

  // Anti-cheating rule
  if (input.includes("answer") || input.includes("solution") || input.includes("give me code")) {
    return "I can't give you the direct solution, as that wouldn't help you learn! But let's look at the logic. What's the very first step you'd take to solve this manually?";
  }

  // Check specific knowledge categories
  const categories = Object.keys(knowledgeBase);
  for (const cat of categories) {
    const isMatch = input.includes(cat) ||
                   (cat === 'syscalls' && input.includes('system call')) ||
                   (cat === 'ml' && (input.includes('machine learning') || input.includes('ai'))) ||
                   (cat === 'security' && (input.includes('hack') || input.includes('protect'))) ||
                   (cat === 'devops' && (input.includes('docker') || input.includes('deployment')));

    if (isMatch) {
      const responses = knowledgeBase[cat];
      const unused = responses.filter(r => !seenResponses.has(r));
      const chosen = unused.length > 0 ? unused[0] : responses[Math.floor(Math.random() * responses.length)];
      seenResponses.add(chosen);
      return chosen;
    }
  }

  // Lesson-specific context
  if (lesson) {
    if (lesson.id.includes("arr") && input.includes("array")) {
      return "Arrays are contiguous in memory. If you wanted to insert an element at the very beginning, why would that be 'expensive' for the computer?";
    }
    if (lesson.id.includes("py") && input.includes("python")) {
      return "Python is an interpreted language. What do you think that means for execution speed compared to a compiled language like C?";
    }
  }

  // Fallback generic but high-quality Socratic prompts
  const genericPrompts = [
    "That's a great starting point. If you had to explain the 'why' behind that to a colleague, what would you say?",
    "Interesting. How does that concept relate to what we've seen so far in this module?",
    "Let's think about the edge cases. What happens if the input is empty or extremely large?",
    "You're on the right track! Take a look at the code or theory again—is there a part that feels like it could be simplified?",
    "If you were the computer, what's the very first instruction you'd execute to handle that request?"
  ];

  const unusedGeneric = genericPrompts.filter(p => !seenResponses.has(p));
  const finalPrompt = unusedGeneric.length > 0 ? unusedGeneric[0] : genericPrompts[Math.floor(Math.random() * genericPrompts.length)];
  seenResponses.add(finalPrompt);

  return finalPrompt;
};
