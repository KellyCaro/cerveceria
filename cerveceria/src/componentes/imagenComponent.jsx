import { StyleSheet } from 'react-native';

const createImageStyle = (width, height, borderRadius, marginBottom) => {
  return StyleSheet.create({
    imageStyle: {
      width: width,
      height: height,
      resizeMode: 'cover',
      borderRadius: borderRadius,
      marginBottom: marginBottom,
    },
  });
};

export default createImageStyle;
