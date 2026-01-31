export type SubjectId =
  | 'fundamentals'
  | 'dsa'
  | 'os'
  | 'databases'
  | 'se_principles'
  | 'web_dev'
  | 'devops'
  | 'ml_ai'
  | 'data_science'
  | 'cybersecurity';

export type LessonType = 'theory' | 'coding' | 'quiz' | 'visualization' | 'reflection';

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  content: string;
  codeSnippet?: string;
  language?: string;
  solution?: string;
  quizOptions?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  externalResources?: {
    title: string;
    url: string;
    type: 'video' | 'paper' | 'doc' | 'repo';
  }[];
  visualizationId?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Module {
  id: string;
  title: string;
  subjectId: SubjectId;
  courses: Course[];
}

export interface Curriculum {
  modules: Module[];
}

export interface UserProgress {
  completedLessons: string[];
  xp: number;
  streak: number;
  lastActive: string;
  level: number;
  topicMastery: Record<string, number>; // 0 to 100
  weakTopics: string[];
  adaptiveMetrics: {
    mistakesPerLesson: Record<string, number>;
    timeSpentPerLesson: Record<string, number>;
  };
}
