import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

import { Styles, Metrics, Images, Colors, Fonts } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import Utils from '@src/utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';

class CampHistoryCell extends Component {
  render() {
    return (
      <View>
        {CommonWidgets.renderSpacer(12)}
        <View style={[Styles.container, Styles.rowContainer]}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.name}>
              {this.props.name}
            </Text>
            <Text style={styles.period}>
              {this.props.period}
            </Text>
            {this.props.isActive === true
            ?
              <Text style={styles.active}>
                {I18n.t('CURRENTLY_ACTIVE')}
              </Text>
            :
              <Text style={styles.inactive}>
                {I18n.t('NOT_ACTIVE')}
              </Text>
            }
          </View>

          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }} >
            {CommonWidgets.renderIcon(this.props.onPress, 'angle-right')}
          </View>
        </View>
        {CommonWidgets.renderSpacer(25)}
      </View>
    );
  }
}

CampHistoryCell.propTypes = {
  name: React.PropTypes.string.isRequired,
  period: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired,
};

CampHistoryCell.defaultProps = {
  name: 'Adidas ABCD CAmp',
  period: 'June 7 - 10 2017',
  isActive: true,
  onPress: () => {},
};


function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, null)(CampHistoryCell);
