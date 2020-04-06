import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import SignIn from './SignIn';
import Profile from './Profile';
import SplashScreen from './Splashscreen';

import {useAuth} from './auth';

export default function rootNavigator(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {state} = useAuth();

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      {state.userToken ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )}
    </>
  );
}
