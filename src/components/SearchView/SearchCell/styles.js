import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts, Styles } from '@theme/';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.bottomBtnMargin,
    marginBottom: 0,
  },
  image: {
    height: Metrics.listImgHeight,
    width: Metrics.listImgHeight,
    resizeMode: 'stretch',
    marginRight: 10,
  },
  rateText: {
    ...Fonts.style.h4,
    color: Colors.brandPrimary,
    alignSelf: 'flex-end',
  },
});
