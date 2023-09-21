import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Button,
} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MainMenu = ({navigation}) => {
  const [bmi, setBMI] = useState();
  const [bmiStatus, setBMIStatus] = useState();
  const [Username, setUsername] = useState();

  // Getting Data
  useEffect(() => {
    getData();
  }, []);

  //Getting username Data
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userName');
      setUsername(value);
    } catch (error) {}
  };

  //Setting BMI data
  const loadBMIHistory = async () => {
    try {
      const value = await AsyncStorage.getItem('bmi');
      setBMI(value);
    } catch (error) {
      console.log('Error loading BMI history:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadBMIHistory();
    });

    return unsubscribe;
  }, [navigation]);


  useEffect(() => {
    updateBMIStatus();
  }, [bmi]);

  //Status updating
  const updateBMIStatus = () => {
    if (bmi > 100) {
      setBMIStatus('Not Normal');
    } else if (bmi < 100) {
      setBMIStatus('Normal');
    }
  };

  
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.judul}>Good Morning, </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginLeft: 5,
              marginTop: 5,
              textAlign: 'left',
              color: '#ddd',
            }}>
            {Username}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={styles.userIcon}
            source={require('../../Assets/403019_avatar_male_man_person_user_icon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 50,
            fontWeight: 'bold',
            marginLeft: 5,
            marginTop: 20,
            textAlign: 'center',
          }}>
          Current BMI
        </Text>
        <Text style={styles.status}>{bmi}</Text>
        <Text
          style={[
            styles.status,
            bmiStatus === 'Not Normal' ? styles.redText : styles.greenText,
          ]}>
          {bmiStatus}
        </Text>
      </View>
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#353847',
  },
  container: {
    height: 310,
    width: 350,
    backgroundColor: '#5a4e69',
    borderRadius: 20,
    alignSelf: 'center',
    margin: 20,
  },
  redText: {
    color: '#df1414',
  },
  greenText: {
    color: '#19e212',
  },
  status: {
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 20,
    textAlign: 'center',
    
  },
  header: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  userIcon: {
    height: 75,
    width: 75,
    margin: 15,
    alignSelf: 'baseline',
  },
  judul: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 5,
    textAlign: 'left',
    color:'#ddd'
  },
});

export default MainMenu;
