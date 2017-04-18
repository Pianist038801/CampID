import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { Styles, Metrics, Images, Colors } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import Utils from '@src/utils'; 

class TabView extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: Metrics.screenWidth }}>
         
      </View>
    );
  } 

}
function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, null)(TabView);
