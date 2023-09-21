import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Button, BackHandler } from 'react-native'
import EditButton from './EditButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const Edit = ({navigation}) => {
  const [bmiHistory, setBMIHistory] = useState([]);
  const [umur, setUmur] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [Username, setUsername] = useState();

  const [bmi, setBMI] = useState();

  //Getting username Data
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userName');
      setUsername(value);
    } catch (error) {}
  };

  // Getting Data
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadBMIHistory();
    });

    return unsubscribe;
  }, [navigation]);

  const loadBMIHistory = async () => {
    try {
      const value1 = await AsyncStorage.getItem('bmi');
      setBMI(value1);
      const value2 = await AsyncStorage.getItem('umur');
      setUmur(value2);
      const value3 = await AsyncStorage.getItem('weight');
      setWeight(value3);
      const value4 = await AsyncStorage.getItem('height');
      setHeight(value4);
    } catch (error) {
      console.log('Error loading BMI history:', error);
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Image
          style={styles.userIcon}
          source={require('../../Assets/403019_avatar_male_man_person_user_icon.png')}
        />
        <View style={styles.nameContainer}>
          <Text style={{fontSize: 40, color: 'white'}}>{Username}</Text>
        </View>
      </View>
      <View style={styles.data}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 60,
            margin: 5,
            fontWeight: 'bold',
            color:'white',
          }}>
          Data Diri
        </Text>
        <View>
          <Text style={styles.dataFont}>Umur Anda </Text>
          <Text style={styles.dataFontMiddle}>{umur}</Text>
          <Text style={styles.dataFont}>berat badan anda</Text>
          <Text style={styles.dataFontMiddle}> {weight}</Text>
          <Text style={styles.dataFont}>Tinggi badan anda</Text>
          <Text style={styles.dataFontMiddle}>{height}</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('EditButton')}>
            <MaterialIcons name={'edit'} size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#353847',
  },
  judul: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 20,
    textAlign: 'left',
  },
  userIcon: {
    height: 150,
    width: 150,
    margin: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  nameContainer: {
    height: 55,
    width: 170,
    backgroundColor: '#514f51',
    margin: 5,
    borderRadius: 25,
    alignItems: 'center',
  },
  header: {
    marginHorizontal: 10,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  data: {
    height: 460,
    width: '100%',
    backgroundColor: '#6f6f6f',
    borderRadius: 40,
    padding: 5,
  },
  dataContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  dataFont: {
    textAlign: 'left',
    fontSize: 20,
    margin: 5,
    marginLeft: 30,
    fontWeight: 'bold',
    color:'white'
  },
  dataFontMiddle: {
    textAlign: 'center',
    fontSize: 40,
    margin: 5,
    marginLeft: 30,
    fontWeight: 'bold',
    color:'white'
  },
  editButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: '#a4a1a1',
    borderRadius: 25,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Edit
