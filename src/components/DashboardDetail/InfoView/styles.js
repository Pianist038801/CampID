import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts, Styles } from '@theme/';

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
    ...Fonts.style.h5,
    color: Colors.textSecondary,
  },
  descSubTitle: {
    ...Fonts.style.h5,
    color: Colors.textPrimary,
  },
  descPeriod: {
    ...Fonts.style.h5,
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
  stadium: {
    ...Fonts.style.h6,
    ...Fonts.style.semibold,
    color: Colors.textPrimary,
  },
  university: {
    ...Fonts.style.h6,
    color: Colors.textPrimary,
  },
  address: {
    ...Fonts.style.h6,
    color: Colors.textPrimary,
  },

  rateBar: {
    ...Styles.center,
    resizeMode: 'stretch',
    width: 149,
    height: 96,
  },
  rateText: {
    ...Fonts.style.h4,
    color: Colors.textBlue,
    marginBottom: 10,
  },
  rateCampBtn: {
    ...Fonts.style.h6,
    color: Colors.brandPrimary,
  },
  leftView: {
    width: Metrics.screenWidth - Metrics.defaultMargin - 149 - 20,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  rightView: {
    ...Styles.center,
    paddingVertical: 10,
    width: 149,
  },
  middleGap: {
    width: 20,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  buttonsContainer: {
    flex: 1,
    borderColor: Colors.borderPrimary,
    borderTopWidth: 1,
    padding: Metrics.defaultPadding / 2,
  },
});
