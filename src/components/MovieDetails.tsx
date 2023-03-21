import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

import {MovieFull, Cast} from '../interfaces/Imovie';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({
  movieFull: {vote_average, genres, overview, budget},
  cast,
}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20, marginTop: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {vote_average.toFixed(1)}</Text>
          <Text style={{marginLeft: 5}}>
            - {genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        <View>
          <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
            Historia
          </Text>
          <Text style={{fontSize: 16}}>{overview}</Text>
          <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
            Presupuesto
          </Text>
          <Text style={{fontSize: 18}}>
            {currencyFormatter.format(budget, {
              code: 'USD',
            })}
          </Text>
        </View>
      </View>
    </>
  );
};
