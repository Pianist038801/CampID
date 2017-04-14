import { StyleSheet } from 'react-native';
import { Styles, Fonts, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  bodyContainer: {
    flex: 5,
    alignItems: 'center',
  },
  logoImage: {
    resizeMode: 'stretch',
    top: 0,
    left: 0,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight * (313.0 / 1135.0),
  },

  forgotText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.textThird,
    fontSize: Fonts.size.h4,
  },

  forgotTextStyle: {
    width: Metrics.buttonWidth,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.textPrimary,
    letterSpacing: 1,
    includeFontPadding: true,
  },
  forgotPwdContainer: {
    marginTop: 10,
    padding: 0,
    width: Metrics.buttonWidth,
    alignItems: 'flex-end',
  },
  orContainer: {
    paddingVertical: 5,
    alignItems: 'center',
  },
  bottomAreaLogin: {
    ...Styles.center,
    flexDirection: 'column',
    height: Metrics.screenHeight * (137 / 1135.0),
  },
  bottomAreaRegister: {
    ...Styles.center,
    flexDirection: 'column',
    height: Metrics.screenHeight / 10,
  },
});
