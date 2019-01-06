import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase  from 'firebase';

import Button from '../shared/Button';
import Card  from '../shared/Card';
import CardSection from '../shared/CardSection';
import Input from '../shared/Input';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' }

  onButtonPress()  {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password )
            .catch(() => {
              firebase.auth().createUserWithEmailAndPassword(email, password) 
                .catch(() => {
                  this.setState({ error: 'Authentication Failed!' })
                })
            });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="user@@gmail.com"
            value={this.state.email}
            secureTextEntry={false}
            onChangeText={email => this.setState({ email })}
            />
        </CardSection>
        <CardSection>
          <Input 
            label="Password"
            placeholder="password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            />
        </CardSection>
        <Text style={styles.errorStyle}>{this.state.error}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)} text="Login" />
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 20,
    alignItems: 'center',
    color: 'red'
  }
})

export default LoginForm;