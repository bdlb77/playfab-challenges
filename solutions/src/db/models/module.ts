import type { IModule } from "$lib/types";
import mongoose, { Schema } from "mongoose"

const moduleSchema = new Schema({
  title: String,
  description: String,
  courseDate: { type: Date },
  completed: Boolean,
  course: { type: Schema.Types.ObjectId, ref: "course" },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})

moduleSchema.virtual("lessons", {
  ref: "lesson",
  localField: "_id",
  foreignField: "module"
})

export const ModuleModel = mongoose.models.Module ?? mongoose.model<IModule>("module", moduleSchema)
