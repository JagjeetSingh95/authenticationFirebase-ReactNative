import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import Header from './src/component/header';
import LoginForm from './src/component/loginForm';

export default class App extends Component {
  componentDidMount () {
    firebase.initializeApp({
      apiKey: "AIzaSyBn4WOaJYr7D1bEL710Nwd1z-3HZg5UoHQ",
      authDomain: "zombiz-c8fc8.firebaseapp.com",
      databaseURL: "https://zombiz-c8fc8.firebaseio.com",
      projectId: "zombiz-c8fc8",
      storageBucket: "zombiz-c8fc8.appspot.com",
      messagingSenderId: "215914864861"
    })
  } 
  render() {
    return (
      <View>
        <Header title="Authentication" />
        <LoginForm />
      </View>
    );
  }
}