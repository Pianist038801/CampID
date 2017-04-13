import React, { Component } from 'react';
import {
  View,
  Platform,
  Image,
  Alert,
} from 'react-native';

import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import I18n from 'react-native-i18n';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';

import NavigationBar from 'react-native-navbar';

import { replaceRoute, popRoute } from '@actions/route';
import { setAvatarUri } from '@actions/globals';
import CommonWidgets from '@components/CommonWidgets';
import ActionSheet from '@components/ActionSheet/';
import { Metrics, Styles, Images, Colors } from '@theme/';
import Utils from '@src/utils';
import Constants from '@src/constants';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athleteFocus: false,
      coachFocus: false,
      administratorFocus: false,
      parentFocus: false,
    };
  }

  onBtnFocus(value) {
    this.setState({ administratorFocus: false, parentFocus: false, athleteFocus: false, coachFocus: false });
    this.setState({ [`${value}Focus`]: true });
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
            title={CommonWidgets.renderNavBarHeader('Christina Smith')}
            tintColor={Colors.txtTitle}
            leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.replaceRoute('login'))}  />

          <Image
            resizeMode={'stretch'}
            style={Styles.navbarFullScreen}
            source={Images.imgSignupBg}>

            {/* -----Avatar---- */}

            <View style={{ flex: 26 }}>
              {CommonWidgets.renderSpacer(160)}
              {CommonWidgets.renderBigText(I18n.t('WELCOME'))}

            </View>
            <View style={[{ flex: 25 }, Styles.center]}>

              {CommonWidgets.renderAvatar(this.props.globals.avatarUri, () => this.showActionSheetMenu())}
            </View>
            <View style={{ flex: 14, flexDirection: 'column' }}>
              <View style={[{ flex: 1, flexDirection: 'row' }, Styles.center]}>
                {CommonWidgets.renderNormalButton(I18n.t('ATHLETE'), Utils.getNormalBtnBackcolor(this.state.athleteFocus), () => this.onBtnFocus('athlete'))}
                {CommonWidgets.renderNormalButton(I18n.t('COACH'), Utils.getNormalBtnBackcolor(this.state.coachFocus), () => this.onBtnFocus('coach'))}
              </View>
              <View style={[{ flex: 1, flexDirection: 'row' }, Styles.center]}>
                {CommonWidgets.renderNormalButton(I18n.t('ADMINISTRATOR'), Utils.getNormalBtnBackcolor(this.state.administratorFocus), () => this.onBtnFocus('administrator'))}
                {CommonWidgets.renderNormalButton(I18n.t('PARENT'), Utils.getNormalBtnBackcolor(this.state.parentFocus), () => this.onBtnFocus('parent'))}
              </View>
            </View>
            <View style={{ flex: 26 }} />
            <View style={{ flex: 9, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                {CommonWidgets.renderImgBtn(() => this.props.replaceRoute('login'), { left: Metrics.bottomBtnMargin }, Images.imgLeftBtn)}
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }} >
                {CommonWidgets.renderImgBtn(() => this.props.replaceRoute('registerSkill'), { marginRight: Metrics.bottomBtnMargin }, Images.imgRightBtn)}
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

Register.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
