import type { Schema, Document } from "mongoose";


export interface ICourse extends Document {
  title: string;
  description: string;
  courseDate: Date;
  completed: boolean;
  modules?: IModule[];
}

export interface IModule extends Document {
  title: string;
  description: string;
  completed: boolean;
  course: Schema.Types.ObjectId;
  lessons?: ILesson[];
}

export interface ILesson extends Document {
  title: string;
  description: string;
  completed: boolean;
  module: Schema.Types.ObjectId;
}
