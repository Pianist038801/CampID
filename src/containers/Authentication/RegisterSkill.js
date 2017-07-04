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

class RegisterSkill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beginnerFocus: false,
      noviceFocus: false,
      intermediateFocus: false,
      advancedFocus: false,
      eliteFocus: false,
    };
  }

  onBtnFocus(value) {
    this.setState({ beginnerFocus: false, noviceFocus: false, intermediateFocus: false, advancedFocus: false, eliteFocus: false });
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
            title={CommonWidgets.renderNavBarHeader('Christina Smith')}
            tintColor={Colors.txtTitle}
            leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.replaceRoute('login'))}  />

          <Image
            resizeMode={'stretch'}
            style={Styles.navbarFullScreen}
            source= {Images.registerSkillBg}>

            {/* -----Avatar---- */}

            <View style={{ flex: 26 }}>
              {CommonWidgets.renderSpacer(168)}

            </View>
            <View style={[{ flex: 25 }, Styles.center]}>
              {CommonWidgets.renderAvatar(this.props.globals.avatarUri, () => this.showActionSheetMenu())}
            </View>
            <View style={{ flex: 14, flexDirection: 'column' }}>
              <View style={[{ flex: 1, flexDirection: 'row' }, Styles.center]}>
                {CommonWidgets.renderNormalButton(I18n.t('BEGINNER'), Utils.getNormalBtnBackcolor(this.state.beginnerFocus), () => this.onBtnFocus('beginner'))}
                {CommonWidgets.renderNormalButton(I18n.t('NOVICE'), Utils.getNormalBtnBackcolor(this.state.noviceFocus), () => this.onBtnFocus('novice'))}
                {CommonWidgets.renderNormalButton(I18n.t('INTERMEDIATE'), Utils.getNormalBtnBackcolor(this.state.intermediateFocus), () => this.onBtnFocus('intermediate'))}
              </View>
              <View style={[{ flex: 1, flexDirection: 'row' }, Styles.center]}>
                 {CommonWidgets.renderNormalButton(I18n.t('ADVANCED'), Utils.getNormalBtnBackcolor(this.state.advancedFocus), () => this.onBtnFocus('advanced'))}
                 {CommonWidgets.renderNormalButton(I18n.t('ELITE'), Utils.getNormalBtnBackcolor(this.state.eliteFocus), () => this.onBtnFocus('elite'))}
               </View>
            </View>
            <View style={{ flex: 26 }} />
            <View style={{ flex: 9, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                {CommonWidgets.renderImgBtn(() => this.props.replaceRoute('register'), { left: Metrics.bottomBtnMargin }, Images.imgLeftBtn)}
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }} >
                {CommonWidgets.renderImgBtn(() => this.props.replaceRoute('registerExp'), { marginRight: Metrics.bottomBtnMargin }, Images.imgRightBtn)}
              </View>
            </View>
            <View style={{ flex: 5 }} />
          </Image>
          <ActionSheet
          ref={(as) => { this.ActionSheet = as; }}
          options={Constants.IP_BUTTONS}
          cancelButtonIndex={Constants.IP_BUTTONS.length - 1}
          onPress={this.onActionSheetMenu.bind(this)}
          tintColor={Colors.textPrimary}  />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

RegisterSkill.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSkill);
