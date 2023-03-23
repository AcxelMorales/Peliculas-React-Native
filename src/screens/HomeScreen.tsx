import React, {useContext, useEffect} from 'react';

import {ActivityIndicator, Dimensions, View, ScrollView} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import useMovies from '../hooks/useMovies';

import CardMovie from '../components/CardMovie';
import HorizontalSlider from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import {getPosterColorsHelper} from '../helpers/index';

import {GradientContext} from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary, secondary] = await getPosterColorsHelper(uri);

    setMainColors({
      primary: primary?.toString()!,
      secondary: secondary?.toString()!,
    });
  };

  useEffect(() => {
    if (nowPlaying.length > 0) getPosterColors(0);
  }, [nowPlaying]);

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
                onSnapToItem={index => getPosterColors(index)}
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
