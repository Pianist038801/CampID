import { Text, View, Platform, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigationBar from 'react-native-navbar';

import { setHomeTab } from '@actions/globals';
import { openDrawer } from '@actions/drawer';
import { replaceRoute, popRoute, pushNewRoute } from '@actions/route';

import Constants from '@src/constants';
import { Metrics, Styles, Colors, Fonts, Icon, Images } from '@theme/';
import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import SearchBar from 'react-native-searchbar';
import SearchCell from '@components/SearchView/SearchCell';

class SearchView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {CommonWidgets.renderStatusBar(Colors.brandPrimary) }
        <SearchBar
          ref={ref => this.searchBar = ref}
          backgroundColor={Colors.brandPrimary}
          handleResults={this._handleResults}
          iconColor={Colors.textTitle}
          textColor={Colors.textTitle}
          placeholderTextColor={Colors.textTitle}
          heightAdjust={-8}
        />

        <NavigationBar
          style={Styles.navBarStyle}
          title={CommonWidgets.renderNavBarHeader(I18n.t('SEARCH_RESULTS'), () => this.searchBar.show())}
          tintColor={Colors.brandSecondary}
          leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.popRoute())}
          rightButton={(<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {CommonWidgets.renderNavBarLeftButton(() => this.props.pushNewRoute('filterView'), Images.downArrow)}
            <View style={{ width: 20 }} />
            {CommonWidgets.renderNavBarLeftButton(null, 'search')}
          </View>)}
          />
        <View style={{ height: 60, justifyContent: 'center', backgroundColor: Colors.heavyBorder }}>
          <Text style={{ ...Fonts.style.h4, color: Colors.textTitle, marginLeft: Metrics.defaultMargin / 2 }}> "Propspect Camps" - 42 Results</Text>
        </View>
        <ScrollView>
          <SearchCell />
          <SearchCell />
          <SearchCell />
        </ScrollView>
      </View>
    );
  }
}

SearchView.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  setHomeTab: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  openDrawer: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
  pushNewRoute: React.PropTypes.func.isRequired,
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
