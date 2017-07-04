import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';

import { Styles, Metrics, Images, Colors, Fonts } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import Utils from '@src/utils';
import MapView from 'react-native-maps';
import NavigationBar from 'react-native-navbar';
import { replaceRoute, pushNewRoute, popRoute } from '@actions/route';
import { openDrawer } from '@actions/drawer';

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

      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {CommonWidgets.renderStatusBar(Colors.brandPrimary) }
        <NavigationBar
          style={Styles.navBarStyle}
          title={CommonWidgets.renderNavBarHeader(I18n.t('CAMP_HISTORY_DETAIL'))}
          tintColor={Colors.brandSecondary}
          leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.popRoute())}
          rightButton={CommonWidgets.renderNavBarLeftButton(() => this.props.openDrawer(), 'menu')} />
        {CommonWidgets.renderSpacer(18)}

        <View style={styles.container}>
          <Image style={styles.listImg} source={Images.imgLoginLogo} />
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
            </View>
          </View>
          {CommonWidgets.renderSpacer(20)}

          { (this.props.isActive === true)
              ?
              (
                <View style={styles.rowContainer} >
                  <Text style={styles.activeCamp}>{I18n.t('THIS_CAMP_IS_STILL_ACTIVE:')}</Text>
                  {CommonWidgets.renderTextButton(I18n.t('REGISTER_NOW'), styles.rateCampBtn, this.props.onPress)}
                </View>
              )
              :
              (<Text style={styles.inactiveCamp}>{I18n.t('THIS_CAMP_IS_NO_LONGER_ACTIVE')}</Text>)
            }
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
        {CommonWidgets.renderSpacer(6, Colors.textSecondary)}
        {CommonWidgets.renderSpacer(10)}
        <View style={styles.container} >
          <Text style={styles.awardText}> {I18n.t('AWARDS')}</Text>
        </View>
        <View style={styles.container} >
          <Text style={styles.txtAddress}> 2017 Camp highest scorer</Text>
          {CommonWidgets.renderSpacer(10)}
          <Text style={styles.txtAddress}> 2017 Ball handling skills champ</Text>
        </View>


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
  isActive: false,
  txtTitle: "Women's Basketball",
  txtSubTitle: 'ADIDAS ABCD CAMP',
  txtPeriod: 'June 21-27th 2017',
  txtSchool: 'University of Connecticut - Storrs, CT',
  txtPrice: '$199',
  rate: '9.0',
  txtStadium: 'Gampel Pavilion',
  txtUniversity: 'University of Connecticut',
  txtAddress: '2098 Hillside Rd, SSS, SSS 08232',
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    popRoute: () => dispatch(popRoute()),
    openDrawer: () => dispatch(openDrawer()),

  };
}
function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(CampHistoryDetail);
