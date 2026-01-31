# CodeMentor AI

CodeMentor AI is a Duolingo-style, gamified learning platform for Software Engineering. It teaches students how to think through Socratic AI tutoring, interactive visualizations, and bite-sized lessons.

## Features

- **Luxury UI/UX**: Mobile-first, animated, and premium feel using Tailwind CSS v4 and Framer Motion.
- **Socratic AI Tutor**: An AI-powered companion that guides you through concepts without giving direct answers.
- **Comprehensive Curriculum**: Covers 10 core subjects including DSA, OS, Databases, Web Dev, and AI/ML.
- **Interactive Visualizations**: Real-time animations for sorting algorithms, CPU scheduling, and neural networks.
- **Gamification**: XP, Levels, Streaks, and Skill Trees to keep you motivated.
- **Full-Stack Persistence**: Local-first state with background synchronization to a Prisma/SQLite backend.

## Getting Started

Follow these steps to set up and run CodeMentor AI on your local machine:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd CodeMentor-AI
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your database URL:

```bash
echo "DATABASE_URL=\"file:./dev.db\"" > .env
```

### 4. Database Setup

Initialize the SQLite database and generate the Prisma Client:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start learning!

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS v4, Framer Motion, Lucide React.
- **State Management**: Zustand with persistence.
- **Backend**: Next.js API Routes, Prisma ORM.
- **Database**: SQLite.
- **Testing**: Jest.

## Testing

Run the test suite using:

```bash
npm test
```
