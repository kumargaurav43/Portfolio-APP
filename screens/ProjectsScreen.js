import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking, ImageBackground, Animated } from 'react-native';

const projects = [
  { 
    id: '1', 
    title: 'Dermanest - Skin Disease Detection',
    description: 'AI-powered skin disease detection using image recognition.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TensorFlow', 'Python', 'Flask', 'Keras', 'CNN Model'],
    githubUrl: 'https://github.com/kumargaurav43',
    liveUrl: 'https://yourliveurl.com/dermanest'
  },
  { 
    id: '2', 
    title: 'Weather Application',
    description: 'Comprehensive system for managing weather data.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    githubUrl: 'https://github.com/kumargaurav43/Weather-Application',
    liveUrl: 'https://gauravporfolio.netlify.app/previous%20project/weather%20application/'
  },
  { 
    id: '3', 
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects and skills.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/kumargaurav43/PortFolio/tree/main/Portfolio%20Website',
    liveUrl: 'https://gauravporfolio.netlify.app'
  },
  { 
    id: '4', 
    title: 'Calculator',
    description: 'A basic calculator application designed to perform standard arithmetic operations like addition, subtraction, multiplication, and division. Built using HTML, CSS, and JavaScript, this app features a user-friendly interface and responsive design, making it accessible on desktop devices. It is an ideal tool for simple calculations and showcases essential web development skills such as DOM manipulation and event handling.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/kumargaurav43/Calculator',
    liveUrl: 'https://gauravporfolio.netlify.app/previous%20project/calc/'
  },
  { 
    id: '5', 
    title: 'Instagram Clone',
    description: 'This Instagram clone is a web application designed to mimic the core functionalities of the popular social media platform. Built using modern web technologies like HTML, CSS, JavaScript, and React, this project allows users to create accounts, upload photos, view posts, like and comment on posts, and follow other users. The app features a responsive design, ensuring an optimal user experience across various devices.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/kumargaurav43/InstagramClone',
    liveUrl: 'https://gauravporfolio.netlify.app/previous%20project/instagram%20clone/'
  },
];

const ProjectsScreen = () => {
  // Animated value for button press effect
  const animatedValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.95,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const renderProjectItem = ({ item }) => (
    <View style={styles.projectItem}>
      <Text style={styles.projectTitle}>{item.title}</Text>
      <Text style={styles.projectDescription}>{item.description}</Text>
      <View style={styles.technologiesContainer}>
        {item.technologies.map((tech, index) => (
          <View key={index} style={styles.technologyTag}>
            <Text style={styles.technologyText}>{tech}</Text>
          </View>
        ))}
      </View>
      <View style={styles.buttonsContainer}>
        <Animated.View
          style={[styles.githubButton, { transform: [{ scale: animatedValue }] }]}
        >
          <TouchableOpacity
            onPress={() => Linking.openURL(item.githubUrl)}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Text style={styles.githubButtonText}>View on GitHub</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[styles.liveButton, { transform: [{ scale: animatedValue }] }]}
        >
          <TouchableOpacity
            onPress={() => Linking.openURL(item.liveUrl)}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Text style={styles.liveButtonText}>View on Live</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );

  return (
    <ImageBackground 
      source={{ uri: 'https://www.freepik.com/free-vector/abstract-pixel-rain-background_6372463.htm#fromView=search&page=2&position=50&uuid=f2d93f11-c42c-468f-ae51-6bcaa568edd4' }} 
      style={styles.container}
      blurRadius={3} // Optional: add blur effect to the background
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>My Projects</Text>
        <FlatList
          data={projects}
          keyExtractor={(item) => item.id}
          renderItem={renderProjectItem}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for readability
    borderRadius: 10,
    padding: 10
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20,
    color: '#333'
  },
  projectItem: { 
    padding: 15, 
    backgroundColor: '#ffffff', 
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  projectTitle: { 
    fontSize: 18, 
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10
  },
  technologiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  technologyTag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginRight: 5,
    marginBottom: 5
  },
  technologyText: {
    fontSize: 12,
    color: '#333'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  githubButton: {
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  liveButton: {
    backgroundColor: '#007bff', // Example color for live button
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  githubButtonText: {
    color: '#fff',
    fontSize: 14
  },
  liveButtonText: {
    color: '#fff',
    fontSize: 14
  }
});

export default ProjectsScreen;
