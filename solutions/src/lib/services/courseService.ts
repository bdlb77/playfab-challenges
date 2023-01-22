import { supabase } from "$lib/db/db";

export const updateCourseCompleted = async (courseId: number) => {
    const { data, error } = await supabase
      .from("courses")
      .update({completed: true})
      .match({id: courseId})
      .select()
      .single();

    if (error) throw new Error(`Err from Supabase: ${error}`);

    return data;
  }


  export const getCourse = async (id: string) => {

    const { data, error } = await supabase
    .from("courses")
    .select()
    .match({id: id})
    .maybeSingle();

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
    .single();

    if (error) throw new Error(`Err from Supabase: ${error}`);

    const modules: { completed: boolean }[] = data.modules as { completed: boolean }[]

    const courseCompleted = modules.every(module => module.completed === true);
    return courseCompleted

}
