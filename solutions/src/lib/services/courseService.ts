import { supabase } from "$lib/db/db";
import type { Course, Module } from "$lib/db/types";

export const updateCourseCompleted = async (courseId: number): Promise<Course> => {
    const { data, error } = await supabase
      .from("courses")
      .update({completed: true})
      .match({id: courseId})
      .select()
      .single();

    if (error) throw new Error(`Err from Supabase: ${error}`);

    return data;
  }


  export const getCourse = async (id: string): Promise<Course> => {

    const { data, error } = await supabase
    .from("courses")
    .select(`*,
      modules (id, title, description, completed)
    `)
    .match({ id })
    .maybeSingle();

    if (error) throw new Error(`Err from Supabase: ${JSON.stringify(error)}`);
    if (!data) throw new Error(`Unable to find Course with Id: ${id}`);
    return data;

}

export const getCourses = async(): Promise<Course & {modules: Module[]}[]> => {
  const { data, error } = await supabase.from("courses").select("*, modules(*)")
    .returns<Course & {modules: Module[]}[]>();
  if (error) throw new Error(`Err from Supabase: ${error}`);
  return data;
}

export const checkAllModulesCompleted = async (courseId: number): Promise<boolean> => {
  const { data, error } = await supabase
    .from("courses")
    .select(`
      title,
      id,
      modules (
        completed
      )`)
    .match({id: courseId})
    .returns<Course & {modules?: Module[]}>()
    .single();


    if (error) throw new Error(`Err from Supabase: ${error}`);

    const modules: { completed: boolean }[] = data.modules as { completed: boolean }[]

    const courseCompleted = modules.every(module => module.completed === true);
    return courseCompleted

}
