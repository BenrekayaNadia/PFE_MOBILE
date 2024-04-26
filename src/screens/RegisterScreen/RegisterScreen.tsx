import React, { useState } from 'react';
  import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Alert } from 'react-native';

  import { useNavigation } from '@react-navigation/native';
  import TextInputField from '@/components/TextInputField';

  import { ApplicationScreenProps } from '@/types/navigation';


  function RegisterScreen({ navigation }: ApplicationScreenProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('coach');

    

    const handlePress = async () => {
      if (!firstName || !lastName || !email || !password || !role) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Alert.alert('Error', 'Please enter a valid email address');
        return;
      }

      // Password validation
      if (password.length < 6) {
        Alert.alert('Error', 'Password must be at least 6 characters long');
        return;
      }

    
       
        console.log('Registration successful!');
        navigation.navigate('PricingScreen');
     
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title1}>Hey there,</Text>
        <Text style={styles.title}>Create an Account</Text>
        <TextInputField
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInputField
          label="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInputField
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={styles.label}>Role:</Text>
        <TouchableOpacity
          style={[styles.roleButton, role === 'coach' && styles.selectedRoleButton]}
          onPress={() => setRole('coach')}
        >
          <Text>Coach</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, role === 'trainee' && styles.selectedRoleButton]}
          onPress={() => setRole('trainee')}
        >
          <Text>Trainee</Text>
        </TouchableOpacity>
        <Button color="#f194ff" title='Register' onPress={handlePress} />
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.alreadyAccount}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      marginTop: 10,
    },
    title1: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 10,
    },
    alreadyAccount: {
      textAlign: 'center',
      marginTop: 20,
      color: 'black',
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    roleButton: {
      backgroundColor: '#ccc',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    selectedRoleButton: {
      backgroundColor: '#f194ff',
    },
  });

  export default RegisterScreen;


