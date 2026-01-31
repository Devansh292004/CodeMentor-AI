import { Lesson } from "@/types";

export const getSocraticResponse = (userInput: string, lesson: Lesson): string => {
  const input = userInput.toLowerCase();

  if (input.includes("answer") || input.includes("solution") || input.includes("give me code")) {
    return "I can't give you the direct solution, as that wouldn't help you learn! But let's look at the problem together. What is the first thing we need to do to solve this?";
  }

  if (lesson.id === "py-intro") {
    if (input.includes("variable")) {
      return "Exactly, variables are like containers. If you wanted to store someone's name, what data type would you use for that container?";
    }
  }

  if (lesson.id === "arr-complexity") {
    if (input.includes("fast") || input.includes("o(1)")) {
      return "Spot on! Why do you think accessing an element by index is so fast in an array? What's happening in the physical memory?";
    }
  }

  const genericSocraticPrompts = [
    "That's an interesting observation. How does it connect to what we just read in the theory section?",
    "If you were explaining this to a five-year-old, how would you describe the next step?",
    "What do you think happens if we change the input size? How would the algorithm react?",
    "You're making progress! Look closely at the code snippet. Is there any part that seems redundant to you?",
    "Consider the edge cases. What's the 'worst-case scenario' for this piece of code?"
  ];

  return genericSocraticPrompts[Math.floor(Math.random() * genericSocraticPrompts.length)];
};
