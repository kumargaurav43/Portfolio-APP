// create blog screen

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking
} from "react-native";

const blogPosts = [
  { title: "How I Built My Portfolio", link: "https://medium.com/@gaurav746504/how-i-built-my-portfolio-a-developers-journey-3b3fd334e9b5" },
  { title: "Understanding React Hooks", link: "https://example.com/post2" },
  // Add more blog posts here
];

const BlogScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {blogPosts.map((post, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => Linking.openURL(post.link)}
        >
          <View style={styles.blogPost}>
            <Text style={styles.blogTitle}>{post.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  blogPost: {
    padding: 20,
    backgroundColor: "#eaeaea",
    borderRadius: 8,
    marginBottom: 20,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BlogScreen;
