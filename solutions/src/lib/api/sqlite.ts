import Database from 'better-sqlite3';
import { courses, modules, lessons, type Course, type Module, type Lesson } from "./data";


export class SqliteDb {
  private db = new Database('playfabsqlite.db');
  private courseName = "courses"
  private moduleName = "modules"
  private lessonName = "lessons"

  constructor() {
    this._initializeDB();
    // this._seed();
  }

  public getCourses() {
    try {
      const query = this.db.prepare("SELECT * FROM courses");
      const courses = query.all();
      return courses;
    } catch(err) {
      console.error("Error: ", err)
    }
  }
  private _seed() {
    const insertCourses = this.db.prepare(`INSERT INTO ${this.courseName}
        (id, title, description, courseDate)
        VALUES(@id, @title, @description, @courseDate);`);

    const insertModules = this.db.prepare(`INSERT INTO ${this.moduleName}
        (title, id, description, courseId)
        VALUES(@title, @id, @description, @courseId);`);
    const insertLessons = this.db.prepare(`INSERT INTO ${this.lessonName}
        (title, id, description, moduleId)
        VALUES(@title, @id, @description, @moduleId);`);
    const createCourses = this.db.transaction((courses: Course[]) => {
      for (const course of courses) {
        insertCourses.run({
          id: course.id,
          title: course.title,
          description: course.description,
          courseDate: course.courseDate,
         })
      }
    })
    const createModules = this.db.transaction((modules: Module[]) => {
      for (const module of modules) {
        insertModules.run({
          id: module.id,
          title: module.title,
          description: module.description,
          courseId: module.courseId
        })
      }
    })
    const createLessons = this.db.transaction((lessons: Lesson[]) => {
      for (const lesson of lessons) {
        insertLessons.run({
          id: lesson.id,
          title: lesson.title,
          description: lesson.description,
          moduleId: lesson.moduleId
        })
      }
    })

    createCourses(courses);
    createModules(modules);
    createLessons(lessons);
  }

  private _initializeDB() {
    const courseTable = `CREATE TABLE IF NOT EXISTS courses (
      id INT IDENTITY PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      courseDate DATE NOT NULL,
      completed BOOLEAN NOT NULL DEFAULT false
    )`
    const moduleTable = `CREATE TABLE IF NOT EXISTS modules (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      completed BOOLEAN NOT NULL DEFAULT false,
      courseId INT REFERENCES courses (id)
    )`
    const lessonTable = `CREATE TABLE IF NOT EXISTS lessons (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        completed BOOLEAN NOT NULL DEFAULT false,
        moduleId INT REFERENCES modules (id)
    )`

    // this.db.prepare(courseTable).run();
    // this.db.prepare(moduleTable).run();
    // this.db.prepare(lessonTable).run();

  }


}

