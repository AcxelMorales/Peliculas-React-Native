import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

import {MovieFull, Cast} from '../interfaces/Imovie';

import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
  crew: Cast[];
}

export const MovieDetails = ({
  movieFull: {vote_average, genres, overview, budget},
  cast,
  crew,
}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {vote_average.toFixed(1)}</Text>
          <Text style={{marginLeft: 5}}>
            - {genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        <View>
          <Text style={styles.title}>Historia</Text>
          <Text style={styles.text}>{overview}</Text>

          <Text style={styles.title}>Presupuesto</Text>
          <Text style={styles.text}>
            {currencyFormatter.format(budget, {
              code: 'USD',
            })}
          </Text>

          <Text style={styles.title}>Actores</Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CastItem actor={item} item={true} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          <Text style={styles.title}>Equipo</Text>
          <FlatList
            data={crew}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CastItem actor={item} item={false} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.mb_50}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  mb_50: {
    marginBottom: 50,
  }
});
