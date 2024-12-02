import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';

export default function TeamHighlights() {
  return (
    <View style={styles.container}>

      {/* Highlights Section */}
      <Text style={styles.highlightsTitle}>Latest Highlights</Text>

      <ScrollView style={styles.highlightsContainer}>
        <View style={styles.highlightCard}>
          <Image
            source={{ uri: 'https://example.com/latest-game.jpg' }}
            style={styles.highlightImage}
          />
          <Text style={styles.highlightText}>
            The Eagles soared to victory in last night’s game, with a final score of 89-76, thrilling the crowd with their incredible teamwork and strategy.
          </Text>
        </View>

        <View style={styles.highlightCard}>
          <Image
            source={{ uri: 'https://example.com/eagles-hawks.jpg' }}
            style={styles.highlightImage}
          />
          <Text style={styles.highlightInfo}>Eagles vs. Hawks</Text>
          <Text style={styles.highlightScore}>Date: 10/25/2023 - Score: 89-76</Text>
        </View>

        <View style={styles.highlightCard}>
          <Image
            source={{ uri: 'https://example.com/tigers-lions.jpg' }}
            style={styles.highlightImage}
          />
          <Text style={styles.highlightInfo}>Tigers vs. Lions</Text>
          <Text style={styles.highlightScore}>Date: 10/20/2023 - Score: 102-98</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 70,
  },
  highlightsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 15,
  },
  highlightsContainer: {
    paddingHorizontal: 20,
  },
  highlightCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  highlightImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  highlightText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  highlightInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  highlightScore: {
    fontSize: 14,
    color: 'gray',
  },
});
