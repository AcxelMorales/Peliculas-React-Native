import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import {Cast} from '../interfaces/Imovie';

interface Props {
  actor: Cast;
  item: boolean;
}

export const CastItem = ({
  actor: {name, character, profile_path, job},
  item,
}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${profile_path}`;

  return (
    <View style={styles.container}>
      {profile_path ? (
        <Image source={{uri}} style={styles.image} />
      ) : (
        <Image
          source={{
            uri: 'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png',
          }}
          style={styles.image}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        {item ? (
          <Text style={styles.character}>{character}</Text>
        ) : (
          <Text style={styles.character}>{job}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
    borderRadius: 10,
    marginRight: 30,
    paddingRight: 5,
  },
  image: {
    width: 50,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  character: {
    fontSize: 16,
    opacity: 0.7,
  },
});
