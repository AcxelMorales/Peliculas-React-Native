import ImageColors from 'react-native-image-colors';

export const getPosterColorsHelper = async (uri: string) => {
  const result = await ImageColors.getColors(uri, {});

  let primary: string | undefined;
  let secondary: string | undefined;

  if (result.platform === 'android') {
    primary = result.dominant;
    secondary = result.average;
  } else if (result.platform === 'ios') {
    primary = result.primary;
    secondary = result.secondary;
  }

  return [primary, secondary];
};
