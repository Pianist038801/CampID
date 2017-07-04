import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

import { Styles, Metrics, Images, Colors, Fonts } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import Utils from '@src/utils';

import { Avatar } from 'react-native-elements';

class ReviewCell extends Component {
  render() {
    return (
      <View style={{flexDirection: 'column' }}>
        <View style={[styles.container, Styles.rowContainer, { marginVertical: 10 }]}>
          <View style={Styles.center}>
            {CommonWidgets.renderSizedAvatar(this.props.imgPath, null, Metrics.reviewAvatarSize)}
          </View>

          <View style={{ width: 20 }} />

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ ...Fonts.style.h6, color: Colors.textPrimary }}>{this.props.name}</Text>
            <View style={{ ...Styles.rowContainer }}>
              <View>
                <Text style={{ ...Fonts.style.h6, color: Colors.textSecondary }}>{this.props.job}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ ...Fonts.style.h6, alignSelf: 'flex-end', color: Colors.textSecondary }}>{this.props.date}</Text>
              </View>
            </View>
          </View>

        </View>

        <View style={[styles.container, Styles.rowContainer, { marginVertical: 10 }]}>
          <Text style={{ ...Fonts.style.h6, color: Colors.textSecondary }}>
            {this.props.comment}
          </Text>
        </View>
      </View>
    );
  }
}

ReviewCell.propTypes = {
  imgPath: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  job: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  comment: React.PropTypes.string.isRequired,
};

ReviewCell.defaultProps = {
  imgPath: 'https://facebook.github.io/react/img/logo_og.png',
  name: 'All American',
  job: "Head-Coach: Women's Basketball",
  date: '3/25/17',
  comment: 'This is review.This is review.This is review.This is review.This is review.This is review.This is review.This is review.This is review.This is review.',
};


function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, null)(ReviewCell);
