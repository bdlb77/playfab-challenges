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
  dataset: "production",
  apiVersion: '2022-10-26',
  useCdn: false
});


export const getCourses = async (): Promise<Course[]> => {
  const courses: Course[] = await client.fetch(`
  * [_type == "course"] {
      title,
      "modules": * [_type == "module" && course._ref == ^._id] {
        title,
        "lessons": * [_type == "lesson" && module._ref == ^.id ] {
          title
        }
      }
  }`);

  return courses;
}

export const getCourse = async (id: string): Promise<Course> => {
  const course: Course = await client.fetch(`*[_id == "${id}"]`);
  return course;
}
