import type { ICourse } from "$lib/types";
import { CourseModel } from "$db/models/course";

export const updateCourseCompleted = async (module: ICourse): Promise<void> => {

  try{
    await module.updateOne({completed: true});
  } catch(err) {
    throw new Error(`Issue with updating Module on Completion: ${err}`);
  }
}


export const getCourse = async (id: string): Promise<ICourse> => {

  const module: ICourse | null = await CourseModel.findOne({_id: id});
  if (!module) throw new Error("Module not Found");

  return module;
}

export const checkAllModulesCompleted = async (model: ICourse): Promise<boolean> => {
  const populatedModule = await model.populate("modules");
  const completions = populatedModule.modules?.map( lesson => lesson.completed);
  const allTrue: boolean = completions?.reduce((acc, element) => acc && element, true) as boolean;
  return allTrue;
}
