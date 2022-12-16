import type {  PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
// import { courses } from "$db/courses";
import Course from "$db/models/course";
export const load: PageServerLoad = async ({ params, parent }) => {
  const { courseId } = params;

  // check if stores exist.
  const data = await Course.findOne({ _id: courseId })
  const courseJSON = JSON.stringify(data);
  const courseData = JSON.parse(courseJSON);

  const { user } = await parent();
  if (!user) {
    throw redirect(302, "/login");
  }
  return { course: courseData }
}
