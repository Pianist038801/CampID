
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

import NavigationBar from 'react-native-navbar';
import { replaceRoute, popRoute, pushNewRoute } from '@actions/route';
import { Styles, Metrics, Images, Colors, Fonts } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import Utils from '@src/utils';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import CreditCard from './CreditCard';
import PayPal from './PayPal';
import ApplyPay from './ApplyPay';
import { Avatar } from 'react-native-elements';

class PaymentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athleteFocus: false,
      coachFocus: false,
      administratorFocus: false,
      parentFocus: false,
    };
  }

  render() {
    return (
      <KeyboardAwareScrollView
        alwaysBounceVertical={false}
        style={{ flex: 1, backgroundColor: Colors.textTitle }}
        automaticallyAdjustContentInsets={false} >

        <View style={Styles.fullScreen}>
          {CommonWidgets.renderStatusBar(Colors.status)}
          <NavigationBar
            style={Styles.navBarStyle}
            title={CommonWidgets.renderNavBarHeader('Registration')}
            tintColor={Colors.txtTitle}
            leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.popRoute())} />

          <View style={[styles.container, Styles.rowContainer, { height: Metrics._real(180) }]}>
            <View style={Styles.center}>
              <Image style={styles.image} source={{ uri: this.props.imgPath }} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={[Fonts.style.h5, { color: Colors.textSecondary }]}>{this.props.club}</Text>
              {CommonWidgets.renderSpacer(1)}
              <Text style={[Fonts.style.h5, { color: Colors.brandPrimary }]}>{this.props.name}</Text>
              {CommonWidgets.renderSpacer(1)}
              <Text style={[Fonts.style.h5, { color: Colors.textPrimary }]}>{this.props.period}</Text>
              {CommonWidgets.renderSpacer(1)}
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.rateText}>
                  {this.props.price}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.container, Styles.rowContainer, { alignItems: 'center', justifyContent: 'space-between', height: Metrics._real(80) }]}>
            {CommonWidgets.renderIconLabel(Images.pdf, I18n.t('DOWNLOAD_REGISTRATION_FORM'))}
            {CommonWidgets.renderNormalButton('Upload', Colors.brandPrimary, null)}
          </View>
          {CommonWidgets.renderSpacer(6, Colors.textSecondary)}
          <View style={{ flex: 1 }} >
            <ScrollableTabView
              renderTabBar={() => <DefaultTabBar />}
              tabBarActiveTextColor={Colors.brandPrimary}
              tabBarInactiveTextColor={Colors.textSecondary}
              tabBarUnderlineStyle={{ backgroundColor: Colors.brandPrimary }}>
              <CreditCard tabLabel={I18n.t('CREDIT_CARD')} />
              <PayPal tabLabel={I18n.t('PAYPAL')} />
              <ApplyPay tabLabel={I18n.t('APPLY_PAY')} />

            </ScrollableTabView>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

PaymentView.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  pushNewRoute: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
};


PaymentView.defaultProps = {
  imgPath: 'https://facebook.github.io/react/img/logo_og.png',
  name: 'All American Skills Development',
  period: 'June 7 - 10 2017',
  club: "Women's basketball",
  price: '$99',
  rating: '9.5 rated',
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    popRoute: () => dispatch(popRoute()),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentView);
