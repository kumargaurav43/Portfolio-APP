import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { id: '1', name: 'ReactJS', icon: <Ionicons name="logo-react" size={24} color="#61DAFB" /> },
      { id: '2', name: 'HTML5', icon: <Ionicons name="logo-html5" size={24} color="#E34F26" /> },
      { id: '3', name: 'CSS3', icon: <Ionicons name="logo-css3" size={24} color="#1572B6" /> },
      { id: '4', name: 'JavaScript', icon: <Ionicons name="logo-javascript" size={24} color="#F7DF1E" /> },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { id: '5', name: 'NodeJS', icon: <FontAwesome5 name="node-js" size={24} color="#339933" /> },
      { id: '6', name: 'Spring Boot', icon: <Ionicons name="ios-leaf" size={24} color="#6DB33F" /> },
      { id: '7', name: 'MongoDB', icon: <Ionicons name="logo-nodejs" size={24} color="#47A248" /> },
      { id: '8', name: 'MySQL', icon: <MaterialIcons name="storage" size={24} color="#4479A1" /> },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { id: '9', name: 'Git', icon: <Ionicons name="git-branch" size={24} color="#F05032" /> },
      { id: '10', name: 'VS Code', icon: <MaterialIcons name="code" size={24} color="#007ACC" /> },
      { id: '11', name: 'Jira', icon: <MaterialIcons name="check-circle" size={24} color="#0052CC" /> },
      { id: '12', name: 'Bitbucket', icon: <FontAwesome5 name="bitbucket" size={24} color="#0052CC" /> },
    ],
  },
];

export default function SkillScreen() {
  const renderSkillItem = ({ item }) => (
    <View style={styles.skillItem}>
      <View style={styles.iconContainer}>{item.icon}</View>
      <Text style={styles.skillText}>{item.name}</Text>
    </View>
  );

  const renderCategory = ({ item }) => (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{item.category}</Text>
      <FlatList
        data={item.skills}
        keyExtractor={(skill) => skill.id}
        renderItem={renderSkillItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.skillsContainer}
      />
    </View>
  );

  return (
    <ImageBackground
      source={require('../assets/about-background.jpg')}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.5)']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.title}>My Skills</Text>
            <FlatList
              data={skillsData}
              keyExtractor={(item) => item.category}
              renderItem={renderCategory}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  categoryContainer: {
    marginBottom: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 15,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  skillsContainer: {
    paddingVertical: 10,
  },
  skillItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 10,
    width: 100,
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 10,
    marginBottom: 5,
  },
  skillText: {
    marginTop: 5,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});