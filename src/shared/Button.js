import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const Button = ({ text }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle }>
        <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
     alignSelf: 'center',
     color: '#007aff',
     fontSize: 16,
     fontWeight: '600',
     paddingTop: 10,
     paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5 
  }
})

export default Button;