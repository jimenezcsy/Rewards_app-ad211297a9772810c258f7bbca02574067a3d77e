import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen({ navigation }) {
  const [email, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../IMAGES/background_image.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
      <StatusBar style="dark" translucent={false} backgroundColor="black" />
        <Text style={styles.title}>Log In</Text>
        
        {/* Input Area */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={email}
            onChangeText={setUserName}
            autoCapitalize="none"
            placeholderTextColor="gray"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="gray"
          />
        </View>

        <TouchableOpacity onPress={() => {/* Handle forgot password */}}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        
        {/* Center the login button */}
        <View style={styles.centerButtonContainer}>
          <Link href = "./(tabs)" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
          </Link>
        </View>

        {/* Social Login Options */}
        <View style={styles.socialLoginContainer}>
          <Text style={styles.socialLoginText}>OR LOG IN WITH</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton} onPress={() => {/* Handle Google login */}}>
              <Ionicons name="logo-google" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => {/* Handle Apple login */}}>
              <Ionicons name="logo-apple" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.loginContainer}>
         <Text style={styles.loginText}>Don't have an account?   </Text>

         <Link href="./signup_screen" asChild>
          <Pressable style={styles.loginLink}>
            <Text style={styles.loginLink}> Sign Up</Text>
          </Pressable>
         </Link>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    color: "white",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    marginTop: -210,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 100,
  },
  inputContainer: {
    gap: 15,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
    color: 'black',
  },
  forgotPassword: {
    color: '#035e32',
    textAlign: 'right',
    marginBottom: 20,
    marginTop: 20,
  },
  centerButtonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#035e32',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  socialLoginText: {
    color: '#666',
    marginBottom: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    gap: 20,
  },
  socialButton: {
    backgroundColor: '#e0e0e0',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  loginText: {
    color: '#666',
    textAlign: "right",
  },
  loginLink: {
    color: '#035e32',
    fontWeight: 'bold',
  }
});
