import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client once
const supabase = createClient(
  "https://rohrryvdrrpyhxhqeiyh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvaHJyeXZkcnJweWh4aHFlaXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4OTkxMzcsImV4cCI6MjA0MzQ3NTEzN30.d-sMTzr333OwxB4CvW2TfgoicH8HRx1RjSE4y39qU9M"
);

class Sports {
  #supabase;
  
  constructor() {
    this.#supabase = supabase;
  }

 async getAllSocialMedia(sportName) {
    const { data, error } = await this.#supabase
      .from("sports")
      .select("instagram, facebook, x, website") // Select the specific columns
      .eq("name", sportName)
      .single(); 

    if (error) throw new Error(error.message);
    return data ? [data.instagram, data.facebook, data.x, data.website] : null;
}

}

export default new Sports();
