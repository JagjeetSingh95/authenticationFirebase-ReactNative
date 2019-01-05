import React, { Component } from 'react';
import {
  TextInput
} from 'react-native';

import Card from '../shared/card';
import CardSection from '../shared/CardSection';
import Button from '../shared/Button'

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput style={{ height: 20, width: 100 }} />
        </CardSection>
        <CardSection>
          <TextInput style={{ height: 20, width: 100 }} />
        </CardSection>
        <CardSection>
          <Button text="Login" />
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;