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
        }
        Insert: {
          first_name?: string | null
          id: string
          last_name?: string | null
          nickname?: string | null
        }
        Update: {
          first_name?: string | null
          id?: string
          last_name?: string | null
          nickname?: string | null
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
          admitadID: string | null
          cons: string[] | null
          cpa: number | null
          cpaPL: number | null
          cpaUser: number | null
          cpaUserPL: number | null
          created_at: string
          description: string | null
          id: string
          img: string | null
          programID: string | null
          programName: string | null
          pros: string[] | null
          url: string | null
        }
        Insert: {
          admitadID?: string | null
          cons?: string[] | null
          cpa?: number | null
          cpaPL?: number | null
          cpaUser?: number | null
          cpaUserPL?: number | null
          created_at?: string
          description?: string | null
          id?: string
          img?: string | null
          programID?: string | null
          programName?: string | null
          pros?: string[] | null
          url?: string | null
        }
        Update: {
          admitadID?: string | null
          cons?: string[] | null
          cpa?: number | null
          cpaPL?: number | null
          cpaUser?: number | null
          cpaUserPL?: number | null
          created_at?: string
          description?: string | null
          id?: string
          img?: string | null
          programID?: string | null
          programName?: string | null
          pros?: string[] | null
          url?: string | null
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

// It's convenient to have shorthands for your most-used types.

export type Lead = Database["public"]["Tables"]["leads"]["Row"]





