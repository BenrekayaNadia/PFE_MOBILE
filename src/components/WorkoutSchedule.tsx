import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
  title: string;
  subtitle: string;
}

const Workoutschedule: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.subtitleContainer}>
     <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderBottomWidth: 2,
  borderBottomColor: '#666',
  paddingBottom: 10,
  marginBottom: 10,
},
titleContainer: {
  marginBottom: 10,
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
},
subtitleContainer: {
  borderWidth: 2,
  borderColor: '#666',
  padding: 10,
  borderRadius: 10,
},
subtitle: {
  fontSize: 16,
  color: '#666',
},
});

export default Workoutschedule;
