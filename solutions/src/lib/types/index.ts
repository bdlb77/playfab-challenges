import type { Document } from "mongoose";


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
  course: ICourse;
  lessons?: ILesson[];
}

export interface ILesson extends Document {
  title: string;
  description: string;
  completed: boolean;
  module: IModule;
}
