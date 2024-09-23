import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

// Custom Drawer Content Component
export function CustomDrawerContent(props) {
  return (
    //<ImageBackground source={require('../assets/about-background.jpg')} style={styles.drawerBackground}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        <View style={styles.drawerContent}>
          {/* Drawer Items */}
          <DrawerItemList {...props} />
        </View>
        <View style={styles.socialMediaContainer}>
          {/* Social Media Icons */}
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/kumargaurav43')}>
            <FontAwesome5 name="github" size={24} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://x.com/_gaurav_19')}>
            <FontAwesome5 name="twitter" size={24} color="#00acee" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/gaurav-9159bb196/')}>
            <FontAwesome5 name="linkedin" size={24} color="#0077b5" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/i_gaurav19_/')}>
            <Ionicons name="logo-instagram" size={24} color="#E1306C" />
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    //</ImageBackground>
  );
}

const styles = StyleSheet.create({
  drawerBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  drawerContent: {
    flex: 1,
    padding: 20,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
});
