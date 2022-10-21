import sanityClient from "@sanity/client";
type Lesson = {
  title: string;
  description: string;
  completed: boolean;
}
type CourseModule = {
  title: string;
  completed: boolean;
  lessons: Lesson[];
}
type Course = {
  title: string;
  semester: string;
  completed: boolean;
  modules: CourseModule[]
}

const client = sanityClient({
  projectId: "078kcyiw",
  dataset: "playfab-challenges",
  apiVersion: new Date().toLocaleDateString("en-ZA"),
  useCdn: false
});


export const getCourses: Promise<Course[]> = async () => {
  const courses: Course[] = await client.fetch(`*[_type == "course"]`);

  return courses;

}

