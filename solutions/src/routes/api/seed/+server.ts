import type { RequestHandler } from './$types'
import { CourseModel } from '$db/models/course'
import { ModuleModel } from '$db/models/module'
import { LessonModel } from '$db/models/lesson'
import { json } from "@sveltejs/kit"
import { ObjectId } from 'mongodb'





export const GET: RequestHandler = async () => {
  console.log("Deleting all Records in Database")
  await LessonModel.remove({})
  await ModuleModel.remove({});
  await CourseModel.deleteMany({});

  console.log("Seeding File");
  const coursesData = [
    {
      _id: new ObjectId(),
      title: "Math",
      description: "Course that covers the main concepts.",
      courseDate: "2022-08-01",
      completed: false


    },
    {
      _id: new ObjectId(),
      title: "English",
      description: "English 101 that will cover the basics.",
      courseDate: "2022-08-01",
      completed: false
    }
  ]
  await CourseModel.insertMany(coursesData);

  const modules = [{
    _id: new ObjectId(),
    title: "Intro To Math",
    description: "introduction into Math.",
    completed: false,
    course: CourseModel.find({ title: "Math" })._id
  },
  {
    _id: new ObjectId(),
    title: "Intro To Calculus",
    description: "Get to know the basics of Calculus.",
    completed: false,
    courseTitle: CourseModel.find({ title: "Math" })._id
  },
  {
    _id: new ObjectId(),
    title: "Poetry",
    description: "The poetic module to gain clarity",
    completed: false,
    courseTitle: CourseModel.find({ title: "English" })._id
  },
  {
    _id: new ObjectId(),
    title: "Fantasy Authors",
    description: "Basics of Fantasy. Get to know the greatest.",
    completed: false,
    courseTitle: CourseModel.find({ title: "English" })._id
  },
  {
    _id: new ObjectId(),
    title: "Grammar",
    completed: false,
    description: "A comprehensive look at grammar.",
    courseTitle: CourseModel.find({ title: "English" })._id
  }]
  await ModuleModel.insertMany(modules);

  const lessons = [
    {
  _id: new ObjectId(),
      title: "Intro to Math",
      description: "The most logical of statements",
      completed: false,
      module: ModuleModel.find({title: "Intro to Math"})._id
    },
    {
  _id: new ObjectId(),
      title: "Intro to Math",
      description: "The purpose of this assignment is to study a part of propositional calculus by simplifying and evaluating conditional statements",
      completed: false,
      module: ModuleModel.find({title: "Intro to Math"})._id
    },
    {
  _id: new ObjectId(),
      title: "Limits",
      description: "What is the definition of a limit?",
      completed: false,
      module: ModuleModel.find({title: "Intro to Calculus"})._id
    },
    {
  _id: new ObjectId(),
      title: "Integrals",
      description: "A function which may express the area under the curve of a graph of the function",
      completed: false,
      module: ModuleModel.find({title: "Intro to Calculus"})._id
    },
    {
  _id: new ObjectId(),
      title: "Differencial Calculus",
      description: "A method which deals with the rate of change of one quantity with respect to another",
      completed: false,
      module: ModuleModel.find({title: "Intro to Calculus"})._id
    },
    {
  _id: new ObjectId(),
      title: "Haikus",
      description: "A 3 line poem with seventeen syllables",
      completed: false,
      module: ModuleModel.find({title: "Poetry"})._id
    },
    {
  _id: new ObjectId(),
      title: "Sonnet",
      description: "Traditionally, sonnets are made up of 14 lines and usually deal with love",
      completed: false,
      module: ModuleModel.find({title: "Poetry"})._id
    },
    {
  _id: new ObjectId(),
      title: "Acrostic",
      description: "This type of poetry spells out a name, word, phrase or message with the first letter of each line of the poem",
      completed: false,
      module: ModuleModel.find({title: "Poetry"})._id
    },
    {
  _id: new ObjectId(),
      title: "Limerick",
      description: "They have a set rhyme scheme of AABBA, with lines one, two and five all being longer in length than lines three and four",
      completed: false,
      module: ModuleModel.find({title: "Poetry"})._id
    },
    {
  _id: new ObjectId(),
      title: "George R.R. Martin",
      description: "Must Read: A Song of Ice and Fire",
      completed: false,
      module: ModuleModel.find({title: "Fantasy Authors"})._id
    },
    {
  _id: new ObjectId(),
      title: "Brandon Sanderson",
      description: "He is known for the Mistborn trilogy",
      completed: false,
      module: ModuleModel.find({title: "Fantasy Authors"})._id
    },
    {
  _id: new ObjectId(),
      title: "John Ronald Reuel Tolkien",
      description: "Best known for the Hobbit and Lord of the Rings trilogy.",
      completed: false,
      module: ModuleModel.find({title: "Fantasy Authors"})._id
    },
    {
  _id: new ObjectId(),
      title: "Comparative Grammar",
      description: "The analysis and comparison of the grammatical structures of related language",
      completed: false,
      module: ModuleModel.find({title: "Grammar"})._id
    },
    {
  _id: new ObjectId(),
      title: "Generative Grammar",
      description: "The rules determining the structure and interpretation of sentences that speakers accept as belonging to the language",
      completed: false,
      module: ModuleModel.find({title: "Grammar"})._id
    },
    {
  _id: new ObjectId(),
      title: "Pedegogical Grammar",
      description: "Grammatical analysis and instruction designed for second-language students",
      completed: false,
      module: ModuleModel.find({title: "Grammar"})._id
    }
  ]
  await LessonModel.insertMany(lessons);
  console.log("Finished Seeding");
  const courses = await CourseModel.find();
  console.log({ courses })
  return json({
    ok: true,
    data: courses
  }, {
    status: 200
  })
}
