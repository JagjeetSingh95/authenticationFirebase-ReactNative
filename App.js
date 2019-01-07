import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import Header from './src/component/header';
import LoginForm from './src/component/loginForm';
import Button from './src/shared/Button';
import Card from './src/shared/Card';
import CardSection from './src/shared/CardSection';
import Loader from './src/shared/Loader';

export default class App extends Component  {
  state = { loggedIn: null };

  componentDidMount () {
    firebase.initializeApp({
      apiKey: "AIzaSyBn4WOaJYr7D1bEL710Nwd1z-3HZg5UoHQ",
      authDomain: "zombiz-c8fc8.firebaseapp.com",
      databaseURL: "https://zombiz-c8fc8.firebaseio.com",
      projectId: "zombiz-c8fc8",
      storageBucket: "zombiz-c8fc8.appspot.com",
      messagingSenderId: "215914864861"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  } 

  renderContent() {
    switch(this.state.loggedIn) {
      case true: 
       return (
        <Card>
          <CardSection>
          <Button onPress={() => firebase.auth().signOut()} text="LogOut " />
          </CardSection>
        </Card>
        )
      case false: 
        return <LoginForm />
      default: 
       return (
        <Card>
          <CardSection>
            <Loader size="large" />
          </CardSection>
        </Card>
      )
    }
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        {this.renderContent() }
      </View>
    );
  }
}