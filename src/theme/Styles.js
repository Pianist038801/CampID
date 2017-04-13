import { Platform } from 'react-native';

import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';


const Styles = {
  textInputStyle: {
    ...Fonts.style.textInput,
    width: Metrics.buttonWidth - Metrics.defaultMargin,
    height: Metrics.textHeight,
    alignSelf: 'center',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  textInputContainerStyle: {
    width: Metrics.buttonWidth,
    borderWidth: 1,
    borderRadius:5,
    paddingHorizontal: 15,
  },
  normalButton: {
    height: Metrics.buttonHeight,
    paddingHorizontal: 25,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: Metrics.buttonWidth,
    height: Metrics.buttonHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  horzCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullScreen: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
  },
  fixedFullScreen: {
    position: 'absolute',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    top: 0,
    left: 0,
  },
  navbarFullScreen:
  {
    position: 'absolute',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight - Metrics.navBarHeight,
    top: Metrics.navBarHeight,
    left: 0,
  },
  listItemContainer: {
    width: Metrics.listItemWidth,
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.borderPrimary,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundSecondary,
    marginBottom: 5,
  },
  navBarStyle: {
    paddingHorizontal: 15,
    alignItems: 'flex-end',
    backgroundColor: Colors.brandPrimary,
    height: Metrics.navBarHeight,
    marginTop: Platform.OS === 'ios' ? -Metrics.statusBarHeight : 0,
  },
  imgLogo: {
    width: Metrics.logoSize,
    height: Metrics.logoSize,
    borderRadius: Metrics.logoSize / 2,
  },
  avatar: {
    width: Metrics.appleSize * 3 / 2,
    height: Metrics.appleSize * 3 / 2,
    borderRadius: Metrics.appleSize * 3 / 4,
  },
  txtLeftMargin: {left: Metrics.screenWidth * 5 / 64.0}
  
};

export default Styles;