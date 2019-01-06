import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.cardSectionContainer}>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  cardSectionContainer: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});

export default CardSection;