import React from 'react';

import {ActivityIndicator, Dimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import useMovies from '../hooks/useMovies';

import CardMovie from '../components/CardMovie';

const {width: windowWidth} = Dimensions.get('window');

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
      <View style={{marginTop: top + 20}}>
        <View style={{height: 440}}>
          <Carousel
            data={moviesInTheater}
            renderItem={({item}: any) => <CardMovie movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
      </View>
    );
  }
};

export default HomeScreen;
