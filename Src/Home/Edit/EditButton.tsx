import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  BackHandler,
  Alert,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const EditButton = ({navigation}) => {
  const [umur, setUmur] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBMI] = useState();

   const showAlert = () => {
     Alert.alert(
       'Warning',
       'Please Fill the Data',
       [
         {
           text: 'OK',
           onPress: () => console.log('OK Pressed'),
         },
       ],
       {cancelable: false},
     );
   };
   
  const calculateBMI = () => {
    if (!weight || !height) {
      showAlert();
      return;
    }else if (isNaN(weight) && isNaN(height) && isNaN(umur)) {
      Alert.alert('Warning', 'Please enter a valid integer.');
    } else if (weight > 800) {
      Alert.alert('Warning', 'Please enter a valid data.');
    } else if (height > 800) {
      Alert.alert('Warning', 'Please enter a valid data.');
    } else if (umur > 800) {
      Alert.alert('Warning', 'Please enter a valid data.');
    } else {
      const heightInMeters = height / 100;
      const bmiResult = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiResult);
    }
  };

  const storeData = async () => {
    try {
      navigation.navigate('Edit');
      await AsyncStorage.setItem('bmi', bmi);
      await AsyncStorage.setItem('umur', umur);
      await AsyncStorage.setItem('weight', weight);
      await AsyncStorage.setItem('height', height);

    } catch (e) {
      // saving error
    }
  };



  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'center'}}>
        <TouchableOpacity onPress={storeData} style={{alignSelf: 'flex-start'}}>
          <MaterialIcons name="arrow-back-ios" size={40} />
        </TouchableOpacity>
        <View style={styles.modalContainer}>
          <Text style={styles.text}>Umur</Text>
          <TextInput
            style={styles.input}
            value={umur}
            onChangeText={text => setUmur(text)}
            keyboardType="numeric"
          />
          <Text style={styles.text}>Berat</Text>
          <TextInput
            style={styles.input}
            value={weight}
            onChangeText={text => setWeight(text)}
            keyboardType="numeric"
          />
          <Text style={styles.text}>Tiggi</Text>
          <TextInput
            style={styles.input}
            value={height}
            onChangeText={text => setHeight(text)}
            keyboardType="numeric"
          />

          <TouchableOpacity
            onPress={calculateBMI}
            style={{
              alignSelf: 'center',
              backgroundColor: '#a0a0a0',
              borderRadius: 10,
            }}>
            <MaterialIcons name={'save'} size={50} color={'#00af03'} />
          </TouchableOpacity>
        </View>
          {bmi && <Text style={styles.text}>Your BMI: {bmi}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#383030',
  },
  body: {
    flex: 1,
    backgroundColor: '#472c2c',
  },
  modalContainer: {
    height: 400,
    width: 350,
    backgroundColor: '#6e5a5a',
    justifyContent: 'center',
    borderRadius: 50,
  },
  input: {
    height: 50,
    width: 250,
    backgroundColor: '#8e8e8e',
    borderRadius: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default EditButton;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
