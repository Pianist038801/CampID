import React, { Component } from 'react';
import { BackAndroid, Platform, StatusBar, View, Navigator } from 'react-native';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';

import { popRoute } from '@actions/route';
import { closeDrawer } from './actions/drawer';

import { Colors } from '@theme/';

import SideBar from '@components/SideBar';
import Splash from '@containers/Splash';
import Login from '@containers/Authentication/Login';
import Register from '@containers/Authentication/Register';
import RegisterSkill from '@containers/Authentication/RegisterSkill';
import RegisterExp from '@containers/Authentication/RegisterExp';
import RegisterDone from '@containers/Authentication/RegisterDone';
import ForgotPassword from '@containers/Authentication/ForgotPassword';
import Home from '@containers/Home/Home';
import CampView from '@containers/CampView/CampView';
import CampRate from '@containers/CampView/CampRate';
import SearchView from '@containers/SearchView/SearchView';
import FilterView from '@containers/SearchView/FilterView';
import ProfileView from '@containers/ProfileView/ProfileView';
import EditProfile from '@containers/MenuView/EditProfile/EditProfile';
import Forms from '@containers/MenuView/Forms';
import Notifications from '@containers/MenuView/Notifications';
import Settings from '@containers/MenuView/Settings';
import PrivacyPolicy from '@containers/MenuView/PrivacyPolicy';
import TermsOfUse from '@containers/MenuView/TermsOfUse';
import Contact from '@containers/MenuView/Contact';
import PaymentView from '@containers/PaymentView/PaymentView';
import CampHistoryDetail from '@containers/MenuView/CampHistory/CampHistoryDetail';
import CampHistory from '@containers/MenuView/CampHistory/CampHistory';

Navigator.prototype.replaceWithAnimation = function (route) {
  const activeLength = this.state.presentedIndex + 1;
  const activeStack = this.state.routeStack.slice(0, activeLength);
  const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
  const nextStack = activeStack.concat([route]);
  const destIndex = nextStack.length - 1;
  const nextSceneConfig = this.props.configureScene(route, nextStack);
  const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);

  const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
  this._emitWillFocus(nextStack[destIndex]);
  this.setState({
    routeStack: nextStack,
    sceneConfigStack: nextAnimationConfigStack,
  }, () => {
    this._enableScene(destIndex);
    this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
      this.immediatelyResetRouteStack(replacedStack);
    });
  });
};

export var globalNav = {};
class AppNavigator extends Component {
  componentDidMount() {
    globalNav.navigator = this._navigator;

    BackAndroid.addEventListener('hardwareBackPress', () => {
      const routes = this._navigator.getCurrentRoutes();

      if (routes[routes.length - 1].id === 'login') {
        return false;
      }
      this.popRoute();
      return true;
    });
  }

  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer.close();
    }
  }
  popRoute() {
    this.props.popRoute();
  }
  openDrawer() {
    this._drawer.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'splash':
        return <Splash navigator={navigator} {...route.passProps} />;
      case 'login':
        return <Login navigator={navigator} {...route.passProps} />;
      case 'register':
        return <Register navigator={navigator} {...route.passProps} />;
      case 'registerSkill':
        return <RegisterSkill navigator={navigator} {...route.passProps} />;
      case 'registerExp':
        return <RegisterExp navigator={navigator} {...route.passProps} />;
      case 'registerDone':
        return <RegisterDone navigator={navigator} {...route.passProps} />;
      case 'forgotpwd':
        return <ForgotPassword navigator={navigator} {...route.passProps} />;
      case 'home':
        return <Home navigator={navigator} {...route.passProps} />;
      case 'rateCamp':
        return <CampRate navigator={navigator} {...route.passProps} />;
      case 'campView':
        return <CampView navigator={navigator} {...route.passProps} />;
      case 'searchView':
        return <SearchView navigator={navigator}{...route.passProps} />;
      case 'filterView':
        return <FilterView navigator={navigator}{...route.passProps} />;
      case 'profileView':
        return <ProfileView navigator={navigator}{...route.passProps} />;
      case 'editProfile':
        return <EditProfile navigator={navigator}{...route.passProps} />;
      case 'campHistory':
        return <CampHistory navigator={navigator}{...route.passProps} />;
      case 'campHistoryDetail':
        return <CampHistoryDetail navigator={navigator}{...route.passProps} />;
      case 'forms':
        return <Forms navigator={navigator}{...route.passProps} />;
      case 'notifications':
        return <Notifications navigator={navigator}{...route.passProps} />;
      case 'settings':
        return <Settings navigator={navigator}{...route.passProps} />;
      case 'privacyPolicy':
        return <PrivacyPolicy navigator={navigator}{...route.passProps} />;
      case 'termsOfUse':
        return <TermsOfUse navigator={navigator}{...route.passProps} />;
      case 'contact':
        return <Contact navigator={navigator}{...route.passProps} />;
      case 'paymentView':
        return <PaymentView navigator={navigator}{...route.passProps} />;
      default :
        return <Login navigator={navigator} {...route.passProps} />;
    }
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="overlay"
        tweenDuration={150}
        content={<SideBar navigator={this._navigator} />}
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
        tweenHandler={(ratio) => {  //eslint-disable-line
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          };
        }}
        negotiatePan
      >

        <Navigator
          ref={(ref) => { this._navigator = ref; }}
          configureScene={(route) => {
            const id = route.id;
            if (id === 'splash' || id === 'login' || id === 'register' || id === 'forgotpwd'
              || id === 'home')
              return Navigator.SceneConfigs.FadeAndroid;
            else if (id === 'login') return Navigator.SceneConfigs.PushFromRight;
            return Navigator.SceneConfigs.PushFromRight;
          }}
          initialRoute={{ id: (Platform.OS === 'android') ? 'splash' : 'splash' }}
          renderScene={this.renderScene.bind(this)} />
      </Drawer>
    );
  }
}

AppNavigator.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
  drawerState: React.PropTypes.string,
  closeDrawer: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    popRoute: () => dispatch(popRoute()),
    closeDrawer: () => dispatch(closeDrawer()),
  };
}

function mapStateToProps(state) {
  const drawerState = state.get('drawer').drawerState;
  return { drawerState };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
