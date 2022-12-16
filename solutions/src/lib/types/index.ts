import type { Schema } from "mongoose";


export interface CourseType {
  _id: string;
  title: string;
  description: string;
  courseDate: Date;
  completed: boolean;
  modules?: [Schema.Types.ObjectId];
}

export interface ModuleType {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  course: Schema.Types.ObjectId;
  lessons?: [Schema.Types.ObjectId];
}

export interface LessonType {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  module: Schema.Types.ObjectId;
}
