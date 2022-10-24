
type Lesson = {
  title: string;
  description: string;
  completed: boolean;
}
type CourseModule = {
  title: string;
  completed: boolean;
  lessons: Lesson[];
}
type Course = {
  title: string;
  semester: string;
  completed: boolean;
  modules: CourseModule[]
}


const courses: Course[] = [
  {
    title: "Math",
    semester: "Fall 2020",
    completed: false,
    modules: [
      {
        title: "Intro To Math",
        completed: false,
        lessons: [
          {
            title: "Logic of Compound Statements",
            description: "The most logical of statements",
            completed: false
          },
          {
            title: "Logic of Conditional Statements",
            description: "The purpose of this assignment is to study a part of propositional calculus by simplifying and evaluating conditional statements",
            completed: false
          },
        ]
      },
      {
        title: "Intro To Calculus",
        completed: false,
        lessons: [
          {
            title: "Limits",
            description: "What is the definition of a limit?",
            completed: false
          },
          {
            title: "Integrals",
            description: "A function which may express the area under the curve of a graph of the function",
            completed: false
          },
          {
            title: "Differencial Calculus",
            description: "A method which deals with the rate of change of one quantity with respect to another",
            completed: false
          },
        ]
      }
    ]
  },
  {
    title: "English",
    semester: "Fall 2020",
    completed: false,
    modules: [
      {
        title: "Poetry",
        completed: false,
        lessons: [
          {
            title: "Haikus",
            description: "A 3 line poem with seventeen syllables",
            completed: false
          },
          {
            title: "Sonnet",
            description: "Traditionally, sonnets are made up of 14 lines and usually deal with love",
            completed: false
          },
          {
            title: "Acrostic",
            description: "This type of poetry spells out a name, word, phrase or message with the first letter of each line of the poem",
            completed: false
          },
          {
            title: "Limerick",
            description: "They have a set rhyme scheme of AABBA, with lines one, two and five all being longer in length than lines three and four",
            completed: false
          },
        ]
      },
      {
        title: "Fantasy Authors",
        completed: false,
        lessons: [
          {
            title: "George R.R. Martin",
            description: "Must Read: A Song of Ice and Fire",
            completed: false
          },
          {
            title: "Brandon Sanderson",
            description: "He is known for the Mistborn trilogy",
            completed: false
          },
          {
            title: "John Ronald Reuel Tolkien",
            description: "Best known for the Hobbit and Lord of the Rings trilogy.",
            completed: false
          },
        ]
      },
      {
        title: "Grammar",
        completed: false,
        lessons: [
          {
            title: "Comparative Grammar",
            description: "The analysis and comparison of the grammatical structures of related language",
            completed: false
          },
          {
            title: "Generative Grammar",
            description: "The rules determining the structure and interpretation of sentences that speakers accept as belonging to the language",
            completed: false
          },
          {
            title: "Pedegogical Grammar",
            description: "Grammatical analysis and instruction designed for second-language students",
            completed: false
          },
        ]
      }
    ]
  }
]



export { courses };
