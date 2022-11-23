import { writable } from 'svelte/store';
import type { Course } from '$lib/api/data';

const courses: Course[] = []
const coursesStore = writable(courses);

export default coursesStore;

