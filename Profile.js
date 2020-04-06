import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

function Profile() {
  return (
    <View>
      <Text>This is the profile screen.</Text>
    </View>
  );
}

export default function ProfileStackScreen() {
  const ProfileStack = createStackNavigator();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}
