import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeDrawer } from '@actions/drawer';
import { View } from 'react-native';
import {setSpinnerVisible, replaceRoute} from '@actions/globals'
import { Metrics } from '@theme';
class SideBar extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
      </View>
    );
  }
}

SideBar.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  closeDrawer: React.PropTypes.func.isRequired,
  setSpinnerVisible: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    replaceRoute: route => dispatch(replaceRoute(route)),
    closeDrawer: () => dispatch(closeDrawer()),
    setSpinnerVisible: spinnerVisible => dispatch(setSpinnerVisible(spinnerVisible)),
  };
}
function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
