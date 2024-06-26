export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          action: string | null
          action_id: string | null
          admitad_id: string | null
          click_time: number | null
          conversion_time: number | null
          country_code: string | null
          created_at: string
          currency: string | null
          id: number
          info: string | null
          offer_id: string | null
          offer_name: string | null
          order_id: number | null
          order_sum: number | null
          payment_status: string | null
          payment_sum: number | null
          reward_ready: number | null
          subid: string | null
          subid1: string | null
          subid2: string | null
          subid3: string | null
          subid4: string | null
          time: number | null
          type: string | null
          user_agent: string | null
          user_referer: string | null
          website_id: number | null
          website_name: string | null
        }
        Insert: {
          action?: string | null
          action_id?: string | null
          admitad_id?: string | null
          click_time?: number | null
          conversion_time?: number | null
          country_code?: string | null
          created_at?: string
          currency?: string | null
          id?: number
          info?: string | null
          offer_id?: string | null
          offer_name?: string | null
          order_id?: number | null
          order_sum?: number | null
          payment_status?: string | null
          payment_sum?: number | null
          reward_ready?: number | null
          subid?: string | null
          subid1?: string | null
          subid2?: string | null
          subid3?: string | null
          subid4?: string | null
          time?: number | null
          type?: string | null
          user_agent?: string | null
          user_referer?: string | null
          website_id?: number | null
          website_name?: string | null
        }
        Update: {
          action?: string | null
          action_id?: string | null
          admitad_id?: string | null
          click_time?: number | null
          conversion_time?: number | null
          country_code?: string | null
          created_at?: string
          currency?: string | null
          id?: number
          info?: string | null
          offer_id?: string | null
          offer_name?: string | null
          order_id?: number | null
          order_sum?: number | null
          payment_status?: string | null
          payment_sum?: number | null
          reward_ready?: number | null
          subid?: string | null
          subid1?: string | null
          subid2?: string | null
          subid3?: string | null
          subid4?: string | null
          time?: number | null
          type?: string | null
          user_agent?: string | null
          user_referer?: string | null
          website_id?: number | null
          website_name?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          first_name: string | null
          id: string
          last_name: string | null
          nickname: string | null
          referred_by: string | null
          withdrawn: number
        }
        Insert: {
          first_name?: string | null
          id: string
          last_name?: string | null
          nickname?: string | null
          referred_by?: string | null
          withdrawn?: number
        }
        Update: {
          first_name?: string | null
          id?: string
          last_name?: string | null
          nickname?: string | null
          referred_by?: string | null
          withdrawn?: number
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      programms: {
        Row: {
          active: boolean | null
          admitadID: string | null
          cons: string[] | null
          cpa: number | null
          cpaDefault: number | null
          cpaPL: number | null
          cpaUser: number | null
          cpaUserDefault: number | null
          cpaUserPL: number | null
          cpaUserWEU: number | null
          cpaWEU: number | null
          created_at: string
          description: string | null
          id: string
          img: string | null
          position: number | null
          programID: string | null
          programName: string | null
          pros: string[] | null
          status: string
          time: number | null
          url: string | null
          platform: number[] | null
        }
        Insert: {
          active?: boolean | null
          admitadID?: string | null
          cons?: string[] | null
          cpa?: number | null
          cpaDefault?: number | null
          cpaPL?: number | null
          cpaUser?: number | null
          cpaUserDefault?: number | null
          cpaUserPL?: number | null
          cpaUserWEU?: number | null
          cpaWEU?: number | null
          created_at?: string
          description?: string | null
          id?: string
          img?: string | null
          position?: number | null
          programID?: string | null
          programName?: string | null
          pros?: string[] | null
          status?: string
          time?: number | null
          url?: string | null
          platform: number[] | null
        }
        Update: {
          active?: boolean | null
          admitadID?: string | null
          cons?: string[] | null
          cpa?: number | null
          cpaDefault?: number | null
          cpaPL?: number | null
          cpaUser?: number | null
          cpaUserDefault?: number | null
          cpaUserPL?: number | null
          cpaUserWEU?: number | null
          cpaWEU?: number | null
          created_at?: string
          description?: string | null
          id?: string
          img?: string | null
          position?: number | null
          programID?: string | null
          programName?: string | null
          pros?: string[] | null
          status?: string
          time?: number | null
          url?: string | null
          platform: number[] | null
        }
        Relationships: []
      }
      tickets: {
        Row: {
          created_at: string
          id: string
          msg: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          msg?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          msg?: string | null
        }
        Relationships: []
      }
      userLeads: {
        Row: {
          created_at: string
          currency: string | null
          description: string | null
          id: string
          leadId: number | null
          offer_name: string | null
          programmId: string | null
          status: string | null
          userId: string | null
          userRef1: string | null
          userRef2: string | null
          value: number | null
        }
        Insert: {
          created_at?: string
          currency?: string | null
          description?: string | null
          id?: string
          leadId?: number | null
          offer_name?: string | null
          programmId?: string | null
          status?: string | null
          userId?: string | null
          userRef1?: string | null
          userRef2?: string | null
          value?: number | null
        }
        Update: {
          created_at?: string
          currency?: string | null
          description?: string | null
          id?: string
          leadId?: number | null
          offer_name?: string | null
          programmId?: string | null
          status?: string | null
          userId?: string | null
          userRef1?: string | null
          userRef2?: string | null
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "userLeads_leadId_fkey"
            columns: ["leadId"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "userLeads_programmId_fkey"
            columns: ["programmId"]
            isOneToOne: false
            referencedRelation: "programms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "userLeads_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      usersProgramms: {
        Row: {
          created_at: string
          id: number
          programmId: string | null
          userId: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          programmId?: string | null
          userId?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          programmId?: string | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "usersProgramms_programmId_fkey"
            columns: ["programmId"]
            isOneToOne: false
            referencedRelation: "programms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "usersProgramms_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      leads_summary: {
        Row: {
          date: string | null
          lead_count: number | null
          total_value: number | null
          userId: string | null
        }
        Relationships: [
          {
            foreignKeyName: "userLeads_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      leadssumstatus_summary: {
        Row: {
          lead_count: number | null
          status: string | null
          total_value: number | null
          userId: string | null
        }
        Relationships: [
          {
            foreignKeyName: "userLeads_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

// It's convenient to have shorthands for your most-used types.

export type Lead = Database["public"]["Tables"]["leads"]["Row"]








