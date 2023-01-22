import { supabase } from "$lib/db/db";

export const updateModuleCompleted = async (moduleId: string) => {
  const { data, error } = await supabase
    .from("modules")
    .update({ completed: true })
    .match({ id: moduleId })
    .select()
    .single();

  if (error) throw new Error(`Err from Supabase: ${error}`);

  return data;
}


export const getModule = async (id: string) => {

  const { data, error } = await supabase
    .from("modules")
    .select()
    .match({ id: id })
    .maybeSingle();

  if (error) throw new Error(`Err from Supabase: ${error}`);

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
    .single();

  if (error) throw new Error(`Err from Supabase: ${error}`);

  const lessons: { completed: boolean }[] = data.lessons as { completed: boolean }[]

  const courseCompleted = lessons.every(lesson => lesson.completed === true);
  return courseCompleted
}
