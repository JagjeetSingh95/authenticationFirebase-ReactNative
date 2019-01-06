import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { containerStyle, labelStyle, inputStyle  } = styles
  return (
    <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCorrect={false }
          value={value}
          onChangeText={onChangeText}
          style={inputStyle}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2 
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
})

export default Input;