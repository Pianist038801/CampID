import { StyleSheet } from 'react-native';
import { Styles, Fonts, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  normalText: Fonts.style.h5,
  normalBrandText: { ...Fonts.style.h5, color: Colors.brandPrimary },
  btnText: { ...Fonts.style.h5, color: Colors.textTitle },
  profileRow: { ...Styles.rowContainer,  marginBottom: 10, flex: 1, justifyContent: 'space-between' },
  container: {
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.bottomBtnMargin,
    marginBottom: 0,
  },
});
