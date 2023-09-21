import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { Header } from 'react-native/Libraries/NewAppScreen'
// import test from './Home/test'
import Home from './Home/Home'
import LoginForm from './Login/LoginForm'
import EditButton from './Home/Edit/EditButton'
import UserProfile from'./Home/MainMenu/UserProfile'


const App = () => {
const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginForm} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditButton"
            component={EditButton}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={UserProfile}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    
})

export default App
