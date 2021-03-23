import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Home from './HomeComponent';
import ImagesPage from './ImagesPage'

const HomeNavigator = createStackNavigator(
   {
       Home: { screen: Home }
   },
   {
       defaultNavigationOptions: {
           headerStyle: {
               backgroundColor: '#BEBEBE'
           },
           headerTintColor: '#fff',
           headerTitleStyle: {
               color: '#fff'
           }
       }
   }
);

const ImagesNavigator = createStackNavigator(
   {
       Images: { screen: ImagesPage }
   },
   {
       defaultNavigationOptions: {
           headerStyle: {
               backgroundColor: '#BEBEBE'
           },
           headerTintColor: '#fff',
           headerTitleStyle: {
               color: '#fff'
           }
       }
   }
);

const MainNavigator = createDrawerNavigator(
   {
       Home: { screen: HomeNavigator },
       Images: { screen: ImagesNavigator }
   },
   {
       drawerBackgroundColor: '#FFC95C',
       activeTintColor: '#fff',
   }
);

const AppNavigator = createAppContainer(MainNavigator)


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //campsites: CAMPSITES
        };
    }

    render() {
        return (
         <View style={{
               flex: 1,
               paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
            <AppNavigator />
         </View>
        );
    }
}

export default Main;

