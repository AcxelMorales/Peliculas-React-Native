import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {IMovieData} from '../interfaces/Imovie';

interface Props {
  movie: IMovieData;
}

const CardMovie = ({movie: {poster_path}}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <View style={styles.imageContainerMain}>
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
  imageContainerMain: {
    width: 300,
    height: 420,
  },
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
