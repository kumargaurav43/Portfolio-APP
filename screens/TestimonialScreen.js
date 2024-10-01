import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const testimonials = [
  { name: 'John Doe', text: 'Gaurav is an amazing developer. He delivered beyond expectations!' },
  { name: 'Jane Smith', text: 'His attention to detail and technical skills are top-notch.' },
  // Add more testimonials here
];

const TestimonialScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {testimonials.map((testimonial, index) => (
        <View key={index} style={styles.testimonialBox}>
          <Text style={styles.testimonialText}>"{testimonial.text}"</Text>
          <Text style={styles.testimonialAuthor}>- {testimonial.name}</Text>
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
  testimonialBox: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  testimonialText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'right',
  },
});

export default TestimonialScreen;
