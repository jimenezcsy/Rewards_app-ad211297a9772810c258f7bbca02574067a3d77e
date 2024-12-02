import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('../IMAGES/main bck.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <StatusBar style="dark" translucent={false} backgroundColor="dark" />
        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>

          <Text style={styles.descriptionText}>
            Track your favorite team's games and earn rewards
          </Text>
          <Link href="./login_screen" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
          </Link>

          <Link href="./signup_screen" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
          </Link>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent overlay removed
    justifyContent: 'center', // Center content vertically
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 260, // Adjust as needed to control vertical positioning
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#035e32',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#035e32', // Same green color for both buttons
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 15,
    width: '60%', // Ensuring buttons have equal width
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
