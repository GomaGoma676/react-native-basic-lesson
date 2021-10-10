import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlexBoxScreen } from '../screens/FlexBoxScreen';
import { ReduxTKScreen } from '../screens/ReduxTKScreen';
import { HelloScreen } from '../screens/HelloScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ReduxTK">
        <Stack.Screen name="FlexBox" component={FlexBoxScreen} />
        <Stack.Screen name="ReduxTK" component={ReduxTKScreen} />
        <Stack.Screen name="Hello" component={HelloScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
