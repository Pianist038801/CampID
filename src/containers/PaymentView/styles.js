import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts, Styles } from '@theme/';

export default StyleSheet.create({
  container: {
     
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.bottomBtnMargin,
    marginBottom: 0,
  },
  image: {
    height: Metrics.listImgHeight,
    width: Metrics.listImgHeight * 4 / 3,
    resizeMode: 'stretch',
    marginRight: 10,
  },
  rateText: {
    ...Fonts.style.h1,
    color: Colors.brandPrimary, 
  },
});
