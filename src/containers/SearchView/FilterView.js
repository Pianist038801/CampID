import { Text, View, Platform, Image, ScrollView, StyleSheet } from 'react-native';
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
import Collapsible from '@components/Collapsible/Collapsible';
import Accordion from '@components/Collapsible/Accordion';
const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
];

class FilterView extends Component {
  _renderHeader(section) {
    return (
       CommonWidgets.renderFilterHeader(Images.imgLeftBtn, section.title, Images.imgRightBtn)
    );
  }

  _renderContent(section) {
    return (
      <View style={styles1.content}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        { CommonWidgets.renderStatusBar(Colors.brandPrimary) }
        <NavigationBar
          style={Styles.navBarStyle}
          title={CommonWidgets.renderNavBarHeader(I18n.t('FILTER'))}
          tintColor={Colors.brandSecondary}
          leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.popRoute())}
          rightButton={(<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {CommonWidgets.renderRightButton(I18n.t('CLEAR'), { color: Colors.textSecondary }, null)}
          </View>)}
           />

        {CommonWidgets.renderSpacer(100)}

        <Accordion
          sections={SECTIONS}
          underlayColor='transparent'
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
      />
        {/*<View style={Styles.center}>
          {CommonWidgets.renderMaterialButton('Apply', Colors.brandPrimary, null)}
        </View>*/}
      </View>
    );
  }
}

FilterView.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterView);
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});
