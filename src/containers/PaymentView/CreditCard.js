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

class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holderFocus: false,
      numberFocus: false,
      expFocus: false,
      zipFocus: false,
      cvvFocus: false,
      holder: '',
      number: '',
      exp: '',
      zip: '',
      cvv: '',
    };
  }

  onTextInputFocus(value) {
    this.setState({ holderFocus: false, numberFocus: false, expFocus: false, zipFocus: false, cvvFocus: false });
    this.setState({ [`${value}Focus`]: true });
  }

  render() {
    return (
      <KeyboardAwareScrollView
        alwaysBounceVertical={false}
        style={{ flex: 1, backgroundColor: Colors.backgroundSecondary }}
        automaticallyAdjustContentInsets={false}>
        <View style={Styles.fullScreen}>

          <View style={Styles.container}>
            {CommonWidgets.renderSpacer(35)}
            <View
              style={[Styles.paymentTextInputContainerStyle,
              { borderColor: Utils.getTextInputBorderColor(this.state.holderFocus) }]}>
              <Image source={Images.person} />
              <TextInput
                style={Styles.paymentTextInputStyle}
                underlineColorAndroid={'transparent'}
                placeholder={I18n.t('CARD_HOLDER_NAME')}
                placeholderTextColor={Colors.textPlaceholder}
                multiline={false}
                onChangeText={text => this.setState({ holder: text })}
                returnKeyType={'next'}
                onSubmitEditing={() => this.numberInput.focus()}
                onFocus={() => this.onTextInputFocus('holder')} />
            </View>

            {CommonWidgets.renderSpacer(55)}
            <View
              style={[Styles.paymentTextInputContainerStyle,
              { borderColor: Utils.getTextInputBorderColor(this.state.numberFocus) }]}>
              <Image source={Images.card} />
              <TextInput
                style={Styles.paymentTextInputStyle}
                ref={(c) => { this.numberInput = c; }}
                underlineColorAndroid={'transparent'}
                placeholder={I18n.t('CARD_NUMBER')}
                placeholderTextColor={Colors.textPlaceholder}
                multiline={false}
                onChangeText={text => this.setState({ number: text })}
                returnKeyType={'next'}
                onSubmitEditing={() => this.expInput.focus()}
                onFocus={() => this.onTextInputFocus('number')} />
            </View>
            {CommonWidgets.renderSpacer(50)}

            <View style={{ flexDirection: 'row' }}>
              <View
                style={[Styles.paymentTextInputContainerStyle,
                { flex: 1, borderColor: Utils.getTextInputBorderColor(this.state.expFocus) }]}>
                <Image source={Images.calendar} />
                <TextInput
                  style={Styles.paymentTextInputStyle}
                  ref={(c) => { this.expInput = c; }}
                  underlineColorAndroid={'transparent'}
                  placeholder={I18n.t('EXP')}
                  placeholderTextColor={Colors.textPlaceholder}
                  multiline={false}
                  onChangeText={text => this.setState({ exp: text })}
                  returnKeyType={'next'}
                  onSubmitEditing={() => this.zipInput.focus()}
                  onFocus={() => this.onTextInputFocus('exp')} />
              </View>

              <View
                style={[Styles.paymentTextInputContainerStyle,
                { flex: 1, borderColor: Utils.getTextInputBorderColor(this.state.zipFocus) }]}> 
                <TextInput
                  style={Styles.paymentTextInputStyle}
                  ref={(c) => { this.zipInput = c; }}
                  underlineColorAndroid={'transparent'}
                  placeholder={I18n.t('ZIP_CODE')}
                  placeholderTextColor={Colors.textPlaceholder}
                  multiline={false}
                  onChangeText={text => this.setState({ zip: text })}
                  returnKeyType={'next'}
                  onSubmitEditing={() => this.cvvInput.focus()}
                  onFocus={() => this.onTextInputFocus('zip')} />
              </View>

              <View
                style={[Styles.paymentTextInputContainerStyle,
                { flex: 1, borderColor: Utils.getTextInputBorderColor(this.state.cvvFocus) }]}>
                <TextInput
                  style={Styles.paymentTextInputStyle}
                  ref={(c) => { this.cvvInput = c; }}
                  underlineColorAndroid={'transparent'}
                  placeholder={I18n.t('CVV')}
                  placeholderTextColor={Colors.textPlaceholder}
                  multiline={false}
                  onChangeText={text => this.setState({ cvv: text })}
                  
                  onSubmitEditing={() => {}}
                  onFocus={() => this.onTextInputFocus('cvv')} />
              </View>
            </View>
            {CommonWidgets.renderSpacer(180)}
            <View style={{ alignItems: 'center' }}>
              {CommonWidgets.renderMaterialButton(I18n.t('SUBMIT'), Colors.btnDisabled, null)}
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

CreditCard.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
};

CreditCard.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CreditCard);
