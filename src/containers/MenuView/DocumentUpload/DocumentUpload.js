import { Text, View, Platform, Image, ScrollView, ListView } from 'react-native';
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
import Utils from '@src/utils';

const documents = {
  Medical: ['2017 medical release', '2016 medical release'],
  Insurance: ['Medical Insurance', 'Camp Insurance'],
  CampRegistrations: ["2017 5-star Women's Basketball", '2016 Lacrosse Skills Development', '2016 Bill Handling & Defence',
    '2015 University of Maryland - Lacrosse Camp'],
};

class DocumentUpload extends Component {

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(documents),
    };
  }

  renderRow(rowItem) {
    return (
      <Text style={styles.smallText}>
        {rowItem}
      </Text>
    );
  }

  renderSectionHeader(sectionData, category) {
    return (
      <Text style={styles.bigText}>
        {category}
      </Text>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {CommonWidgets.renderStatusBar(Colors.brandPrimary) }
        <NavigationBar
          style={Styles.navBarStyle}
          title={CommonWidgets.renderNavBarHeader(I18n.t('DOCUMENT_UPLOADS'))}
          tintColor={Colors.brandSecondary}
          leftButton={CommonWidgets.renderNavBarLeftButton(() => this.props.popRoute())}
          rightButton={CommonWidgets.renderNavBarLeftButton(() => this.props.openDrawer(), 'menu')} />
        {CommonWidgets.renderSpacer(30)}

        <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            renderSectionHeader={this.renderSectionHeader}
          />
        </View>
      </View>
    );
  }
}

DocumentUpload.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(DocumentUpload);
