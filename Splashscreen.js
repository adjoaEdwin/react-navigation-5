import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {useAuth} from './auth';

export default function Splashscreen() {
  const {authContext} = useAuth();

  useEffect(() => {
    authContext.bootstrapAsync();
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Loading ...</Text>
    </View>
  );
}
