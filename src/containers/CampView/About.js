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
import AboutCell from '@components/CampViewItem/AboutCell';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={Fonts.style.h4}>Work with some of the top basketball coaches in the world. They are ready for you!</Text>
        {CommonWidgets.renderSpacer(30)}
        <Text style={Fonts.style.h3}>Camp Instructors</Text>

        <ScrollView>
          <AboutCell key={0} />
          <AboutCell key={1} />
          <AboutCell key={2} />
        </ScrollView>
      </View>
    );
  }
}

About.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(About);
