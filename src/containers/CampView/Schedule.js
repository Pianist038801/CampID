import { Text, View, Platform, Image, ScrollView, Alert } from 'react-native';
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

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Focus0: true,
      Focus1: false,
      Focus2: false,
      Focus3: false,
      Focus4: false,
      Focus5: false,
    };
  }

  onBtnFocus(value) {
    this.setState({ Focus0: false, Focus1: false, Focus2: false, Focus3: false, Focus4: false, Focus5: false });
    this.setState({ [`Focus${value}`]: true });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {CommonWidgets.renderStatusBar(Colors.brandPrimary) }
       
        <View style={Styles.container}>
          <View style={Styles.rowContainer}>
            { CommonWidgets.renderScheduleTabItem(I18n.t('MON'), this.state.Focus0, () => this.onBtnFocus('0')) }
            { CommonWidgets.renderScheduleTabItem(I18n.t('TUE'), this.state.Focus1, () => this.onBtnFocus('1')) }
            { CommonWidgets.renderScheduleTabItem(I18n.t('WED'), this.state.Focus2, () => this.onBtnFocus('2')) }
            { CommonWidgets.renderScheduleTabItem(I18n.t('THU'), this.state.Focus3, () => this.onBtnFocus('3')) }
            { CommonWidgets.renderScheduleTabItem(I18n.t('FRI'), this.state.Focus4, () => this.onBtnFocus('4')) }
            { CommonWidgets.renderScheduleTabItem(I18n.t('SAT'), this.state.Focus5, () => this.onBtnFocus('5')) }
          </View>
          <ScrollView>
            { CommonWidgets.renderScheduleItem('asdfasdfds', 'adfasdfasdfasdf')}
            { CommonWidgets.renderScheduleItem('aaaa', 'adfasdfasdfasdf')}
            { CommonWidgets.renderScheduleItem('ss', 'adfasdfasdfasdf')}
            { CommonWidgets.renderScheduleItem('asdfasdfds', 'adfasdfasdfasdf')}
            { CommonWidgets.renderScheduleItem('asdfasdfds', 'adfasdfasdfasdf')}
          </ScrollView>
        </View>
      </View>
    );
  }
}

Schedule.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
