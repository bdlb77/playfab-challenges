
export interface Lesson {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  moduleId: number;
}
export interface Module {
  id: number;
  title: string;
  completed: boolean;
  description: string;
  courseId: number;
}
export interface Course {
  id: number;
  title: string;
  courseDate: string;
  description: string;
  completed: boolean;
}

const courses: Course[] = [
  {

    id: 1,
    title: "Math",
    description: "Course that covers the main concepts.",
    courseDate: "2022-08-01",
    completed: false,

  },
  {
    id: 2,
    title: "English",
    description: "English 101 that will cover the basics.",
    courseDate: "2022-08-01",
    completed: false,
  }
]

const modules: Module[] = [
  {
    id: 1,
    title: "Intro To Math",
    description: "introduction into Math.",
    completed: false,
    courseId: 1,
  },
  {
    id: 2,
    title: "Intro To Calculus",
    description: "Get to know the basics of Calculus.",
    completed: false,
    courseId: 1,

  },
    {
      id: 3,
      title: "Poetry",
      description: "The poetic module to gain clarity",
      completed: false,
      courseId: 2,
    },
    {
      id: 4,
      title: "Fantasy Authors",
      description: "Basics of Fantasy. Get to know the greatest.",
      completed: false,
      courseId: 2,
    },
    {
      id: 5,
      title: "Grammar",
      completed: false,
      description: "A comprehensive look at grammar.",
      courseId: 2,
    }
]

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Logic of Compound Statements",
    description: "The most logical of statements",
    completed: false,
    moduleId: 1,
  },
  {
    id:2,
    title: "Logic of Conditional Statements",
    description: "The purpose of this assignment is to study a part of propositional calculus by simplifying and evaluating conditional statements",
    completed: false,
    moduleId: 1
  },
    {

      id: 3,
      title: "Limits",
      description: "What is the definition of a limit?",
      completed: false,
      moduleId: 2
    },
    {
      id:4,
      title: "Integrals",
      description: "A function which may express the area under the curve of a graph of the function",
      completed: false,
      moduleId: 2
    },
    {
      id: 5,
      title: "Differencial Calculus",
      description: "A method which deals with the rate of change of one quantity with respect to another",
      completed: false,
      moduleId: 2
    },
    {
      id: 6,
      title: "Haikus",
      description: "A 3 line poem with seventeen syllables",
      completed: false,
      moduleId: 3,
    },
    {
      id: 7,
      title: "Sonnet",
      description: "Traditionally, sonnets are made up of 14 lines and usually deal with love",
      completed: false,
      moduleId: 3,
    },
    {
      id: 8,
      title: "Acrostic",
      description: "This type of poetry spells out a name, word, phrase or message with the first letter of each line of the poem",
      completed: false,
      moduleId: 3,
    },
    {
      id: 9,
      title: "Limerick",
      description: "They have a set rhyme scheme of AABBA, with lines one, two and five all being longer in length than lines three and four",
      completed: false,
      moduleId: 3,
    },
    {
      id: 10,
      title: "George R.R. Martin",
      description: "Must Read: A Song of Ice and Fire",
      completed: false,
      moduleId: 4
    },
    {
      id: 11,
      title: "Brandon Sanderson",
      description: "He is known for the Mistborn trilogy",
      completed: false,
      moduleId: 4
    },
    {
      id: 12,
      title: "John Ronald Reuel Tolkien",
      description: "Best known for the Hobbit and Lord of the Rings trilogy.",
      completed: false,
      moduleId: 4
    },
    {
      id: 13,
      title: "Comparative Grammar",
      description: "The analysis and comparison of the grammatical structures of related language",
      completed: false,
      moduleId: 5,
    },
    {
      id: 14,
      title: "Generative Grammar",
      description: "The rules determining the structure and interpretation of sentences that speakers accept as belonging to the language",
      completed: false,
      moduleId: 5,
    },
    {
      id: 15,
      title: "Pedegogical Grammar",
      description: "Grammatical analysis and instruction designed for second-language students",
      completed: false,
      moduleId: 5
    },
]
export { courses, modules, lessons };


