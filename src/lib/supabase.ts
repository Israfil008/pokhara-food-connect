import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qakiedxiolwtsvochkyi.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFha2llZHhpb2x3dHN2b2Noa3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0NzkyMzksImV4cCI6MjA4OTA1NTIzOX0.2JPJuMRPCnPsfA5-PvbAc7ufWdzKQRBvoBOZYmE2gq0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
