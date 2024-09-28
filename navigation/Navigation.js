// navigation/Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import SkillScreen from '../screens/SkillScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import TestimonialScreen from '../screens/TestimonialScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import BlogScreen from '../screens/BlogScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="Skills" component={SkillScreen}/>
        <Stack.Screen name="Contact Us" component={ContactUsScreen} />
        <Stack.Screen name="Testimonial" component={TestimonialScreen}/>
        <Stack.Screen name="Achievement" component={AchievementsScreen}/>
        <Stack.Screen name="Blog" component={BlogScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
