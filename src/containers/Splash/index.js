import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { replaceRoute } from '@actions/route';
import { Styles, Images, Colors } from '@theme/';

class Splash extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    setTimeout(() => {
       this.props.replaceRoute('login');
    }, 300);
  }

  render() {
    return (
      <Image
        resizeMode={'stretch'}
        style={[Styles.fixedFullScreen]}
        source={Images.bkgSplash} />
    );
  }
}

Splash.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}
function mapStateToProps(state) {
  return { };
}
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
