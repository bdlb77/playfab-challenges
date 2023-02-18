import { supabase } from "$lib/db/db";
import type { Lesson, Module } from "$lib/db/types";

export const updateModuleCompleted = async (moduleId: number): Promise<boolean> => {
const { data, error } = await supabase
    .from("modules")
    .update({ completed: true })
    .match({ id: moduleId })
    .select()
    .returns<Module>()
    .single();

  if (error) throw new Error(`Err from Supabase: ${error}`);
  if (!data) return false;

  return true;
}


export const getModule = async (id: number): Promise<Module> => {

  const { data, error } = await supabase
    .from("modules")
    .select(`*,
      lessons (*)
    `)
    .match({ id  })
    .returns<Module>()
    .maybeSingle();

  if (error) throw new Error(`Err from Supabase: ${error}`);
  if (!data) throw new Error(`Unable to Find Module id: ${id}`);

  return data;
}

export const checkAllLessonsCompleted = async (moduleId: number): Promise<boolean> => {
  const { data, error } = await supabase
    .from("modules")
    .select(`
      title,
      id,
      lessons (
        completed
      )`)
    .match({ id: moduleId })
    .returns<Module & { lessons: Lesson[] }>()
    .single();


  if (error) throw new Error(`Err from Supabase: ${error}`);

  const lessons: { completed: boolean }[] = data.lessons as { completed: boolean }[]

  const courseCompleted = lessons.every(lesson => lesson.completed === true);
  return courseCompleted
}
