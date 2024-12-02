import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TeamRoster() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#006400" />

      {/* Back Button using Link */}
      <Link href="../" style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="#006400" />
      </Link>

      <Text style={styles.title}>Team Details</Text>

      <View style={styles.tabContainer}>
        <Pressable style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>Roster</Text>
        </Pressable>
        
        <Link href="./games" asChild>
          <Pressable style={styles.roundedTabButton}>
            <Text style={styles.tabText}>Games & Stats</Text>
          </Pressable>
        </Link>
        
        <Link href="./media" asChild>
          <Pressable style={styles.roundedTabButton}>
            <Text style={styles.tabText}>Media</Text>
          </Pressable>
        </Link>
      </View>

      <Image
        source={{ uri: 'https://gojaspers.com/images/2024/9/17/rosterschedule.JPG?width=1600' }}
        style={styles.teamImage}
      />
      
      <ScrollView style={styles.rosterContainer}>
        {[ 
          { name: 'John Anderson', position: 'Guard', jersey: '#7', image: 'https://gojaspers.com/images/2023/9/21/BF7T0079.jpeg?width=300' },
          { name: 'Emily Carter', position: 'Forward', jersey: '#23', image: 'https://gojaspers.com/images/2023/9/21/BF7T0079.jpeg?width=300' },
          { name: 'Michael Smith', position: 'Center', jersey: '#11', image: 'https://gojaspers.com/images/2023/9/21/BF7T0079.jpeg?width=300' },
          { name: 'Sarah Johnson', position: 'Guard', jersey: '#45', image: 'https://gojaspers.com/images/2023/9/21/BF7T0079.jpeg?width=300' },
        ].map((player, index) => (
          <View key={index} style={styles.playerContainer}>
            <Image source={{ uri: player.image }} style={styles.playerImage} />
            <View style={styles.playerDetails}>
              <Text style={styles.playerName}>{player.name}</Text>
              <Text style={styles.playerInfo}>Position: {player.position}</Text>
              <Text style={styles.playerInfo}>Jersey: {player.jersey}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006400',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 50,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  tab: {
    paddingVertical: 15,
    paddingHorizontal: 22,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
  },
  activeTab: {
    backgroundColor: '#cdf2ce',
  },
  roundedTabButton: {
    paddingVertical: 15,
    paddingHorizontal: 22,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
  },
  tabText: {
    color: '#006400',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  teamImage: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  rosterContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  playerDetails: {
    flex: 1,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  playerInfo: {
    fontSize: 14,
    color: 'gray',
  },
});
