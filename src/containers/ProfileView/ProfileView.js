import React, { Component } from 'react';
import {
  View,
  Platform,
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

class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Focus0: false,
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

  showActionSheetMenu() {
    this.ActionSheet.show();
  }
  onActionSheetMenu(index) {
    const options = {
      quality: 1.0,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    switch (index) {
      case 0:
        ImagePicker.launchCamera(options, (response) => {
          this.onImagePicker(response);
        });
        break;
      case 1:
        ImagePicker.launchImageLibrary(options, (response) => {
          this.onImagePicker(response);
        });
        break;
      default:
    }
  }
  onImagePicker(response) {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else if (response.uri !== undefined) {
      let source = '';
      if (Platform.OS === 'android') {
        source = { uri: response.uri };
      } else {
        source = { uri: response.uri.replace('file://', ''), isStatic: true };
      }
      ImageResizer.createResizedImage(source.uri, 400, 300, 'JPEG', 80)
        .then((resizedImageUri) => {
          this.props.setAvatarUri(resizedImageUri);
        }).catch((err) => {
          console.log(err);
        }).catch((err) => {
          console.log(err);
        });
    }
  }
  /* source={Images.bkgLogin}*/
  render() {
    return (
      <KeyboardAwareScrollView
        alwaysBounceVertical={false}
        style={{ flex: 1, backgroundColor: Colors.brandPrimary }}
        automaticallyAdjustContentInsets={false}>
        <View style={Styles.fullScreen}>
          {CommonWidgets.renderStatusBar('black')}
          <NavigationBar
            style={Styles.navBarStyle}
            title={CommonWidgets.renderNavBarHeader('My Profile')}
            tintColor={Colors.txtTitle}
            leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.replaceRoute('login'))} />

          <Image
            resizeMode={'stretch'}
            style={Styles.navbarFullScreen}
            source={Images.registerExpBg}>

            {/* -----Avatar---- */}

            <View style={{ flex: 26 }}>
              {CommonWidgets.renderSpacer(168)}

            </View>
            <View style={[{ flex: 25 }, Styles.center]}>
              {CommonWidgets.renderAvatar(this.props.globals.avatarUri, () => this.showActionSheetMenu())}
            </View>
            <View style={{ flex: 14, flexDirection: 'column' }}>
              <View style={[{ flex: 1, flexDirection: 'row' }, Styles.center]}>
                {CommonWidgets.renderNormalButton('0-1', Utils.getNormalBtnBackcolor(this.state.Focus0), () => this.onBtnFocus('0'))}
                {CommonWidgets.renderNormalButton('2-3', Utils.getNormalBtnBackcolor(this.state.Focus1), () => this.onBtnFocus('1'))}
                {CommonWidgets.renderNormalButton('4-5', Utils.getNormalBtnBackcolor(this.state.Focus2), () => this.onBtnFocus('2'))}
                {CommonWidgets.renderNormalButton('6-7', Utils.getNormalBtnBackcolor(this.state.Focus3), () => this.onBtnFocus('3'))}
              </View>
              <View style={[{ flex: 1, flexDirection: 'row' }, Styles.center]}>
                {CommonWidgets.renderNormalButton('8-9', Utils.getNormalBtnBackcolor(this.state.Focus4), () => this.onBtnFocus('4'))}
                {CommonWidgets.renderNormalButton('10+', Utils.getNormalBtnBackcolor(this.state.Focus5), () => this.onBtnFocus('5'))}
              </View>
            </View>
            <View style={{ flex: 26 }} />
            <View style={{ flex: 9, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                {CommonWidgets.renderImgBtn(() => this.props.replaceRoute('registerSkill'), { left: Metrics.bottomBtnMargin }, Images.imgLeftBtn)}
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }} >
                {CommonWidgets.renderImgBtn(() => this.props.replaceRoute('registerDone'), { marginRight: Metrics.bottomBtnMargin }, Images.imgRightBtn)}
              </View>
            </View>
            <View style={{ flex: 5 }} />
          </Image>
          <ActionSheet
            ref={(as) => { this.ActionSheet = as; }}
            options={Constants.IP_BUTTONS}
            cancelButtonIndex={Constants.IP_BUTTONS.length - 1}
            onPress={this.onActionSheetMenu.bind(this)}
            tintColor={Colors.textPrimary} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

ProfileView.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
