import { createClient } from "@supabase/supabase-js";
const supabaseUrl =  "https://mgmfibzgphyapkhrbjfm.supabase.co";
const supabaseAnonKey =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nbWZpYnpncGh5YXBraHJiamZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwODM1MTcsImV4cCI6MjA0ODY1OTUxN30.Lz-BplosLDKKkumPa9x7dHfM3aHAffwsAq-mGcC43KM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
