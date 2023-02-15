import type { Database } from "./database.types";

export type Course = Database['public']['Tables']['courses']['Row'];
export type Module = Database['public']['Tables']['modules']['Row'] & { course: Course };
export type Lesson = Database['public']['Tables']['lessons']['Row'] & { module: Module & { course: Course }};
