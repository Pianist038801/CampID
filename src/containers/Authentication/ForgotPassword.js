import React, { Component } from 'react';
import {
  View,
  Image,
  Alert,
 } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import I18n from 'react-native-i18n';

import NavigationBar from 'react-native-navbar';

import { replaceRoute, popRoute } from '@actions/route';
import CommonWidgets from '@components/CommonWidgets';

import { Styles, Images, Colors } from '@theme/';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  doReset() {
    Alert.alert('s');
  }

  render() {
    return (
      <KeyboardAwareScrollView
        alwaysBounceVertical={false}
        style={{ flex: 1, backgroundColor: Colors.brandPrimary }}
        automaticallyAdjustContentInsets={false}>
        <View style={Styles.fullScreen}>
          {CommonWidgets.renderStatusBar(Colors.status)}
          <NavigationBar
            style={Styles.navBarStyle}
            title={CommonWidgets.renderNavBarHeader('Reset Password')}
            tintColor={Colors.txtTitle}
            leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.replaceRoute('login'))} />
          <Image
            resizeMode={'stretch'}
            style={Styles.navbarFullScreen}
            source={Images.imgForgotPwdBg} >
            <View style={{ flex: 2 }} />
            <View style={{ alignItems: 'center', flex: 5 }}>
              {CommonWidgets.renderMaterialButton(I18n.t('RESET_THROUGH_WEB'), Colors.brandPrimary, () => this.doReset())}
              {CommonWidgets.renderSpacer(60)}
              {CommonWidgets.renderMaterialButton(I18n.t('RESET_THROUGH_MOBILE'), Colors.brandPrimary, () => this.doReset())}
            </View>
          </Image>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

ForgotPassword.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    popRoute: () => dispatch(popRoute()),
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}

function mapStateToProps(state) {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);