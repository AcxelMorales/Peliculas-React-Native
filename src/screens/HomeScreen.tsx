import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

import useMovies from '../hooks/useMovies';

const HomeScreen = () => {
  const {moviesInTheater, isLoading} = useMovies();

  if (true) {
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
  }

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
