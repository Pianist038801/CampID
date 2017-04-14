import { Platform } from 'react-native';
import Colors from './Colors';
import Metrics from './Metrics';

const type = {
  regular: 'TitilliumWeb-Regular',
  light: 'TitilliumWeb-Light',
  bold: 'TitilliumWeb-Bold',
  semibold: 'TitilliumWeb-SemiBold',
};

/* const size = {
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  _h3: Metrics.screenHeight * (25 / 1135.0),
  h3: Metrics.screenHeight * (20 / 1135.0),
  h5: 16,
  h6: 14,
  default: 12,
  small: 10,
  mini: 8,
};*/

const size = {
  h0: 30,
  h1: 25,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  default: 12,
  small: 10,
  mini: 8,
};

const style = {
  textInput: {
    fontFamily: type.regular,
    fontSize: size.h6,
    backgroundColor: 'transparent',
  },
  fieldInput: {
    fontFamily: type.regular,
    fontSize: size.h6,
    backgroundColor: 'transparent',
    color: Colors.textThird,
  },
  h0: {
    fontFamily: type.semibold,
    fontSize: size.h0,
    backgroundColor: 'transparent',
    letterSpacing: 2,
    includeFontPadding: true,
  },
  h1: {
    fontFamily: type.semibold,
    fontSize: size.h1,
    backgroundColor: 'transparent',
    letterSpacing: 2,
    includeFontPadding: true,
  },
  h2: {
    fontFamily: type.semibold,
    fontSize: size.h2,
    backgroundColor: 'transparent',
  },
  h3: {
    fontFamily: type.semibold,
    fontSize: size.h3,
    backgroundColor: 'transparent',
  },
  h4: {
    fontFamily: type.semibold,
    fontSize: size.h4,
    backgroundColor: 'transparent',
  },
  h5: {
    fontFamily: type.semibold,
    fontSize: size.h5,
    backgroundColor: 'transparent',
  },
  bold: {
    fontFamily: type.bold,
  },
  semibold: {
    fontFamily: type.semibold,
  },
  regular: {
    fontFamily: type.regular,
  },
  light: {
    fontFamily: type.light,
  },
  h6: {
    fontFamily: type.semibold,
    fontSize: size.h6,
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontFamily: type.semibold,
    fontSize: size.h4,
    letterSpacing: 0.5,
    color: 'white',
    backgroundColor: 'transparent',
  },
  bottomText: {
    fontFamily: type.regular,
    fontSize: size.h3,
    letterSpacing: 0.5,
    color: Colors.textSecondary,
    backgroundColor: 'transparent',
  },
  hyperButtonText: {
    fontFamily: type.semibold,
    fontSize: size.h5,
    letterSpacing: 0.5,
    backgroundColor: 'transparent',
    color: Colors.textFourth,
  },
  registerBottomBtn:
  {
    fontFamily: type.semibold,
    letterSpacing: 0.5,
    fontSize: size.h5,
    backgroundColor: 'transparent',
    color: Colors.textPrimary,
    left: Metrics.bottomBtnMargin,
  },
  reportErrBtn:
  {
    fontFamily: type.semibold,
    letterSpacing: 0.5,
    fontSize: size.h5,
    backgroundColor: 'transparent',
    color: Colors.textBlue,
    marginRight: Metrics.bottomBtnMargin,
  },
  forgotText: {
    fontFamily: type.regular,
    letterSpacing: 0.5,
    fontSize: size.h5,
    backgroundColor: 'transparent',
    color: Colors.textThird,
  },
  listHeaderText: {
    fontFamily: type.bold,
    letterSpacing: 0.5,
    backgroundColor: 'transparent',
    color: Colors.textPrimary,
    fontSize: Metrics.listHeaderHeight / 2.0,
  },
  listItemTitleText: {
    fontFamily: type.semibold,
    fontSize: size.h5,
    backgroundColor: 'transparent',
    color: Colors.textThird,
  },
  listItemDescriptionText: {
    fontFamily: type.regular,
    fontSize: size.default,
    backgroundColor: 'transparent',
    color: Colors.textFourth,
  },
};

export default {
  type,
  size,
  style,
};
