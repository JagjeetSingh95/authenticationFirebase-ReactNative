import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 65,
    shadowOffset:{  width: 0,  height: 2  },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    paddingTop: 20,
    elevation: 2,
    position: 'relative'
  },
  headerTitle: {
    fontSize: 20
  }
})

export default Header;