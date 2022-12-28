import type {  PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import {CourseModel} from "$db/models/course";
import type { ICourse } from "$lib/types";
export const load: PageServerLoad = async ({ params, parent }) => {
  const { slug } = params;

  // check if stores exist.
  const data = await CourseModel.findOne<ICourse>({ _id: slug }).populate("modules")
  const courseJSON = JSON.stringify(data);
  const courseData = JSON.parse(courseJSON);
  const { user } = await parent();
  if (!user) {
    throw redirect(302, "/login");
  }
  return { course: courseData }
}
