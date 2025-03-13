import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase  = createClient('https://lingnznyyoyddxujypgw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxpbmduem55eW95ZGR4dWp5cGd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNDc4MzMsImV4cCI6MjA0OTkyMzgzM30.WoOYVBJOpk3S1CET_N84FXdBs-AGw1x1QOQTkVZpNEg')
