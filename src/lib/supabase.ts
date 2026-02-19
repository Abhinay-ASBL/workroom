import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  category: string | null;
  type: string;
  tags: string[];
  image_url: string | null;
  author_name: string | null;
  author_role: string | null;
  published_at: string;
  created_at: string;
};

export type ProjectSection = {
  id: string;
  project_id: string;
  section_key: string;
  heading: string | null;
  content: string | null;
  sort_order: number;
};

export type ProjectStat = {
  id: string;
  project_id: string;
  value: string;
  label: string;
  sort_order: number;
};

export type Category = {
  id: string;
  name: string;
  sort_order: number;
};
