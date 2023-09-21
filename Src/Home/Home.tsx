import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MainMenu from './MainMenu/MainMenu'
import editBMI from './Edit/EditBMI'
import AntdesignIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Home = () => {
const [Username, setUsername] = useState();
const [Password, setPassword] = useState();


useEffect(() => {
 getData();
}, [])

const getData = async () => {
  try {
    const value1 = await AsyncStorage.getItem('username').then(value1 => {
      if (value1 != null) {
        setUsername(value1);
      }
    });
    const value2 = await AsyncStorage.getItem('password').then(value2 => {
      if (value2 != null) {
        setPassword(value2);
      }
    });
  } catch (error) {}
};






    return (
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {backgroundColor: '#353847'},
        })}>
        <Tab.Screen
          name="MainMenu"
          component={MainMenu}
          options={{
            headerShown: false,
            tabBarIcon: () => <MaterialIcon name="home" size={30} />,
          }}
        />
        <Tab.Screen
          name="Edit"
          component={editBMI}
          options={{
            headerShown: false,
            tabBarIcon: () => <MaterialIcon name="density-medium" size={30} />,
          }}
        />
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    
})

export default Home
