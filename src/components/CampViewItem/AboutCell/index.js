import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

import { Styles, Metrics, Images, Colors, Fonts } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import Utils from '@src/utils';

import { Avatar } from 'react-native-elements';

class AboutCell extends Component {
  render() {
    return (
      <View style={[styles.container, Styles.rowContainer]}>
        <Avatar source={{ uri: this.props.imgPath }} />
        <View style={{ flex: 1 }}>
          <Text style={Fonts.h4, { color: Colors.brandPrimary }}>{this.props.name}</Text>
          <Text style={Fonts.h4, { color: Colors.textPrimary }}>{this.props.job}</Text>
          <Text style={Fonts.h4, { color: Colors.textPrimary }}>{this.props.school}</Text>
        </View>
      </View>
    );
  }
}

AboutCell.propTypes = {
  imgPath: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  job: React.PropTypes.string.isRequired,
  school: React.PropTypes.string.isRequired,
};

AboutCell.defaultProps = {
  imgPath: "Women's Basketball",
  name: 'All American',
  job: "Head-Coach: Women's Basketball",
  school: 'Washington University',
};


function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, null)(AboutCell);
