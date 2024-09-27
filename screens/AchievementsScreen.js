import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const achievements = [
  { title: 'Certified Java Developer', description: 'Completed Java certification in 2023' },
  { title: 'Won Hackathon 2022', description: 'Led a team and won the 2022 National Hackathon' },
  // Add more achievements here
];

const AchievementsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {achievements.map((achievement, index) => (
        <View key={index} style={styles.achievementBox}>
          <Text style={styles.achievementTitle}>{achievement.title}</Text>
          <Text style={styles.achievementDescription}>{achievement.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  achievementBox: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  achievementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  achievementDescription: {
    fontSize: 16,
  },
});

export default AchievementsScreen;
