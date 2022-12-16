import type { Actions } from "./$types";
import { lessons } from '$db/models/lesson';

export const actions: Actions = {
  toggle: async ({ request }) => {
    const form = await request.formData();

    const courseTitle = form.get("course_title");
    const moduleTitle = form.get("module_title");
    const lessonTitle = form.get("lesson_title");

    const toggledComplete: boolean = !!form.get("completed")
    const lesson = await lessons.findOne({ title: lessonTitle})
    lessons.updateOne({ title: lessonTitle},
      {
        $set: { "completed": toggledComplete}
      }
    )
  }
}
