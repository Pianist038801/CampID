import { StyleSheet } from 'react-native';
import { Styles, Fonts, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  normalText: Fonts.style.h5,
  normalBrandText: { ...Fonts.style.h5, color: Colors.brandPrimary },
  btnText: { ...Fonts.style.h5, color: Colors.textTitle },
  profileRow: { ...Styles.rowContainer, marginBottom: 10, flex: 1, justifyContent: 'space-between' },
  container: {
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.bottomBtnMargin,
    marginBottom: 0,
  },
  listImg: {
    height: Metrics.listImgHeight,
    width: Metrics.screenWidth - Metrics.defaultPadding,
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
    ...Fonts.style.h5,
    ...Fonts.style.semibold,
    color: Colors.textPrimary,
  },
  university: {
    ...Fonts.style.h6,
    color: Colors.textPrimary,
  },
  activeCamp: {
    ...Fonts.style.h6,
    color: Colors.textPrimary,
  },
  inactiveCamp: {
    ...Fonts.style.h6,
    color: Colors.textSecondary,
  },
  address: {
    ...Fonts.style.h6,
    color: Colors.textPrimary,
  },
  rateBar: {
    ...Styles.center,
    resizeMode: 'stretch',
    width: Metrics.rateBarWidth,
    height: Metrics.rateBarHeight,
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
    width: Metrics.screenWidth - Metrics.defaultMargin - Metrics.rateBarWidth - Metrics.dashboardGap,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  priceView: {
    alignItems: 'flex-start',
    width: Metrics.priceViewWidth,
  },
  middleTextView: {
    alignItems: 'flex-start',
    width: Metrics.screenWidth - Metrics.defaultMargin - Metrics.rateBarWidth - Metrics.dashboardGap - Metrics.priceViewWidth,
  },
  middleGap: {
    width: Metrics.dashboardGap,
  },
  rightView: {
    ...Styles.center,
    paddingVertical: 10,
    width: Metrics.rateBarWidth,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  awardText: {
    ...Fonts.style.h3,
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  buttonsContainer: {
    flex: 1,
    borderColor: Colors.borderPrimary,
    borderTopWidth: 1,
    padding: Metrics.defaultPadding / 2,
  },

});
