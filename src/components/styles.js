import { StyleSheet, Platform } from 'react-native';
import { Styles, Fonts, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  imgAvatar: {
    width: Metrics.avatarSize,
    height: Metrics.avatarSize,
    borderRadius: Metrics.avatarSize / 2,
    borderColor: Colors.brandPrimary,
    alignItems: 'center',
    borderWidth: Metrics.avatarSize / 8.0,
    justifyContent: 'center',
  },
  imgInnerAvatar:
  {
    width: Metrics.innerAvatarSize,
    height: Metrics.innerAvatarSize,
    borderRadius: Metrics.innerAvatarSize / 2.0,
    resizeMode: 'stretch',

  },
  imgInnerAvatarView:
  {
    width: Metrics.innerAvatarSize,
    height: Metrics.innerAvatarSize,
    borderRadius: Metrics.innerAvatarSize / 2.0,
  },

  listItemContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.defaultPadding,
  },
  forwardIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: Metrics.defaultPadding,
  },
  checkboxIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemHeaderContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: Metrics.listItemHeight * 0.5,
    backgroundColor: Colors.backgroundSecondary,
    paddingHorizontal: Metrics.defaultPadding,
  },
  todoListItemView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Metrics.defaultPadding,
  },
  taskListItemView: {
    flex: 1,
    paddingLeft: Metrics.defaultPadding,
    paddingRight: Metrics.defaultPadding,
  },
  updatesListItemView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.defaultPadding,
  },
  overviewRowItemContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: Metrics.listItemHeight * 0.5,
    backgroundColor: Colors.brandSecondary,
    paddingHorizontal: Metrics.defaultPadding,
  },
  rowLeftTextStyle: {
    flex: 4,
    alignItems: 'flex-start',
  },
  rowMiddleTextStyle: {
    flex: 3,
    alignItems: 'center',
  },
  rowRightTextStyle: {
    flex: 3,
    alignItems: 'flex-end',
  },
  statusBar: {
    height: Platform.OS === 'ios' ? Metrics.statusBarHeight : 0
  },
});