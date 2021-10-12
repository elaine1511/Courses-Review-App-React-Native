import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import About from './components/About'
import CoursesList from './components/CoursesList';
import CourseDetail from './components/CourseDetail';
import AddReview from './components/AddReview';

const Stack = createStackNavigator();
const Btab = createMaterialBottomTabNavigator();

function CourseStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Course List' component={CoursesList} />
      <Stack.Screen name='Course Details' component={CourseDetail} />
      <Stack.Screen name='Add Review' component={AddReview} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Btab.Navigator screenOptions={{ headerShown: false }}>
        <Btab.Screen
          name="CoursesStack"
          component={CourseStackScreen}
          options={{
            title: 'Courses',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color="black" />
            ),
          }}
        />
        <Btab.Screen
          name="About"
          component={About}
          options={{
            title: 'About us',
            tabBarIcon: ({ color }) => (
              <Ionicons name="information-circle" size={24} color="black" />
            ),
          }}
        />
      </Btab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
