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

class PayPal extends Component {
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
    };
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
      </KeyboardAwareScrollView>
    );
  }
}

PayPal.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
};

PayPal.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PayPal);
