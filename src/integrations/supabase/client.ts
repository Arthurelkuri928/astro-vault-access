// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vnzrxxwbfwtlfqraxtkw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuenJ4eHdiZnd0bGZxcmF4dGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNDc1NDEsImV4cCI6MjA2MjcyMzU0MX0.oNCff8rmzVsS1Fh-Dc_Px9jc5HB1F098hWZJycnw60U";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);