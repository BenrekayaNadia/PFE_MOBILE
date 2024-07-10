import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

const ChangePasswordScreen: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New password and confirm password do not match.');
      return;
    }

    
    Alert.alert('Success', 'Password changed successfully.');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Change Password</Title>
      <TextInput
        label="Current Password"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
        theme={{ roundness: 10 }}
      />
      <TextInput
        label="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
        theme={{ roundness: 10 }}
      />
      <TextInput
        label="Confirm New Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
        theme={{ roundness: 10 }}
      />
      <Button mode="contained" onPress={handleChangePassword} style={styles.button} labelStyle={styles.buttonText}>
        Change Password
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
    paddingVertical: 6,  
    paddingHorizontal: 20, 
    backgroundColor: '#f194ff',
    alignSelf: 'center', 
  },
  buttonText: {
    fontSize: 19, 
    color: '#fff',
  },
});

export default ChangePasswordScreen;
