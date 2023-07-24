import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextI, TextInput, Button } from 'react-native';
import { useState } from 'react';
import {addDoc, collection} from "firebase/firestore";
import {db} from "./config";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Login from "./components/Login";
import AllUsers from "./components/AllUsers";
import Details from "./components/Details";
//need to import for stack navigation
import { createStackNavigator } from "@react-navigation/stack";
import { ImageBackground } from 'react-native';
import { ScrollView } from 'react-native';
import Resume from './components/Resume';
import UpdateResume from './components/UpdateResume';

const Tab = createBottomTabNavigator();





export default function App() {
  


  return (
    

  

    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "detail") {
              iconName = "ios-log-in";
            } else if (route.name === "resume") {
              iconName = "ios-people";
            }
            else if (route.name === "UpdateResume") {
              iconName = "ios-refresh";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          route: "detail",
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
      <Tab.Screen  name="detail" component={Details} />
      <Tab.Screen name="resume" component={Resume} />
      <Tab.Screen name="UpdateResume" component={UpdateResume} />

      </Tab.Navigator>
   
    </NavigationContainer>
    )
}



