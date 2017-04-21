import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const bottomMargin = 24;
const sHeight = width < height ? height : width;
const sWidth = width < height ? width : height;
const dMargin = sWidth * (48 / 640.0);
const metrics = {
  textLeftMargin: sWidth * (5 / 64.0),
  bottomBtnMargin: sWidth * (2.5 / 64.0),
  _real: count => (sHeight * (count / 1136.0)),
  searchBarHeight: 30,
  screenWidth: sWidth,
  screenHeight: sHeight,
  navBarHeight: 64,
  tabBarHeight: 50,
  defaultMargin: dMargin,
  defaultPadding: dMargin,
  listItemHeight: sHeight / 9,
  listHeaderHeight: 60,
  appleSize: sHeight / 13,
  contentHeight: sHeight - 110,
  listItemWidth: sWidth - (dMargin * 2),
  buttonWidth: sWidth - (dMargin * 2),
  buttonHeight: sHeight * (62 / 1136.0),
  textHeight: sHeight * (64 / 1136.0),
  logoSize: width / 3,
  footerHeight: width / 7,
  androidMarginBottom: bottomMargin,
  statusBarHeight: 20,
  circleBtnSize: 50,
  avatarSize: Math.min(width * (177 / 640.0), height * (177 / 1136.0)),
  innerAvatarSize: Math.min(width * (180 / 640.0), height * (180 / 1136.0)) * (3 / 4.0),
  iconSizeSmall: 15,
  dashboardImageHeight: 157,
  priceViewWidth: 70,
  listImgHeight: sHeight * (160 / 1136.0),
  rateBarWidth: 149,
  screenInnerWidth: sWidth - dMargin,
  rateBtnWidth: (sWidth - dMargin) / 10,
  rateBarHeight: 96,
  videoClipWidth: 200,
  videoClipHeight: 150,
  aboutAvatarSize: 80,
  reviewAvatarSize: 50,
  dashboardGap: 20,
  scheduleTabMargin: 40,
  sidebarItemHeight: 65,
};

export default metrics;
