import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const InputText = (props) => {


    return (
      <View style={{margin: 10}}>
        <Text style={{margin: 7, fontSize: 20, fontWeight: 'bold'}}>
          {props.text}
        </Text>
        <TextInput
          value={props.value}
          style={styles.textInput}
          placeholder={props.placeholder}
          onChangeText={text => props.setValue(text)}
          secureTextEntry={props.securityTextEntry}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 320,
    backgroundColor: '#a7a7a7',
    borderBottomWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    margin: 5,
  },
});

export default InputText
