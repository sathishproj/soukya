export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  body: string;
  created_at?: string;
  updated_at?: string;
}
