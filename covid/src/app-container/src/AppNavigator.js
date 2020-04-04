/*
My Music Tutor
Made by Ryan Niemi
Date: 5/10/19
Description:
  A homescreen for users when they first install the app. It helps them to login and signup. It also walks them through what the app is.
  It has a welcome image gif of a person doing homework
  It allows you to get everything filled out, and then finally lets you book a tutor. AKA the tutorial
*/

import App as LoadingIcon from 'loader-animation.js';
import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'; //used for navigating around pages

//jam stack authentication loading screen from react-native

import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

// const MyStack = createStackNavigator({
//   Landing: {
//     screen: WebViewScreen,
//     params: {url: 'https://www.mymusictutor.com.html'}
//   }
// });

// const MyNav = createAppContainer(MyStack);

// const Home = () => {
//   return <MyNav />
// }

export default Home;

class WebViewScreen extends Component {
renderLoadingView() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator
          size='large'
        />
      </View>
    );
  }
  render() {
    const { url }  = this.props.navigation.state.params;
    return(
      <WebView
        source={{uri: url }}
        renderLoading={this.renderLoadingView}
        startInLoadingState={true}
      />
    );
  }
}
export default WebViewScreen;


<WebView
  source={{uri: url }}
  renderLoading={this.renderLoadingView}
  startInLoadingState={true}
  ref={(ref) => { this.webview = ref; }}
  onNavigationStateChange={(event) => {
    this.webview.stopLoading();
  }}
/>

onNavigationStateChange={(event) => {
  if (event.url !== url) {
    this.webview.stopLoading();
    if (event.url.includes('http://www.damienmason.com')) {
      dispatch(
        StackActions.push({
          routeName: 'Internal',
          params: { url: event.url },
        })
      )
    } else {
      Linking.openURL(event.url);
    }
  }
}}

// SCREENS
import WebViewScreen from 'WebViewScreen';

// you can also import from @react-navigation/native

const AppNavigator = createStackNavigator(...);

const AppContainer = createAppContainer(AppNavigator);


const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  someEvent() {
    // call navigate for AppNavigator here:
    this.navigator &&
      this.navigator.dispatch(
        NavigationActions.navigate({ routeName: someRouteName })
      );
  }
  render() {
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}


// Now AppContainer is the main component for React to render

export default AppContainer;


/*
	Implementation of AppStack:

		HomeScreen.js
		LinksScreen.js
		loader-animation (AKA wait for it)
		Profile.js
		SettingsScreen.js
		userForm.js
		userInfo.js
		bookings.js
		facebook-animation.js 
		twitter-animation.js


*/
// goes here.

const AppStack = createStackNavigator({ Feed: FeedScreen, Home: HomeScreen, Profile: Profile, Settings: SettingsScreen, Form: userForm, Info: userInfo, Links: LinksScreen, Bookings: bookings, Facebook: facebook-animation, Twitter: twitter-animation, Loader: loader-animation});

/*
	Implementation of AppStack:

		Login-SignUp.js

*/
// goes here.

const AuthStack = createStackNavigator({ Login: Login-SignUp });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
}));



class AuthLoadingScreen extends React.Component {

	constructor(props) {
		super(props);
		this._bootstrapAsync();
	}

	_bootstrapAsync = async () => {
		const userToken = await AsyncStorage.getItem('userToken');


		// This will switch to the App screen or Auth screen and this loading
   		// screen will be unmounted and thrown away.
   		this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  
	};

	  render() {
    return (
      <View styles={{flex: 1}}>
	      <View styles={{flex: 8}}> 
	      	<LoadingIcon />
	      </View>

	      <View styles={{flex: 2}}>
	        <ActivityIndicator />
	        <StatusBar barStyle="default" />
	      </View>
      </View>
    );
  }
};

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <Button title="Sign in" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Signed In',
  };

  render() {
    return (
      <View>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Feed');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}


//TODO: add screens for the Socializer, payment, and webRTC. For example. 