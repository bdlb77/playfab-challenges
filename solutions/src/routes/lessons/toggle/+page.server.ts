import type { Actions } from "./$types";
import { courses } from '$lib/api/data';

export const actions: Actions = {
  toggle: async ({ request }) => {
    const form = await request.formData();

    const courseTitle = form.get("course_title");
    const moduleTitle = form.get("module_title");
    const lessonTitle = form.get("lesson_title");

    const course = courses.find(course => course.title === courseTitle);
    const module  = course?.modules.find(module => module.title === moduleTitle);
    const lesson = module?.lessons.find(lesson => lesson.title === lessonTitle);

    lesson!.completed = !!form.get("completed");
  }
}
