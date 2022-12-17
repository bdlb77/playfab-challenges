import type { ICourse } from "$lib/types";
import mongoose from "mongoose"
const { Schema } = mongoose;


const courseSchema = new Schema({
  title: String,
  description: String,
  courseDate: { type: Date },
  completed: Boolean,
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
}
)

courseSchema.virtual("modules", {
  ref: "module",
  foreignField: "course",
  localField: "_id"
})
// function autoPopulate(next) {
// 	this.populate('modules');
// 	next();
// }

// courseSchema.pre('find', autoPopulate);
// courseSchema.pre('findOne', autoPopulate);

export const CourseModel = mongoose.models.Course ??  mongoose.model<ICourse>("course", courseSchema)
