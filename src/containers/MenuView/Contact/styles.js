import { StyleSheet } from 'react-native';
import { Styles, Fonts, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  rowView: {
    paddingVertical: 20,
    borderWidth: 0,
    borderColor: Colors.btnDisabled,
    borderBottomWidth: 1,
    paddingLeft: Metrics.defaultMargin,
  },

  title: {
    ...Fonts.style.h5,
    color: Colors.textPrimary,
  },
  redText: {
    ...Fonts.style.h6,
    color: Colors.textRed,
  },
  grayText: {
    ...Fonts.style.h6,
    color: Colors.btnDisabled,
  },
  container: {
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.bottomBtnMargin,
    marginBottom: 0,
  },
});
