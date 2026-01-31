import { Module } from "../../types";

export const cybersecurityModule: Module = {
  id: "cyber-1",
  title: "Cybersecurity & Networking",
  subjectId: "cybersecurity",
  courses: [
    {
      id: "networking-basics",
      title: "Networking Protocols",
      description: "How data travels across the internet.",
      lessons: [
        {
          id: "tcp-ip-stack",
          title: "The TCP/IP Stack",
          type: "visualization",
          content: "Learn about the four layers of the TCP/IP model.",
          visualizationId: "tcp-stack-viz"
        },
        {
          id: "http-https",
          title: "HTTP vs HTTPS",
          type: "theory",
          content: "Understanding the role of SSL/TLS in secure communication.",
        }
      ]
    },
    {
      id: "cryptography",
      title: "Basic Cryptography",
      description: "Secure your data with encryption.",
      lessons: [
        {
          id: "symmetric-encryption",
          title: "Symmetric Encryption",
          type: "coding",
          content: "Implement a basic Caesar cipher.",
          codeSnippet: "def encrypt(text, s):\n    result = \"\"\n    for i in range(len(text)):\n        char = text[i]\n        if char.isupper():\n            result += chr((ord(char) + s - 65) % 26 + 65)\n        else:\n            result += chr((ord(char) + s - 97) % 26 + 97)\n    return result",
          language: "python",
        }
      ]
    }
  ],
};
