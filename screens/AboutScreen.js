import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function AboutScreen() {
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
            <Text style={styles.title}>About Me</Text>
            
            <View style={styles.section}>
              <Ionicons name="person-outline" size={24} color="white" style={styles.icon} />
              <Text style={styles.sectionTitle}>Introduction</Text>
              <Text style={styles.text}>
                I'm Gaurav, a passionate software developer with a keen interest in creating innovative solutions. 
                With a background in Computer Applications, I strive to blend creativity with technical expertise 
                to develop user-friendly and efficient applications.
              </Text>
            </View>

            <View style={styles.section}>
              <Ionicons name="home-outline" size={24} color="white" style={styles.icon} />
              <Text style={styles.sectionTitle}>Hometown</Text>
              <Text style={styles.text}>
                I hail from the vibrant city of Meerut, Uttar Pradesh, known for its rich culture and technological advancements. 
                Growing up here has instilled in me a deep appreciation for both tradition and innovation, 
                which reflects in my approach to software development.
              </Text>
            </View>

            <View style={styles.section}>
              <Ionicons name="code-slash-outline" size={24} color="white" style={styles.icon} />
              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={styles.skillsContainer}>
                {['Java', 'ReactJS', 'Spring Boot', 'JavaScript', 'HTML/CSS', 'MySQL', 'MongoDB', 'NodeJS', 'GIT', 'GitHub'].map((skill, index) => (
                  <View key={index} style={styles.skillBadge}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Ionicons name="heart-outline" size={24} color="white" style={styles.icon} />
              <Text style={styles.sectionTitle}>Interests</Text>
              <Text style={styles.text}>
                Beyond coding, I'm passionate about photography, playing badminton, waching sci-fi movies. 
                I believe in continuous learning and often participate in coding challenges and hackathons 
                to keep my skills sharp and stay updated with the latest technologies.
              </Text>
            </View>

            <View style={styles.section}>
              <Ionicons name="school-outline" size={24} color="white" style={styles.icon} />
              <Text style={styles.sectionTitle}>Education</Text>
              <Text style={styles.text}>
                I hold a Master's degree in Computer Applications (MCA) from [Your University], 
                where I honed my skills in software development and gained a deeper understanding of 
                computer science principles. This educational background, combined with my practical experience, 
                allows me to approach problems with a well-rounded perspective.
              </Text>
            </View>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 24,
  },
  icon: {
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  skillBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
  },
  skillText: {
    color: 'white',
    fontSize: 14,
  },
});