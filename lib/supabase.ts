import { createClient } from '@supabase/supabase-js'

const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').replace(/['"]/g, '')
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').replace(/['"]/g, '')

const isUrlValid = (url: string) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

if (!isUrlValid(supabaseUrl) || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing or invalid. URL:', supabaseUrl)
}

export const supabase = isUrlValid(supabaseUrl) && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any

