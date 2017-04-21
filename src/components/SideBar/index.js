import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeDrawer } from '@actions/drawer';
import { View, Text, Image } from 'react-native';
import { setSpinnerVisible, replaceRoute } from '@actions/globals';
import { Metrics, Styles, Colors, Fonts, Icon, Images } from '@theme/';
import I18n from 'react-native-i18n';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';

class SideBar extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.heavyBorder }} >
        {CommonWidgets.renderStatusBar(Colors.status)}
        <View style={[styles.itemBar, { backgroundColor: Colors.brandPrimary }]}>

          {CommonWidgets.renderTextButton('Christina Smith', styles.itemText, null)}
          {CommonWidgets.renderTextButton('Logged into CampID', styles.itemText, null)}

        </View>
        <View style={[styles.itemBar, { alignItems: 'center',flexDirection: 'row', backgroundColor: 'rgb(47,47,47)' }]}>
          <View style={{flex: 1}}>
            <Image style={styles.sportsIDLogo} source={Images.sportsID} />
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            {CommonWidgets.renderTextButton(I18n.t('LAUNCH_SPORTS_ID'), styles.launchText, null)}
          </View>

        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('EDIT_PROFILE'), styles.itemText, null)}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('CAMP_HISTORY'), styles.itemText, null)}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('FORMS'), styles.itemText, null)}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('NOTIFICATIONS'), styles.itemText, null)}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('SETTINGS'), styles.itemText, null)}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('PRIVACY_POLICY'), styles.itemText, null)}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('TERMS_OF_USE'), styles.itemText, null)}
        </View>
        <View style={styles.itemBar}>
          {CommonWidgets.renderTextButton(I18n.t('CONTACT'), styles.itemText, null)}
        </View>

      </View>
    );
  }
}

SideBar.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  closeDrawer: React.PropTypes.func.isRequired,
  setSpinnerVisible: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    replaceRoute: route => dispatch(replaceRoute(route)),
    closeDrawer: () => dispatch(closeDrawer()),
    setSpinnerVisible: spinnerVisible => dispatch(setSpinnerVisible(spinnerVisible)),
  };
}
function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
