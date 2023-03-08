import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';

import CardMovie from './CardMovie';

import {IMovieData} from '../interfaces/Imovie';

interface Props {
  title?: string;
  movies: IMovieData[];
}

const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: title ? 270 : 230, marginBottom: 10}}>
      {title && <Text style={styles.titleList}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <CardMovie movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;

const styles = StyleSheet.create({
  titleList: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 8,
    marginBottom: 10,
  },
});
