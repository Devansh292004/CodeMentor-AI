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

  if (input.includes("pointer") || input.includes("address")) {
    return "Pointers are fundamental. If the pointer stores the memory address, how do we actually look at the value stored at that address? What's the term for that operation?";
  }

  if (input.includes("process") || input.includes("thread")) {
    return "Great focus. If a process crashes, what happens to its threads? And if one thread crashes, what's the impact on the others? Why is that isolation (or lack of it) important?";
  }

  if (input.includes("sql") || input.includes("join")) {
    return "Joins are about relationships. If we have two circles in a Venn diagram, which part represents an INNER JOIN? What happens to records that don't have a match?";
  }

  if (input.includes("neural") || input.includes("network") || input.includes("ml")) {
    return "Think of a neural network like a committee where everyone has a vote, but some members' votes carry more weight. How does the committee learn which members to trust more over time?";
  }

  if (input.includes("docker") || input.includes("container")) {
    return "If a Virtual Machine is like a whole house, how would you describe a Container using the same analogy? Why is it more 'lightweight'?";
  }

  if (input.includes("recursion")) {
    return "Recursion is like looking into two mirrors facing each other. But in code, we need to stop at some point. What is that stopping condition called, and what happens if we forget it?";
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
