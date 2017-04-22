import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';

import { Styles, Metrics, Images, Colors, Fonts } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import Utils from '@src/utils';
import MapView from 'react-native-maps';

class CampHistoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    };
  }

  render() {
    return (
      <View>
        {CommonWidgets.renderSpacer(18)}
        <View style={styles.container} >
          <TouchableOpacity>
            <Image style={styles.listImg} source={Images.imgLoginLogo} />
          </TouchableOpacity>
          <View style={styles.rowContainer}>
            <View style={styles.leftView}>           
              <Text style={styles.descTitle}>
                { this.props.txtTitle }
              </Text>

              <Text style={styles.descPeriod}>
                { this.props.txtSubTitle }
              </Text>

              <Text style={styles.descSubTitle}>
                { this.props.txtPeriod }
              </Text>
            </View>
            <View style={styles.middleGap} />
            <View style={styles.rightView}>
              <Image style={styles.rateBar} source={Images.rateBar} >
                <Text style={styles.rateText}>
                  {this.props.rate}
                </Text>
              </Image>
              {CommonWidgets.renderTextButton(I18n.t('RATE_CAMP'), styles.rateCampBtn, this.props.onPress)}
            </View>
          </View>
        </View>

        {CommonWidgets.renderSpacer(6, Colors.textSecondary)}

        <View style={styles.container} >
          <View style={styles.rowContainer}>
            <View style={styles.leftView}>
              <Text style={styles.stadium}>
                { this.props.txtStadium }
              </Text>

              <Text style={styles.university}>
                { this.props.txtUniversity }
              </Text>

              <Text style={styles.address}>
                { this.props.txtAddress }
              </Text>
            </View>
            <View style={styles.middleGap} />
            <View style={styles.rightView}>
              <MapView
                style={{ width: Metrics.rateBarWidth, height: Metrics.rateBarHeight }}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <MapView.Marker
                  coordinate={this.state.coordinate}
                />
              </MapView>
            </View>
          </View>
        </View>
        {CommonWidgets.renderSpacer(2, Colors.textSecondary)}

        <View style={styles.container} >
          <View style={styles.rowContainer}>
            <View style={[...styles.leftView, { flex: 1, flexDirection: 'row', alignItems: 'center' }]}>
              <View style={styles.priceView}>
                <Text style={styles.descPrice}>
                  { this.props.txtPrice }
                </Text>
              </View>
              <View style={styles.middleTextView}>
                <Text style={[styles.university, { marginLeft: 20 }]}>
                  { I18n.t('NOT_REGISTERED_FOR_THIS_CAMP') }
                </Text>
              </View>
            </View>

            <View style={styles.middleGap} />
            <View style={styles.rightView}>
              {CommonWidgets.renderMaterialButton(I18n.t('REGISTER'), Colors.brandPrimary, () => Alert.alert('ss'), Metrics.rateBarWidth)}
            </View>
          </View>
        </View>

        {CommonWidgets.renderSpacer(6, Colors.textSecondary)}
      </View>
    );
  }
}

CampHistoryDetail.propTypes = {
  txtTitle: React.PropTypes.string.isRequired,
  txtSubTitle: React.PropTypes.string.isRequired,
  txtPeriod: React.PropTypes.string.isRequired,
  txtSchool: React.PropTypes.string.isRequired,
  txtPrice: React.PropTypes.string.isRequired,
};

CampHistoryDetail.defaultProps = {
  txtTitle: "Women's Basketball",
  txtSubTitle: 'All American Skills Development',
  txtPeriod: 'June 21-27th 2017',
  txtSchool: 'University of Connecticut - Storrs, CT',
  txtPrice: '$199',
  rate: '9.0',
  txtStadium: 'Gampel Pavilion',
  txtUniversity: 'University of Connecticut',
  txtAddress: '2098 Hillside Rd, SSS, SSS 08232',
};

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, null)(CampHistoryDetail);
