import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qatgpnfdjatyjxhmricp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhdGdwbmZkamF0eWp4aG1yaWNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0OTk2NjIsImV4cCI6MjAzMzA3NTY2Mn0.6rMw54-EcrC8f7PMBgWjx076klgugZUSqvxpkt1ohG4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
