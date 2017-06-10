import React, { Component } from 'react';
import {
  View,
  Platform,
  Image,
  Alert,
  TouchableOpacity,
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

import vision from '@components/react-cloud-vision-api';
const cloudVisionKey = 'AIzaSyAQT1NgTVxytlLuv2_A27R-w1avMof0Zxo';

var {ReadImageData} = require('NativeModules');

class Register extends Component {
  constructor(props) {
    super(props);
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
      //console.log(response.data);
      const endURL = `https://vision.googleapis.com/v1/images:annotate?key=${cloudVisionKey}`;
      ImageResizer.createResizedImage(source.uri, 400, 300, 'JPEG', 80)
        .then((resizedImageUri) => {
          this.props.setAvatarUri(resizedImageUri);
          ReadImageData.readImage(resizedImageUri, (imageBase64) => {
            console.log(imageBase64);
          });
          fetch(endURL, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              requests: [
                {
                  image: {

                    content: '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'
                    //content: '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'
                  },
                  features: [
                    {
                      type: 'DOCUMENT_TEXT_DETECTION',
                    },
                  ],
                },
              ],
            }),
          })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
        }).catch((err) => {
          console.log(err);
        }).catch((err) => {
          console.log(err);
        });
    }
  }
  onSetImg = () => {
    const options = {
      quality: 1.0,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      this.onImagePicker(response);
    });
  }
  render() {
    return (
      <KeyboardAwareScrollView
        alwaysBounceVertical={false}
        style={{ flex: 1, backgroundColor: Colors.brandPrimary }}
        automaticallyAdjustContentInsets={false}>
        <View style={[Styles.fullScreen, { flexDirection: 'column' }]}>
          <TouchableOpacity
            style={{ flex: 1 }} onPress={this.onSetImg} >
            <Image resizeMode="stretch" source={{ uri: this.props.globals.avatarUri }} style={{ flex: 1 }} />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
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
