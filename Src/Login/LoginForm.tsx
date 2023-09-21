import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import InputText from './InputText';
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginForm = ({navigation}) => {
    const [Username, setUsername] = useState();
    const [Password, setPassword] = useState();
    
    
    const storeData = async () => {
      try {
        await AsyncStorage.setItem('userName', Username);
        await AsyncStorage.setItem('password', Password);
        navigation.navigate('Home');
      } catch (e) {
        // saving error
      }
    };


useEffect(() => {
  getData();
}, []);

const getData = async () => {
  try {
    const value1 = await AsyncStorage.getItem('username').then(value1 => {
      if (value1 != null) {
         setUsername(value1);
        navigation.navigate('Home');
      }
    });
    const value2 = await AsyncStorage.getItem('password').then(value2 => {
      if (value2 != null) {
        setPassword(value2);
         navigation.navigate('Home');
      }
    });
  } catch (error) {}
};
    
    return (
      <View style={{flex: 1}}>
        <Text style={styles.judul}>Login Form</Text>
        <Image
          style={styles.image}
          source={require('../Assets/403019_avatar_male_man_person_user_icon.png')}
        />
        <View style={{marginLeft: 10}}>
          <InputText
            text="Username"
            value={Username}
            setValue={setUsername}
            placeholder="Username"
            securityTextEntry={false}
            onChangeText={text => setUsername(text)}
          />
          <InputText
            text="Password"
            value={Password}
            setValue={setPassword}
            placeholder="Password"
            securityTextEntry={true}
            onChangeText={text => setPassword(text)}
          />

          <TouchableOpacity style={styles.button} onPress={storeData}>
            <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
  judul: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 30,
    color: '#000000',
    marginBottom: 70,
  },
  image: {
    width: 250,
    height: 250,
    margin: 5,
    alignSelf: 'center',
  },
 
  button: {
    height: 50,
    width: 200,
    borderBottomWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor:'#2b9dd5',
    alignSelf:'center',
    justifyContent: 'center',

    alignItems: 'center'
   
  },
});

export default LoginForm
