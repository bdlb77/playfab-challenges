import type { LessonType } from "$lib/types";
import mongoose from "mongoose"
const { Schema } = mongoose;

const lessonSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean,
  module: { type: Schema.Types.ObjectId, ref: "Module"}
})

export const LessonModel = mongoose.models.Lesson ??  mongoose.model<LessonType>("Lesson", lessonSchema)
