"use client"

import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native'
import { Star } from 'lucide-react'

const testimonials = [
  { name: 'John Doe', text: 'Gaurav is an amazing developer. He delivered beyond expectations!', rating: 5 },
  { name: 'Jane Smith', text: 'His attention to detail and technical skills are top-notch.', rating: 4 },
  { name: 'Mike Johnson', text: 'Gaurav problem-solving abilities are impressive. He tackled complex issues with ease.', rating: 5 },
  { name: 'Emily Brown', text: 'Working with Gaurav was a pleasure. He is professional and always meets deadlines.', rating: 4 },
  { name: 'Alex Lee', text: 'Gaurav code is clean, well-documented, and easy to maintain. Highly recommended!', rating: 5 },
  { name: 'Sarah Wilson', text: 'His communication skills are excellent. He kept me updated throughout the project.', rating: 4 },
]

const TestimonialScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [fadeAnim] = useState(new Animated.Value(0))

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start()
    }
  }

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? '#FFD700' : 'none'}
          stroke={i < rating ? '#FFD700' : '#000'}
        />
      ))
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {testimonials.map((testimonial, index) => (
        <TouchableOpacity key={index} onPress={() => toggleExpand(index)}>
          <View style={styles.testimonialBox}>
            <Text style={styles.testimonialText} numberOfLines={expandedIndex === index ? undefined : 2}>
              "{testimonial.text}"
            </Text>
            {expandedIndex === index && (
              <Animated.View style={{ opacity: fadeAnim }}>
                <Text style={styles.testimonialAuthor}>- {testimonial.name}</Text>
                <View style={styles.ratingContainer}>{renderStars(testimonial.rating)}</View>
              </Animated.View>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  testimonialBox: {
    backgroundColor: '#f0f4f8',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  testimonialText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#333',
    lineHeight: 24,
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'right',
    color: '#555',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
})

export default TestimonialScreen;