import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const EditUser = ({navigation}) => {
  const [Username, setUsername] = useState();
  const [Umur, setUmur] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userName');
      setUsername(value);
      const value1 = await AsyncStorage.getItem('umur');
      setUmur(value1);
    } catch (error) {}
  };

  const RemoveData = async () => {
    try {
      await AsyncStorage.removeItem('userName');
      await AsyncStorage.removeItem('password');
      navigation.navigate('Login');
    } catch (error) {}
  };

  return (
    <View style={{flex: 1, backgroundColor: '#535050', alignContent: 'center'}}>
      <View style={styles.dataContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="arrow-back-ios" size={50} />
        </TouchableOpacity>
        <Image
          style={styles.UserIcon}
          source={require('../../Assets/403019_avatar_male_man_person_user_icon.png')}
        />
      </View>

      <View>
        <View style={styles.usernameContainer}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: '#ffffff',
              alignSelf: 'center',
            }}>
            {Username}
          </Text>
        </View>
      </View>

      <View style={styles.userContainer}>
        

        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#ffffff'}}>
          Umur
        </Text>
        <View style={styles.nameContainer}>
          <Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#ffffff',
                alignSelf: 'center',
              }}>
              {Umur}
            </Text>
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.Logout} onPress={RemoveData}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  judul: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#ffffff',
  },
  header: {
    height: 100,
    width: 370,
    backgroundColor: '#4cabde',
    borderRadius: 60,
    marginTop: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 20,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    margin: 10,
    alignContent: 'center'
  },
  UserIcon: {
    width: 240,
    height: 240,
    borderRadius: 120,
    margin: 10,
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: '#ffffff',
  },
  dataContainer: {
    height: 200,
    width: 400,
    backgroundColor: '#412945',
    
  },
  usernameContainer: {
    alignSelf: 'center',
    height: 50,
    width: 200,
    backgroundColor: '#adadad',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    margin: 5,
    marginTop: 130,
    alignContent: 'center',
  },
  userContainer: {
    padding: 20,
    paddingTop: 40,
  },
  nameContainer: {
    height: 40,
    width: 340,
    backgroundColor: '#313131',
    borderRadius: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logout: {
    height: 40,
    width: 240,
    backgroundColor: '#e5e5e5',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    margin: 20,
  },
});

export default EditUser;
