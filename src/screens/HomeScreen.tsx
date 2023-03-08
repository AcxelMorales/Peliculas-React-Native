import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import useMovies from '../hooks/useMovies';

import CardMovie from '../components/CardMovie';

const HomeScreen = () => {
  const {moviesInTheater, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  } else {
    return (
      <View
        style={{
          marginTop: top + 20,
        }}>
        <CardMovie movie={moviesInTheater[1]} />
      </View>
    );
  }
};

export default HomeScreen;
