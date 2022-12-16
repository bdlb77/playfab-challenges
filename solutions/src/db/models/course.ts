import type { CourseType } from "$lib/types";
import mongoose from "mongoose"
const { Schema } = mongoose;


const courseSchema = new Schema({
  title: String,
  description: String,
  courseDate: { type: Date },
  completed: Boolean,
})

courseSchema.virtual("modules", {
  ref: "Module",
  localField: "_id",
  foreignField: "course"
})

export const CourseModel = mongoose.models.Course ??  mongoose.model<CourseType>("Course", courseSchema)
