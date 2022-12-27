import type { IModule } from "$lib/types";
import { ModuleModel } from "$db/models/module";

export const updateModuleCompleted = async (module: IModule): Promise<void> => {

  try{
    await module.updateOne({completed: true});
  } catch(err) {
    throw new Error(`Issue with updating Module on Completion: ${err}`);
  }
}


export const getModule = async (id: string): Promise<IModule> => {

  const module: IModule | null = await ModuleModel.findOne({_id: id});
  if (!module) throw new Error("Module not Found");

  return module;
}

export const checkAllLessonsCompleted = async (model: IModule): Promise<boolean> => {
  const populatedModule = await model.populate("lessons");
  const completions = populatedModule.lessons?.map( lesson => lesson.completed);
  const allTrue: boolean = completions?.reduce((acc, element) => acc && element, true) as boolean;
  return allTrue;
}
