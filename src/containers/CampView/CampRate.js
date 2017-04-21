import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from 'react-native-i18n';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import { MKButton } from 'react-native-material-kit';

import NavigationBar from 'react-native-navbar';

import { replaceRoute, popRoute } from '@actions/route';
import { setAvatarUri } from '@actions/globals';
import CommonWidgets from '@components/CommonWidgets';
import ActionSheet from '@components/ActionSheet/';
import { Metrics, Styles, Images, Colors, Fonts } from '@theme/';
import Utils from '@src/utils';
import Constants from '@src/constants';
import styles from './styles';

class CampRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Focus0: false,
      Focus1: false,
      Focus2: false,
      Focus3: false,
      Focus4: false,
      Focus5: false,
      Focus6: false,
      Focus7: false,
      Focus8: false,
      Focus9: false,
    } 
  }

  onBtnFocus(value) {
    let i;
    for (i = 0; i <= value; i++) { this.setState({ [`Focus${i}`]: true }); }
    for (i = value + 1; i < 10; i++) { this.setState({ [`Focus${i}`]: false }); }
  }

  /* source={Images.bkgLogin}*/
  render() {
    return (
      <KeyboardAwareScrollView
        alwaysBounceVertical={false}
        style={{ flex: 1, backgroundColor: Colors.backgroundSecondary }}
        automaticallyAdjustContentInsets={false}>
        <View style={Styles.fullScreen}>
          {CommonWidgets.renderStatusBar('black')}
          <NavigationBar
            style={Styles.navBarStyle}
            title={CommonWidgets.renderNavBarHeader(I18n.t('RATE_CAMP'))}
            tintColor={Colors.txtTitle}
            leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.popRoute())} />

          <View style={Styles.container}>
            {CommonWidgets.renderSpacer(15)}
            <Text style={Fonts.style.h3}>{this.props.name}</Text>
            {CommonWidgets.renderSpacer(15)}
            <View style={Styles.rowContainer}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((curValue, index) => CommonWidgets.renderRateBtn(curValue.toString(), this.state[`Focus${index}`], () => this.onBtnFocus(index), Metrics.rateBtnWidth, index), this) }
            </View>
            {CommonWidgets.renderSpacer(5)}
            <Text style={{ ...Fonts.style.h5, color: Colors.brandPrimary }}>
              Rate from 1-10
            </Text>
            {CommonWidgets.renderSpacer(25)}
            <View
              style={[Styles.multitextInputContainerStyle,
              { borderColor: Utils.getTextInputBorderColor(this.state.passwordFocus) }]}>
              <TextInput
                ref={(c) => { this.loginpwd = c; }}
                style={Styles.multitextInputStyle}
                underlineColorAndroid={'transparent'}
                placeholder="Write your review"
                placeholderTextColor={Colors.textPlaceholder}
                multiline
                onChangeText={text => this.setState({ password: text })}
                 />
            </View>
            {CommonWidgets.renderSpacer(130)}
            <View style={Styles.center}>
              {CommonWidgets.renderMaterialButton(I18n.t('SUBMIT'))}
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

CampRate.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
};

CampRate.defaultProps = {
  name: 'All American Skills Development Camp',
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    popRoute: () => dispatch(popRoute()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    setAvatarUri: avatarUri => dispatch(setAvatarUri(avatarUri)),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(CampRate);
