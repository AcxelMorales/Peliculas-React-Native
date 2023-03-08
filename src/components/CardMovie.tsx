import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {IMovieData} from '../interfaces/Imovie';

interface Props {
  movie: IMovieData;
  height?: number;
  width?: number;
}

const CardMovie = ({movie: {poster_path}, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <View style={{
      width,
      height,
      marginHorizontal: 8
    }}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default CardMovie;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
