import { Text, View, Platform, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationBar from 'react-native-navbar';

import { setHomeTab } from '@actions/globals';
import { openDrawer } from '@actions/drawer';
import { replaceRoute } from '@actions/route';

import Constants from '@src/constants';
import { Metrics, Styles, Colors, Fonts, Icon } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import InfoView from '@components/CampViewItem/InfoView';
import VideoView from '@components/CampViewItem/VideoView';
import TabView from '@components/CampViewItem/TabView';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

class CampView extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {CommonWidgets.renderStatusBar(Colors.brandPrimary) }
        <NavigationBar
          style={Styles.navBarStyle}
          title={CommonWidgets.renderNavBarHeader(I18n.t('CAMPID_DASHBOARD'))}
          tintColor={Colors.brandSecondary}
          leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.openDrawer(), 'menu')}
          rightButton={CommonWidgets.renderNavBarLeftButton(() => this.props.replaceRoute('login'), 'search')} />

        <ScrollView>
          <InfoView />
          <VideoView />
          <ScrollableTabView renderTabBar={() => <DefaultTabBar />}>
            <Text tabLabel='Tab #1'>My</Text>
            <Text tabLabel='Tab #2'>favorite</Text>
            <Text tabLabel='Tab #3'>project</Text>
          </ScrollableTabView>
        </ScrollView>
      </View>
    );
  }
}

CampView.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  setHomeTab: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  openDrawer: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setHomeTab: homeTab => dispatch(setHomeTab(homeTab)),
    openDrawer: () => dispatch(openDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}
export default connect(mapStateToProps, mapDispatchToProps)(CampView);
