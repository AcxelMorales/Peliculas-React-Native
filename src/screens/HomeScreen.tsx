import React from 'react';

import {ActivityIndicator, Dimensions, View, ScrollView} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import useMovies from '../hooks/useMovies';

import CardMovie from '../components/CardMovie';
import HorizontalSlider from '../components/HorizontalSlider';

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{height: 440}}>
            <Carousel
              data={moviesInTheater}
              renderItem={({item}: any) => <CardMovie movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
            />
          </View>

          <HorizontalSlider movies={moviesInTheater} title="En cines" />
        </ScrollView>
      </View>
    );
  }
};

export default HomeScreen;
