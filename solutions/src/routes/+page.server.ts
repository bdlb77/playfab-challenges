import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import {CourseModel} from "$db/models/course";

export const load: PageServerLoad = async ({ parent }) => {
  // TODO: API Call Here.
  const { user } = await parent();
  const data = await CourseModel.find()
  const coursesJSON = JSON.stringify(data);
  const coursesData = JSON.parse(coursesJSON);

  if (!user) {
    throw redirect(303, "/login");
  }
  return {
    courses: coursesData
  }
}
