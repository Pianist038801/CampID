import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Image
 } from 'react-native';

import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import I18n from 'react-native-i18n';
import { MKButton } from 'react-native-material-kit';

import { replaceRoute, pushNewRoute } from '@actions/route';
import OverlaySpinner from '@components/OverlaySpinner';
import CommonWidgets from '@components/CommonWidgets';

import { Styles, Images, Colors, Fonts, Metrics } from '@theme/';
import Utils from '@src/utils';
import styles from './styles';

import { setSpinnerVisible } from '@actions/globals';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onTextInputFocus(value) {
    this.setState({ emailFocus: false, passwordFocus: false });
    this.setState({ [`${value}Focus`]: true });
  }

  doLogin() {
    this.props.setSpinnerVisible(true);
    setTimeout(() => {
      this.props.setSpinnerVisible(false);
      this.props.replaceRoute('home');
    }, 500);
  }

  doForgetPassword() {
    this.props.replaceRoute('forgotpwd');
  }

  doRegister() {
    this.props.replaceRoute('register');
  }

  render() {
    return (
      <KeyboardAwareScrollView
        alwaysBounceVertical={false}
        style={{ flex: 1, backgroundColor: Colors.brandThird }}
        automaticallyAdjustContentInsets={false}>
        <View style={Styles.fullScreen}>
          {CommonWidgets.renderStatusBar('transparent')}

          {/* -----LOGO---- */}
          <Image style={styles.logoImage} source={Images.imgLoginLogo} />

          {/* -----Body---- */}
          {CommonWidgets.renderSpacer(65)}
          <Text style={[Fonts.style.buttonText, { marginLeft: Metrics.defaultMargin, color: Colors.textPrimary }]}>
            {I18n.t('LOGIN_WITH_SPORTS')}
          </Text>

          <View style={styles.bodyContainer}>
            {CommonWidgets.renderSpacer(38)}
            <View
              style={[Styles.textInputContainerStyle,
              { borderColor: Utils.getTextInputBorderColor(this.state.emailFocus) }]}>
              <TextInput
                style={Styles.textInputStyle}
                underlineColorAndroid={'transparent'}
                placeholder={I18n.t('USERNAME')}
                placeholderTextColor={Colors.textPlaceholder}
                multiline={false}
                onChangeText={text => this.setState({ email: text })}
                keyboardType={'email-address'}
                returnKeyType={'next'}
                onSubmitEditing={() => this.loginpwd.focus()}
                onFocus={() => this.onTextInputFocus('email')} />
            </View>

            {CommonWidgets.renderSpacer(29)}

            <View
              style={[Styles.textInputContainerStyle,
              { borderColor: Utils.getTextInputBorderColor(this.state.passwordFocus) }]}>
              <TextInput
                ref={(c) => { this.loginpwd = c; }}
                style={Styles.textInputStyle}
                underlineColorAndroid={'transparent'}
                placeholder={I18n.t('PASSWORD')}
                placeholderTextColor={Colors.textPlaceholder}
                multiline={false}
                secureTextEntry
                onChangeText={text => this.setState({ password: text })}
                returnKeyType={'go'}
                onSubmitEditing={() => this.doLogin()}
                onFocus={() => this.onTextInputFocus('password')} />
            </View>

            {CommonWidgets.renderSpacer(52)}
            {CommonWidgets.renderMaterialButton(I18n.t('LOGIN'), Colors.brandPrimary, () => this.doLogin())}
            {CommonWidgets.renderSpacer(35)}
            {CommonWidgets.renderTextButton(I18n.t('FORGOT_YOUR'), Fonts.style.forgotText, () => this.doForgetPassword())}
          </View>

          {/* -----BottomArea---- */}
          <View style={[styles.bottomAreaLogin, { alignSelf: 'flex-end' }]}>
            {CommonWidgets.renderDivider()}
            <Text style={[Fonts.style._h4, { color: Colors.textPrimary }]}>
              {I18n.t('DONOT_HAVE_ACCOUNT')}
            </Text>
            <Text style={[Fonts.style._h4, { color: Colors.textPrimary }]}>
              {I18n.t('YOU_MUST_SIGN')}
            </Text>
            {CommonWidgets.renderTextButton(I18n.t('SIGN_UP'), Fonts.style.hyperButtonText, () => this.doRegister())}
          </View>
          <OverlaySpinner visible={this.props.globals.spinnerVisible} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

Login.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  pushNewRoute: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  setSpinnerVisible: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    replaceRoute: route => dispatch(replaceRoute(route)),
    setSpinnerVisible: spinnerVisible => dispatch(setSpinnerVisible(spinnerVisible)),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
