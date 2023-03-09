import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

import { IMovieData } from '../interfaces/Imovie';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: IMovieData;
};

const Stack = createStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
