import React from 'react';

import {ActivityIndicator, Dimensions, View, ScrollView} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import useMovies from '../hooks/useMovies';

import CardMovie from '../components/CardMovie';
import HorizontalSlider from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
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
      <GradientBackground>
        <View style={{marginTop: top + 20}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{height: 440}}>
              <Carousel
                data={nowPlaying}
                renderItem={({item}: any) => <CardMovie movie={item} />}
                sliderWidth={windowWidth}
                itemWidth={300}
                inactiveSlideOpacity={0.9}
              />
            </View>

            <HorizontalSlider movies={topRated} title="Top rated" />
            <HorizontalSlider movies={upcoming} title="Upcoming" />
            <HorizontalSlider movies={popular} title="Popular" />
          </ScrollView>
        </View>
      </GradientBackground>
    );
  }
};

export default HomeScreen;
