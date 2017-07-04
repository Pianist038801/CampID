import { StyleSheet, Platform } from 'react-native';
import { Styles, Fonts, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  topBar: {
    justifyContent: 'center',
    paddingLeft: Metrics.defaultMargin,
    height: Metrics.sidebarItemHeight,
    backgroundColor: Colors.brandPrimary },
  itemBar: {
    justifyContent: 'center',
    height: Metrics.sidebarItemHeight,
  },
  itemText: {
    ...Fonts.style.h4,
    marginLeft: Metrics.defaultMargin,
    color: Colors.textTitle,
  },
  launchText: {
    ...Fonts.style.h5,
    color: Colors.txtYellow,
    marginRight: Metrics.defaultMargin,
  },
  sportsIDLogo: {
    resizeMode: 'contain',
    marginLeft: Metrics.defaultMargin,
    height: Metrics.sidebarItemHeight / 2.5,
    width: Metrics.sidebarItemHeight / 2.5 * 245 / 42,
    justifyContent: 'flex-start',
  },
});
