import { createClient } from "@supabase/supabase-js";

const supaUrl = "https://vqdgzsdkxbytcylllkvi.supabase.co";
const supaKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxZGd6c2RreGJ5dGN5bGxsa3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNjI1NDAsImV4cCI6MTk4OTgzODU0MH0.0tKj-_Nh10-wJrGZrOCGnte20b2qCRNODEklkdmhs20";

export const supabase = createClient(supaUrl, supaKey);
