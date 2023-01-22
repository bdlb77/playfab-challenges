export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          id: number
          // user_id: string
          title: string
          description: string | null
          courseDate: string
          completed: boolean | null
          inserted_at: string
        }
        Insert: {
          id?: number
          // user_id: string
          title?: string
          description: string | null
          courseDate: string
          completed: boolean | null
          inserted_at?: string
        }
        Update: {
          id?: number
          // user_id?: string
          title?: string | null
          description?: string | null
          courseDate?: string
          completed?: boolean
          inserted_at?: string
        }
      },
      modules: {
        Row: {
          id: number
          // user_id: string
          title: string
          description: string | null
          completed: boolean
          inserted_at: string
          course_id: number
        }
        Insert: {
          id?: number
          // user_id: string
          title: string
          description?: string | null
          completed?: boolean | null
          inserted_at?: string
          course_id?: number
        }
        Update: {
          id?: number
          // user_id?: string
          title?: string | null
          description?: string | null
          completed?: boolean | null
          inserted_at?: string
          course_id?: number
        }
      },
      lessons: {
        Row: {
          id: number
          // user_id: string
          title: string
          description: string | null
          completed: boolean
          inserted_at: string
          module_id: number
        }
        Insert: {
          id?: number
          // user_id: string
          title: string
          description?: string | null
          completed: boolean
          inserted_at?: string
          module_id: number
        }
        Update: {
          id?: number
          // user_id?: string
          title?: string | null
          description?: string | null
          completed?: boolean | null
          inserted_at?: string
          module_id?: number
        }
      },

    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
