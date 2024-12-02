import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import User from "../../supabase/user_class";

export default function InitialP() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers(); // Use the method from the User class
  }, []);

  // Fetch data using the User class
  async function fetchUsers() {
    try {
      const data = await User.getAllUsers(); // Fetch users from the User class
      setUsers(data || []);  // Set the data to the state
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>Username: {item.username}, Password: {item.password}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}