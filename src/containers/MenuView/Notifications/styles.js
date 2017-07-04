import { StyleSheet } from 'react-native';
import { Styles, Fonts, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  bigText: {
    ...Fonts.style.h3,
    color: Colors.textPrimary,
    height: 30,
    marginBottom: 10,
    marginTop: 30,
  },
  smallText: {
    ...Fonts.style.h6,
    height: 30,
    color: Colors.brandPrimary,
  },
  container: {
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.bottomBtnMargin,
    marginBottom: 0,
  },
});
