import { ApplicationScreenProps } from '@/types/navigation';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';



function ForgotPasswordScreen({ navigation}: ApplicationScreenProps) { 
  

  return (
    <View >
        <Text>Forgot Password Screen</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
   
  }
});

export default ForgotPasswordScreen;


