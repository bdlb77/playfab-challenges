import type { RequestHandler } from './$types'
import { CourseModel } from '$db/models/course'
import { ModuleModel } from '$db/models/module'
import { LessonModel } from '$db/models/lesson'
import { json } from "@sveltejs/kit"
import type { ICourse } from '$lib/types'





export const GET: RequestHandler = async () => {
  console.log("Deleting all Records in Database")
  await LessonModel.deleteMany({})
  await ModuleModel.deleteMany({});
  await CourseModel.deleteMany({});

  console.log("Seeding File");

  const coursesData = [
    {
      title: "Math",
      description: "Course that covers the main concepts.",
      courseDate: "2022-08-01",
      completed: false


    },
    {
      title: "English",
      description: "English 101 that will cover the basics.",
      courseDate: "2022-08-01",
      completed: false
    }
  ]
  await CourseModel.create(coursesData);

  const mathCourse: ICourse | null = await CourseModel.findOne({title: "Math"});
  const englishCourse: ICourse | null = await CourseModel.findOne({title: "English"});

  const modules = [{

    title: "Intro to Math",
    description: "introduction into Math.",
    completed: false,
    course: mathCourse
  },
  {

    title: "Intro to Calculus",
    description: "Get to know the basics of Calculus.",
    completed: false,
    course: mathCourse
  },
  {

    title: "Poetry",
    description: "The poetic module to gain clarity",
    completed: false,
    course: englishCourse
  },
  {

    title: "Fantasy Authors",
    description: "Basics of Fantasy. Get to know the greatest.",
    completed: false,
    course: englishCourse
  },
  {

    title: "Grammar",
    completed: false,
    description: "A comprehensive look at grammar.",
    course: englishCourse
  }]
  await ModuleModel.insertMany(modules);

  const introMathModule = await ModuleModel.findOne({title: "Intro to Math"});
  const introCalcModule = await ModuleModel.findOne({title: "Intro to Calculus"});
  const lessons = [
    {
      title: "Logical Statements",
      description: "The most logical of statements",
      completed: false,
      module: introMathModule
    },
    {
      title: "Propositional Logic",
      description: "The purpose of this assignment is to study a part of propositional calculus by simplifying and evaluating conditional statements",
      completed: false,
      module: introMathModule
    },
    {
      title: "Limits",
      description: "What is the definition of a limit?",
      completed: false,
      module: introCalcModule
    },
    {
      title: "Integrals",
      description: "A function which may express the area under the curve of a graph of the function",
      completed: false,
      module: introCalcModule
    },
    {
      title: "Differencial Calculus",
      description: "A method which deals with the rate of change of one quantity with respect to another",
      completed: false,
      module: introCalcModule
    },
    {
      title: "Haikus",
      description: "A 3 line poem with seventeen syllables",
      completed: false,
      module: await ModuleModel.findOne({title: "Poetry"})
    },
    {
      title: "Sonnet",
      description: "Traditionally, sonnets are made up of 14 lines and usually deal with love",
      completed: false,
      module: await ModuleModel.findOne({title: "Poetry"})
    },
    {
      title: "Acrostic",
      description: "This type of poetry spells out a name, word, phrase or message with the first letter of each line of the poem",
      completed: false,
      module: await ModuleModel.findOne({title: "Poetry"})
    },
    {
      title: "Limerick",
      description: "They have a set rhyme scheme of AABBA, with lines one, two and five all being longer in length than lines three and four",
      completed: false,
      module: await ModuleModel.findOne({title: "Poetry"})
    },
    {
      title: "George R.R. Martin",
      description: "Must Read: A Song of Ice and Fire",
      completed: false,
      module: await ModuleModel.findOne({title: "Fantasy Authors"})
    },
    {
      title: "Brandon Sanderson",
      description: "He is known for the Mistborn trilogy",
      completed: false,
      module: await ModuleModel.findOne({title: "Fantasy Authors"})
    },
    {
      title: "John Ronald Reuel Tolkien",
      description: "Best known for the Hobbit and Lord of the Rings trilogy.",
      completed: false,
      module: await ModuleModel.findOne({title: "Fantasy Authors"})
    },
    {
      title: "Comparative Grammar",
      description: "The analysis and comparison of the grammatical structures of related language",
      completed: false,
      module: await ModuleModel.findOne({title: "Grammar"})
    },
    {
      title: "Generative Grammar",
      description: "The rules determining the structure and interpretation of sentences that speakers accept as belonging to the language",
      completed: false,
      module: await ModuleModel.findOne({title: "Grammar"})
    },
    {
      title: "Pedegogical Grammar",
      description: "Grammatical analysis and instruction designed for second-language students",
      completed: false,
      module: await ModuleModel.findOne({title: "Grammar"})
    }
  ]
  await LessonModel.insertMany(lessons);
  console.log("Finished Seeding");
  const courses = await CourseModel.find().populate({path: "modules", populate: {path: "lessons", model: "lesson"}});
  console.log({ courses })
  return json({
    ok: true,
    data: courses
  }, {
    status: 200
  })
}
