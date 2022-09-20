/** @type {import('./$types').PageLoad} */
import { courses } from "$lib/api/data";
type Params = {
  slug: string;
}
export function load({ params }: { params: Params }) {
  const  { slug } = params;

  const course = courses.find(course => course.title === slug);

  return { course };
}
