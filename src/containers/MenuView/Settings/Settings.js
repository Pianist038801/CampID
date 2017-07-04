import { Text, View, Platform, Image, ScrollView, ListView } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationBar from 'react-native-navbar';

import { setHomeTab } from '@actions/globals';
import { openDrawer } from '@actions/drawer';
import { replaceRoute, pushNewRoute, popRoute } from '@actions/route';

import Constants from '@src/constants';
import { Metrics, Styles, Colors, Fonts, Icon, Images } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import DashboardItem from '@components/DashboardItem';
import Utils from '@src/utils';

class Settings extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {CommonWidgets.renderStatusBar(Colors.brandPrimary) }
        <NavigationBar
          style={Styles.navBarStyle}
          title={CommonWidgets.renderNavBarHeader(I18n.t('SETTINGS'))}
          tintColor={Colors.brandSecondary}
          leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.popRoute())}
          rightButton={CommonWidgets.renderNavBarLeftButton(() => this.props.openDrawer(), 'menu')} />
        <View style={[styles.rowView, { flexDirection: 'row' }]}>
          <Text style={styles.title}>
            {I18n.t('CHANGE_PASSWORD')}
          </Text>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text style={[styles.redText, {marginRight: 5}]}>
              xxxxxxxxxx{' '}
            </Text>
            {CommonWidgets.renderIcon(null,'angle-right')}
          </View>
        </View>
        <View style={[styles.rowView, { flexDirection: 'row' }]}>
          <Text style={styles.title}>
            {I18n.t('EMAIL_ADDRESS')}
          </Text>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text style={[styles.redText, {marginRight: 5}]}>
              jamesjin@gmail.com
            </Text>
            {CommonWidgets.renderIcon(null,'angle-right')}
          </View>
        </View>
        <View style={[styles.rowView, { flexDirection: 'column' }]}>
          <Text style={styles.title}>
            {I18n.t('PRIVACY_SETTINGS')}
          </Text>
          <Text style={styles.redText}>
            {I18n.t('WHO_CAN_VIEW_YOUR_PROFILE')}
          </Text>
          <Text style={styles.grayText}>
            {I18n.t('EVERYONE')}
          </Text>
        </View>

        <View style={[styles.rowView, { flexDirection: 'column' }]}>
          <Text style={styles.redText}>
            {I18n.t('WHO_CAN_SEE_YOU_ATTEND_A_CAMP')}
          </Text>
          <Text style={styles.grayText}>
            {I18n.t('EVERYONE')}
          </Text>
        </View>

        <View style={[styles.rowView, { flexDirection: 'column' }]}>
          <Text style={styles.redText}>
            {I18n.t('WHO_CAN_CONTACT_YOU')}
          </Text>
          <Text style={styles.grayText}>
            {I18n.t('ONLY_MY_FRIENDS')}
          </Text>
        </View>
      </View>
    );
  }
}

Settings.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  setHomeTab: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
  pushNewRoute: React.PropTypes.func.isRequired,
  openDrawer: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setHomeTab: homeTab => dispatch(setHomeTab(homeTab)),
    openDrawer: () => dispatch(openDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    popRoute: () => dispatch(popRoute()),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
