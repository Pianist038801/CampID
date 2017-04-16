import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '@theme/';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.bottomBtnMargin,
  },
  listImg: {
    height: Metrics.listImgHeight,
    width: Metrics.screenWidth - Metrics.defaultPadding,
    flex: 1,
    resizeMode: 'stretch',
  },
  descTitle: {
    ...Fonts.style.h4,
    color: Colors.brandPrimary,
  },
  descPeriod: {
    ...Fonts.style.h4,
    color: Colors.textPrimary,
  },
  descDetail: {
    ...Fonts.style.h4,
    color: Colors.textSecondary,
  },
  descPrice: {
    ...Fonts.style.h1,
    letterSpacing: 0.5,
    color: Colors.brandPrimary,
  },
  buttonsContainer: {
    flex: 1,
    borderColor: Colors.borderPrimary,
    borderTopWidth: 1,
    padding: Metrics.defaultPadding / 2,
  },
});
