import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

import { Styles, Metrics, Images, Colors, Fonts } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import Utils from '@src/utils';

class VideoView extends Component {
  render() {
    return (
      <View>
        <View style={styles.container} >
          <View style={styles.rowContainer}>
            <View style={{ flex: 1, alignItems: 'flex-start' }} >
              <Text style={Fonts.style.h3}>
                {I18n.t('VIDEO')}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }} >
              {CommonWidgets.renderIcon(() => Alert.alert('Right'))}
            </View>
          </View>

          <ScrollView horizontal style={{ width: Metrics.screenWidth - Metrics.defaultMargin, height: Metrics.videoClipHeight + Fonts.size.h0 }}>
            {CommonWidgets.renderVideoClip(() => Alert.alert('a'), 's', 'Test')}
            {CommonWidgets.renderVideoClip(() => Alert.alert('a'), 's', 'Test')}
            {CommonWidgets.renderVideoClip(() => Alert.alert('a'), 's', 'Test')}
          </ScrollView>
        </View>
        {CommonWidgets.renderSpacer(6, Colors.textSecondary)}
      </View>
    );
  }
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, null)(VideoView);
