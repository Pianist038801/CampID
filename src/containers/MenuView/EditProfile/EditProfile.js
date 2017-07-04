import { Text, View, Platform, Image, ScrollView } from 'react-native';
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
class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      athleteFocus: false,
      coachFocus: false,
      administratorFocus: false,
      parentFocus: false,
      beginnerFocus: false,
      noviceFocus: false,
      intermediateFocus: false,
      advancedFocus: false,
      eliteFocus: false,
    };
  }

  onSkillFocus(value) {
    this.setState({ beginnerFocus: false, noviceFocus: false, intermediateFocus: false, advancedFocus: false, eliteFocus: false });
    this.setState({ [`${value}Focus`]: true });
  }

  onAccountFocus(value) {
    this.setState({ administratorFocus: false, parentFocus: false, athleteFocus: false, coachFocus: false });
    this.setState({ [`${value}Focus`]: true });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {CommonWidgets.renderStatusBar(Colors.brandPrimary) }
        <NavigationBar
          style={Styles.navBarStyle}
          title={CommonWidgets.renderNavBarHeader(I18n.t('EDIT_PROFILE'))}
          tintColor={Colors.brandSecondary}
          leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.popRoute())}
          rightButton={CommonWidgets.renderNavBarLeftButton(() => this.props.openDrawer(), 'menu')} />
        {CommonWidgets.renderSpacer(30)}
        <View style={{ height: Metrics._real(500) }}>
          <ScrollView>
            <View style={[Styles.container, { flexDirection: 'row' }]} >
              <View style={{ width: 100 }}>
                {CommonWidgets.renderAvatar(Images.rateBar, null, 1)}
              </View>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={styles.profileRow}>
                  <Text style={styles.normalText}>{I18n.t('NAME')}</Text>
                  <Text style={styles.normalBrandText}>Christina Smith</Text>
                </View>
                <View style={styles.profileRow}>
                  <Text style={styles.normalText}>{I18n.t('LEVEL')}</Text>
                  <Text style={styles.normalBrandText}>Christina Smith</Text>
                </View>
                <View style={styles.profileRow}>
                  <Text style={styles.normalText}>{I18n.t('SCHOOL')}</Text>
                  <Text style={styles.normalBrandText}>Christina Smith</Text>
                </View>
                <View style={styles.profileRow}>
                  <Text style={styles.normalText}>{I18n.t('SPORTS')}</Text>
                  <View>
                    <Text style={styles.normalBrandText}>Christina Smith</Text>
                    <Text style={styles.normalBrandText}>Christina Smith</Text>
                  </View>
                </View>
                <View style={styles.profileRow}>
                  <Text style={styles.normalText}>{I18n.t('NUMBERS')}</Text>
                  <Text style={styles.normalBrandText}>Christina Smith</Text>
                </View>
                <View style={styles.profileRow}>
                  <Text style={styles.normalText}>{I18n.t('HEIGHT')}</Text>
                  <Text style={styles.normalBrandText}>Christina Smith</Text>
                </View>
                <View style={styles.profileRow}>
                  <Text style={styles.normalText}>{I18n.t('WEIGHT')}</Text>
                  <Text style={styles.normalBrandText}>Christina Smith</Text>
                </View>
                <View style={styles.profileRow}>
                  <Text style={styles.normalText}>{I18n.t('LOCATION')}</Text>
                  <Text style={styles.normalBrandText}>Christina Smith</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        {CommonWidgets.renderSpacer(10, Colors.divider)}
        <View style={Styles.container} >
          {CommonWidgets.renderSpacer(30)}
          <Text style={styles.normalText}>
            {I18n.t('ACCOUNT_TYPE')}
          </Text>
          {CommonWidgets.renderSpacer(20)}
          <View style={{ flexDirection: 'row' }}>
            {CommonWidgets.renderNormalButton(I18n.t('ATHLETE'), Utils.getNormalBtnBackcolor(this.state.athleteFocus), () => this.onAccountFocus('athlete'), styles.btnText)}
            {CommonWidgets.renderNormalButton(I18n.t('COACH'), Utils.getNormalBtnBackcolor(this.state.coachFocus), () => this.onAccountFocus('coach'), styles.btnText)}
            {CommonWidgets.renderNormalButton(I18n.t('ADMINISTRATOR'), Utils.getNormalBtnBackcolor(this.state.administratorFocus), () => this.onAccountFocus('administrator'), styles.btnText)}
          </View>
          {CommonWidgets.renderSpacer(30)}
          <View style={{ flexDirection: 'row' }}>
            {CommonWidgets.renderNormalButton(I18n.t('PARENT'), Utils.getNormalBtnBackcolor(this.state.parentFocus), () => this.onAccountFocus('parent'), styles.btnText)}
          </View>
          {CommonWidgets.renderSpacer(30)}
          <Text style={styles.normalText}>
            {I18n.t('SKILL_LEVEL')}
          </Text>
          {CommonWidgets.renderSpacer(20)}
 
          <View style={{ flexDirection: 'row' }}>
            {CommonWidgets.renderNormalButton(I18n.t('BEGINNER'), Utils.getNormalBtnBackcolor(this.state.beginnerFocus), () => this.onSkillFocus('beginner'), styles.btnText)}
            {CommonWidgets.renderNormalButton(I18n.t('NOVICE'), Utils.getNormalBtnBackcolor(this.state.noviceFocus), () => this.onSkillFocus('novice'), styles.btnText)}
            {CommonWidgets.renderNormalButton(I18n.t('INTERMEDIATE'), Utils.getNormalBtnBackcolor(this.state.intermediateFocus), () => this.onSkillFocus('intermediate'), styles.btnText)}
          </View>
          {CommonWidgets.renderSpacer(30)}
          <View style={{ flexDirection: 'row' }}>
            {CommonWidgets.renderNormalButton(I18n.t('ADVANCED'), Utils.getNormalBtnBackcolor(this.state.advancedFocus), () => this.onSkillFocus('advanced'), styles.btnText)}
            {CommonWidgets.renderNormalButton(I18n.t('ELITE'),  Utils.getNormalBtnBackcolor(this.state.eliteFocus), () => this.onSkillFocus('elite'), styles.btnText)}
          </View>
        </View>
      </View>
    );
  }
}

EditProfile.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
