import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import { Ionicons } from '@expo/vector-icons';
import SkillScreen from './screens/SkillScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import { CustomDrawerContent } from './components/CustomDrawerContent';
import TestimonialScreen from './screens/TestimonialScreen';
import AchievementsScreen from './screens/AchievementsScreen';
import BlogScreen from './screens/BlogScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Create Tab Navigation
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Projects') {
            iconName = focused ? 'folder' : 'folder-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Projects" component={ProjectsScreen} />
    </Tab.Navigator>
  );
}

// Create Drawer Navigation wrapping the Tab Navigation
// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator initialRouteName="HomeTab" drawerContent={(props) => <CustomDrawerContent {...props}/>}>

//       <Drawer.Screen name="HomeTab" component={TabNavigator} options={{ title: 'Home' }} />
//       <Drawer.Screen name="About" component={AboutScreen} />
//       <Drawer.Screen name="Skills" component={SkillScreen} />
//       <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
//     </Drawer.Navigator>
//   );
// }

// drawer function which handle the navigation of drawer section
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Projects') {
            iconName = focused ? 'folder' : 'folder-outline';
          } else if (route.name === 'Skills') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'Contact Us') {
            iconName = focused ? 'call' : 'call-outline';
          } else if (route.name === 'Testimonial') {
            iconName = focused ? 'star' : 'star-outline'; // Use a suitable icon
          } else if (route.name === 'Achievement') {
            iconName = focused ? 'trophy' : 'trophy-outline'; // icon for "Achievement"
          }
          else if (route.name === 'Blog') {
            iconName = focused ? 'newspaper' : 'newspaper-outline'; // icon for "Blog"
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        drawerActiveTintColor: 'tomato',
        drawerInactiveTintColor: 'gray',
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Projects" component={ProjectsScreen} />
      <Drawer.Screen name="Skills" component={SkillScreen} />
      <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
      <Drawer.Screen name="Testimonial" component={TestimonialScreen}/>
      <Drawer.Screen name="Achievement" component={AchievementsScreen}/>
      <Stack.Screen name="Blog" component={BlogScreen}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
