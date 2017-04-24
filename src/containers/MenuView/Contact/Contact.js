import { Text, View, Platform, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationBar from 'react-native-navbar';

import { setHomeTab } from '@actions/globals';
import { openDrawer } from '@actions/drawer';
import { replaceRoute, pushNewRoute, popRoute } from '@actions/route';

import Constants from '@src/constants';
import { Metrics, Styles, Colors, Fonts, Icon, Images } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import DashboardItem from '@components/DashboardItem';
import MapView from 'react-native-maps';

class Contact extends Component {
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
        { CommonWidgets.renderStatusBar(Colors.brandPrimary) }
        <NavigationBar
          style={Styles.navBarStyle}
          title={CommonWidgets.renderNavBarHeader(I18n.t('CONTACT'))}
          tintColor={Colors.brandSecondary}
          leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.popRoute())}
         />
        <View style={{ flex: 1.5, flexDirection: 'row' }}>
          <View style={{ ...Styles.center, flex: 1 }} >
            <Image source={Images.campID} style={{resizeMode: 'contain', width: Metrics.screenWidth / 2.5 }} />
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }} >
            <Text style={Fonts.style.h5}>
              151 Ted Turner Drive NW Atlanta, GA 30303
            </Text>
            <Text style={Fonts.style.h6}>
              e sports@sportsid.io
            </Text>
          </View>
        </View>

        <View style={{ flex: 2, backgroundColor: 'blue', flexDirection: 'row' }}>
          <MapView
            style={{ flex: 1 }}
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

        <View style={{ ...Styles.container, flex: 4, flexDirection: 'column' }}>
          <View style={{ flex: 1, justifyContent: 'center' }} >
            <Text style={{ ...Fonts.style.h5, color: Colors.textSecondary }}>
              {this.props.description}
            </Text>
          </View>
          <View style={{ flex: 1 }} >
            <Text style={Fonts.style.h4}>
              Sales Assistance
            </Text>
            <Text style={Fonts.style.h5}>
              e
              <Text style={{ ...Fonts.style.h5, color: Colors.textSecondary }}>
                {' '}sports@sportsid.io
              </Text>
            </Text>
            <Text style={Fonts.style.h5}>
              p
              <Text style={{ ...Fonts.style.h5, color: Colors.textSecondary }}>
                {' '}404.123.4567
              </Text>
            </Text>
          </View>
          <View style={{ flex: 1 }} >
            <Text style={Fonts.style.h4}>
              Profile Support
            </Text>
            <Text style={Fonts.style.h5}>
              e
              <Text style={{ ...Fonts.style.h5, color: Colors.textSecondary }}>
                {' '}sports@sportsid.io
              </Text>
            </Text>
          </View>
        </View>

      </View>
    );
  }
}

Contact.defaultProps = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus ligula id molestie bibendum.Pellentesque habitant morbi tristique senectus et.',
  txt: 's',
};
Contact.propTypes = {
  description: React.PropTypes.string.isRequired,
  txt: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  setHomeTab: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
  pushNewRoute: React.PropTypes.func.isRequired,
  openDrawer: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setHomeTab: homeTab => dispatch(setHomeTab(homeTab)),
    openDrawer: () => dispatch(openDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    popRoute: () => dispatch(popRoute()),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
