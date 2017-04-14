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
import { Metrics, Styles, Images, Colors, Fonts } from '@theme/';
import Constants from '@src/constants';

class RegisterDone extends Component {
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
            leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.replaceRoute('login'))} />

          <Image
            resizeMode={'stretch'}
            style={Styles.navbarFullScreen}
            source={Images.registerDoneBg}>

            <View style={{ flex: 26 }} />
            <View style={[{ flex: 25 }, Styles.center]}>
              {CommonWidgets.renderAvatar(this.props.globals.avatarUri, () => this.showActionSheetMenu())}
            </View>
            <View style={[{ flex: 0.1, marginTop: -Metrics._real(0) }, Styles.center]}>
              {CommonWidgets.renderText({ ...Fonts.style.h4, ...Fonts.style.semibold }, 'Christina Smith')}
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {CommonWidgets.renderText({ ...Fonts.style.h5, ...Fonts.style.semibold }, 'HS Point Guard ')}
                {CommonWidgets.renderText({ ...Fonts.style.h5, ...Fonts.style.regular }, '| Saint Francis (GA) #1')}
              </View>
            </View>
            <View style={[{ flex: 18 }, Styles.center]}>
              {CommonWidgets.renderMaterialButton(I18n.t('CONTINUE_TO_DASHBOARD'), Colors.brandPrimary, () => this.props.replaceRoute('home'))}
            </View>
            <View style={{ flex: 15 }}>
              {CommonWidgets.renderSpacer(40)}
              {CommonWidgets.renderTextWithMargin(Fonts.style.h3, 'Upgrade')}
              {CommonWidgets.renderTextWithMargin({ ...Fonts.style.h5, ...Fonts.style.regular }, 'Lorem ipsum dolor sit arnet, consectetur adipiscing elit.lla empor feugiat elementumaecenas rhmale.')}
            </View>
            <View style={[{ flex: 18 }, Styles.center]}>
              {CommonWidgets.renderMaterialButton(I18n.t('SUBSCRIBE_TO_CAMPID'), Colors.btnBlue)}
            </View>
            <View style={[{ flex: 6, flexDirection: 'row' }, Styles.center]}>
              <View style={{ flex: 1 }}>
                {CommonWidgets.renderTextButton(I18n.t('NOT_YOUR_ACCOUNT'), Fonts.style.registerBottomBtn, () => Alert.alert('NOT'))}
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }} >
                {CommonWidgets.renderTextButton(I18n.t('REPORT_ERRORS'), Fonts.style.reportErrBtn, () => Alert.alert('NOT'))}
              </View>
            </View>
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

RegisterDone.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    popRoute: () => dispatch(popRoute()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    setAvatarUri: avatarUri => dispatch(setAvatarUri(avatarUri)),
  };
}

function mapStateToProps( state ) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterDone);