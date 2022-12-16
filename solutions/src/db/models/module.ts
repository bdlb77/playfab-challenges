import type { CourseType, ModuleType } from "$lib/types";
import mongoose, { Schema } from "mongoose"
import { CourseModel } from "./course";
const { Schema } = mongoose;

const moduleSchema = new Schema({
  title: String,
  description: String,
  courseDate: { type: Date },
  completed: Boolean,
  course: { type: Schema.Types.ObjectId, ref: "Course" },
})

moduleSchema.virtual("lessons", {
  ref: "Lesson",
  localField: "_id",
  foreignField: "module"
})

export const ModuleModel = mongoose.models.Module ??  mongoose.model<ModuleType>("Module", moduleSchema)
