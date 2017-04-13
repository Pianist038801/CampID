import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
  Image,
  Alert
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
import CommonWidgets from '@components/CommonWidgets';
import ActionSheet from '@components/ActionSheet/';
import { Metrics, Styles, Images, Colors, Fonts } from '@theme/';
import Utils from '@src/utils';
import Constants from '@src/constants';
import styles from './styles';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athleteFocus: false,
      coachFocus: false,
      administratorFocus: false,
      parentFocus: false
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
          this.setState({
            avatarUri: resizedImageUri,
          });
        }).catch((err) => {
          console.log(err);
        });
    }
  }
  /*source={Images.bkgLogin}*/
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
            leftButton={CommonWidgets.renderNavBarLeftButton(()=>this.props.replaceRoute('login'))}/>
          
          <Image
            resizeMode={'stretch'}
            style={Styles.navbarFullScreen}
            source = {Images.registerDoneBg}>
          
          {/* -----Avatar---- */}
          
            <View style={{flex: 26}}>              
            </View>
            <View style={[{flex: 25},Styles.center]}>
              {CommonWidgets.renderAvatar()}
            </View>
            <View style={[{flex: 0.1,  marginTop: -Metrics._real(0)}, Styles.center]}>
              {CommonWidgets.renderText([Fonts.style._h3],'Christina Smith')}
              <View style={{flexDirection: 'row', justifyContent: 'center'}}> 
                {CommonWidgets.renderText([Fonts.style._h4_b,{color: Colors.textPrimary}],'HS Point Guard ')}
                {CommonWidgets.renderText( Fonts.style._h4,'| Saint Francis (GA) #1')}
              </View>
            </View>
            <View style={[{flex: 18}, Styles.center]}>
              {CommonWidgets.renderMaterialButton(I18n.t("CONTINUE_TO_DASHBOARD"))}
            </View>
            <View style={{flex: 15}}>
              {CommonWidgets.renderSpacer(40)}
              {CommonWidgets.renderTextWithMargin(Fonts.style._h3,'Upgrade')}
              {CommonWidgets.renderTextWithMargin(Fonts.style._h4,"Lorem ipsum dolor sit arnet, consectetur adipiscing elit.lla empor feugiat elementumaecenas rhmale.")}
            </View>
            <View style={[{flex: 18}, Styles.center]}>
              {CommonWidgets.renderMaterialButton(I18n.t("SUBSCRIBE_TO_CAMPID"),Colors.btnBlue)}
            </View>
            <View style={[{flex: 6, flexDirection: 'row'},Styles.center]}>
              <View style={{flex:1}}>
                {CommonWidgets.renderTextButton(I18n.t("NOT_YOUR_ACCOUNT"), Fonts.style.registerBottomBtn,()=>Alert.alert('NOT'))}
              </View>
              <View style={{flex:1, alignItems:'flex-end'}} >
                {CommonWidgets.renderTextButton(I18n.t("REPORT_ERRORS"), Fonts.style.reportErrBtn,()=>Alert.alert('NOT'))}
                
              </View>
            </View>
        </Image>
        <ActionSheet
            ref={(as) => { this.ActionSheet = as; }}
            options={Constants.IP_BUTTONS}
            cancelButtonIndex={Constants.IP_BUTTONS.length - 1}
            onPress={this.onActionSheetMenu.bind(this)}
            tintColor={Colors.textPrimary}/>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

Register.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    popRoute: ()=>dispatch(popRoute()),
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}

function mapStateToProps(state) {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);