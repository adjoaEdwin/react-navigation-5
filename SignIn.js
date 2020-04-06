import React from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import {useAuth} from './auth';

export default function SignIn() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {authContext} = useAuth();

  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Item>
            <Input
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />
          </Item>
          <Button
            full
            onPress={() => {
              authContext.handleSignIn({username, password});
              AsyncStorage.setItem(
                'userToken',
                JSON.stringify({username, password}),
              );
            }}>
            <Text>Log In</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
