# 🎓 CodeMentor AI

**"The Duolingo for Software Engineering"**

CodeMentor AI is a premium, AI-powered educational platform designed to bridge the gap between computer science theory and practical engineering mastery. Built with a focus on **Socratic teaching**, **interactive visualizations**, and a **luxury user experience**.

---

## 🚀 Quick Start (What to do after cloning)

If you have just cloned this repository, follow these exact steps to get the "Ultimate App" running on your machine:

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Your Environment
Create a `.env` file in the root directory:
```bash
# Required for progress tracking
DATABASE_URL="file:./dev.db"

# Optional: Add your OpenAI API Key for the premium GPT-4 Socratic Tutor.
# If omitted, the app will use the high-fidelity Local Socratic Fallback Engine.
OPENAI_API_KEY="your_key_here"
```

### 3. Initialize the Database (Prisma v7+)
Set up your local SQLite database and generate the Prisma client. Note that Prisma v7 uses `prisma.config.ts` for database configuration:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 4. Start the Development Server
```bash
npm run dev
```

### 5. Start Learning
Navigate to [http://localhost:3000](http://localhost:3000).
- **Recommended**: Use "Responsive Mode" (Mobile view) in your browser for the best luxury experience.

---

## ✨ Core Pillars

### 🧠 Socratic AI Tutor
Unlike typical AI tools that simply "dump" solutions, CodeMentor AI uses a **Socratic Engine**. It analyzes your code, identifies conceptual gaps, and asks probing questions to lead you to the answer yourself.
- *Features*: Line-by-line explanations, physical-world analogies, and "Thinking" state simulation.

### 📊 Interactive Visualization Library
Master complex topics through visual intuition. The app includes custom-built visualizers for:
- **DSA**: Bubble Sort, Linked List traversals, Graph searches.
- **System Design**: CPU Scheduling (Round Robin), Memory (Stack vs Heap).
- **AI/ML**: Perceptron training, Neural Network layers, MLOps Quantization.
- **Networking**: The TCP/IP 4-layer stack.

### 📈 Adaptive Learning Engine
The platform monitors your mistakes and time spent. If you struggle with a concept, the **Lesson Engine** automatically adjusts:
- **Difficulty**: Switches from "Expert" (write from scratch) to "Easy" (fill-in-the-blanks).
- **Recommendations**: Suggests foundational lessons if gaps are detected.

### 🏆 Gamification & Mastery
- **XP & Levels**: Earn points for every correct answer and visualization interaction.
- **Daily Streaks**: Build the habit of daily coding.
- **Skill Tree**: Progress through 10+ modules from "Programming Fundamentals" to "Advanced AI & ML".

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI & Animations**: [Tailwind CSS v4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Database**: [Prisma](https://www.prisma.io/) with [SQLite](https://www.sqlite.org/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (with LocalStorage Persistence)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Jest](https://jestjs.io/)

---

## 🧪 Quality Assurance

We maintain a high bar for quality. To run the automated test suite:
```bash
npm test
```

To run a production-grade build check:
```bash
npm run build
```

---

## 📜 License
CodeMentor AI is released under the MIT License. Built for the future of developer education.
