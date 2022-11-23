import type { Lesson } from "$lib/api/data";
import { writable } from "svelte/store";

const lessons: Lesson[] = [];
const lessonsStore = writable(lessons);

// const updateCourse = (course: Course) => update(courses => {
//   // update here.
//   return [...courses, course];
// })

// const reset = () => set(COURSES);

export default lessonsStore;
