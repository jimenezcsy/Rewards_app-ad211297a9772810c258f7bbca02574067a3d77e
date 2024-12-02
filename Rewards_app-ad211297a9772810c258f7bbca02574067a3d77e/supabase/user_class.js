import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client once
const supabase = createClient(
  "https://rohrryvdrrpyhxhqeiyh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvaHJyeXZkcnJweWh4aHFlaXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4OTkxMzcsImV4cCI6MjA0MzQ3NTEzN30.d-sMTzr333OwxB4CvW2TfgoicH8HRx1RjSE4y39qU9M"
);

class User {
  // Private fields and methods
  #supabase;
  
  constructor() {
    this.#supabase = supabase;
  }

  // Public method to get all users
  async getAllUsers() {
    return await this.#fetchUsers();
  }

  // Public method for signing up a new user
  async signUp(username, password) {
    const { data, error } = await this.#supabase.from("users").insert([{ username, password }]);
    if (error) throw new Error(error.message);
    return data;
  }

  // Public method for user login
  async login(username, password) {
    const { data, error } = await this.#supabase
      .from("users")
      .select("username, password")
      .eq("username", username)
      .eq("password", password);
    
    if (error) throw new Error(error.message);
    if (data.length === 0) throw new Error("Invalid credentials");
    return data[0];
  }

  // Public method to print user info by username
  async printUserInfo(username) {
    const user = await this.#fetchUserByUsername(username);
    if (!user) {
      console.log(`User with username ${username} not found`);
    } else {
      console.log(`Username: ${user.username}, Password: ${user.password}`);
    }
  }

  // Private method to fetch all users (only used internally by the class)
  async #fetchUsers() {
    const { data, error } = await this.#supabase.from("users").select("username, password");
    if (error) throw new Error(error.message);
    return data;
  }

  // Private method to fetch a user by username (used internally by printUserInfo)
  async #fetchUserByUsername(username) {
    const { data, error } = await this.#supabase
      .from("users")
      .select("username, password")
      .eq("username", username);

    if (error) throw new Error(error.message);
    return data.length > 0 ? data[0] : null;
  }

  async getSportInfo(sportName) {
    const { data, error } = await this.#supabase
      .from("sports")
      .select("web_link")
      .eq("name", sportName)
      .single(); // Ensures only one record is returned
  
    if (error) throw new Error(error.message);
    return data ? data.web_link : null;
  }
}

export default new User();
