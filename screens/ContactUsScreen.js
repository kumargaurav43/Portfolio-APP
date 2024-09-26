import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';

const ContactUsScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (name === '' || email === '' || message === '') {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    try {
      // Send request to your backend API to trigger the email
      const response = await fetch('https://your-backend-api.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        Alert.alert('Success', 'Your message has been sent! Check your email for confirmation.');
        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');
      } else {
        Alert.alert('Error', 'Failed to send message.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <Button title="Send Message" onPress={handleSubmit} />

      {/* Contact Details Section */}
      <View style={styles.contactDetails}>
        <Text style={styles.contactTitle}>Contact Details</Text>
        <Text>Email: your-email@example.com</Text>
        <Text>Phone: +1234567890</Text>
        <Text>Location: Your City, Country</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  messageInput: {
    height: 150,
    textAlignVertical: 'top',
  },
  contactDetails: {
    marginTop: 30,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ContactUsScreen;
