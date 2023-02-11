import { supabase } from "$lib/db/db";
import type { Lesson } from "$lib/db/types";

export const updateLessonCompleted = async (lessonId: string): Promise<Lesson> => {
  const { data, error } = await supabase
  .from("lessons")
  .update({completed: true})
  .match({ id: lessonId })
  .select()
  .single()

  if (error) throw new Error(`Unable to Update Lesson: ${lessonId}`);

  if (!data) throw new Error(`LessonId: ${lessonId} Not Found`);

  return data;
}

export const getLessons = async (moduleId: number): Promise<Lesson[]> => {
  const { data, error } = await supabase.
    from("lessons")
    .select("*")
    .match({module_id: moduleId})

  if (error) throw new Error(`Unable to Get Lessons from moduleID: ${moduleId}`);

  return data;
}
