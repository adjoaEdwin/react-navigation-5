import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';

import {useAuth} from './auth';

function Home() {
  const {authContext} = useAuth();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <View style={{padding: 10}} />
      <Button primary onPress={() => authContext.handleSignOut()}>
        <Text>Sign Out</Text>
      </Button>
    </View>
  );
}

export default function HomeStackScreen() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}
