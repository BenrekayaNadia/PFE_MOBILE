import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import RegisterScreen from '../RegisterScreen/RegisterScreen';
import { ApplicationScreenProps } from '@/types/navigation';



function LoginScreen({ navigation}: ApplicationScreenProps) { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
   const handleLogin =  () => {
    
  if (!email || !password) {
    Alert.alert('Please enter both email and password');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Alert.alert('Please enter a valid email address');
    return;
  }

 
  if (password.length < 6) {
    Alert.alert('Password must be at least 6 characters long');
    return;
  }
  
   console.log("call api backend");
   navigation.navigate("DashboardScreen", { data: { email, password } });
  }; 
  
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Hey there,</Text>
      <Text style={styles.title}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      {/*  <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}> 
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.buttonlogin}>
      <Button color="#f194ff" title='Login' onPress={handleLogin}/>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.alreadyAccount}>Don't have an account yet? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 90,
  },
  title1: {
    fontSize: 16,
    textAlign:'center',
    marginTop:10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  alreadyAccount: {
    textAlign: 'center',
    color: 'black',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonlogin: {
    padding:20,
  },
  forgotPasswordText: {
    color: 'blue',
    fontSize: 16,
    marginTop: 10,
  },
});

export default LoginScreen;
