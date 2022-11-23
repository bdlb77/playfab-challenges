import { writable } from 'svelte/store';
import { SqliteDb } from "$lib/api/sqlite";
import type { Course } from '$lib/api/data';

const courses: Course[] = []
const coursesStore = writable(courses);

// const updateCourse = (course: Course) => update(courses => {
//   // update here.
//   return [...courses, course];
// })

// const reset = () => set(COURSES);

export default coursesStore;

