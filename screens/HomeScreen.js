import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'transparent', 'rgba(0,0,0,0.5)']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <BlurView intensity={80} style={styles.blurContainer}>
            <View style={styles.container}>
              <Image
                source={require('../assets/ProfileImage.jpg')}
                style={styles.profileImage}
              />
              <Text style={styles.title}>Hi, I'm Gaurav!</Text>
              <Text style={styles.subtitle}>MCA Graduate & Software Developer</Text>
              <View style={styles.card}>
                <Text style={styles.cardText}>
                  Passionate about creating innovative solutions and building amazing user experiences.
                </Text>
              </View>
              {/* about section in home screen */}
              <View style={styles.aboutSection}>
                <Text style={styles.sectionTitle}>About Me</Text>
                <Text style={styles.aboutText}>
                  I'm a dedicated software developer with a strong foundation in computer science.
                  My journey in tech began during my Bachelor's in Science and has flourished through
                  my Master's in Computer Applications. I specialize in full-stack development,
                  with a particular interest in building responsive and user-friendly web and mobile applications.
                </Text>
              </View>

              <View style={styles.educationSection}>
                <Text style={styles.sectionTitle}>Education</Text>
                <View style={styles.educationItem}>
                  <FontAwesome name="graduation-cap" size={24} color="white" style={styles.icon} />
                  <View>
                    <Text style={styles.degree}>Master of Computer Applications (MCA)</Text>
                    <Text style={styles.school}>Ajay Kumar Garg Engineering College</Text>
                    <Text style={styles.year}>2022 - 2024</Text>
                  </View>
                </View>
                <View style={styles.educationItem}>
                  <FontAwesome name="university" size={24} color="white" style={styles.icon} />
                  <View>
                    <Text style={styles.degree}>Bachelor of Science (B.Sc)</Text>
                    <Text style={styles.school}>Chaudhary Charan Singh University</Text>
                    <Text style={styles.year}>2019 - 2022</Text>
                  </View>
                </View>
              </View>

              <View style={styles.skillsSection}>
                <Text style={styles.sectionTitle}>Skills</Text>
                <View style={styles.skillsContainer}>
                  {['React', 'React Native', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'HTML', 'CSS', 'Git'].map((skill, index) => (
                    <View key={index} style={styles.skillItem}>
                      <Text style={styles.skillText}>{skill}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </BlurView>
        </ScrollView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  blurContainer: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  cardText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  aboutSection: {
    marginTop: 30,
    width: '100%',
  },
  aboutText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  educationSection: {
    marginTop: 30,
    width: '100%',
  },
  educationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  icon: {
    marginRight: 15,
  },
  degree: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  school: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  year: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  skillsSection: {
    marginTop: 30,
    width: '100%',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skillItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 10,
    margin: 5,
  },
  skillText: {
    color: 'white',
    fontSize: 14,
  },
});