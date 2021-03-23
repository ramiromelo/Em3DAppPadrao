import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from './HomeComponent';
import ImagesPage from './ImagesPage';
import VideosPage from './VideosPage';

const HomeNavigator = createStackNavigator(
   {
       Home: { screen: Home }
   },
   {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
            backgroundColor: '#5637DD'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon
            name='bars'
            type='font-awesome'
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
        />
        })
   }
);

const ImagesNavigator = createStackNavigator(
   {
       Images: { screen: ImagesPage }
   },
   {
    defaultNavigationOptions: ({navigation}) => ({
        headerStyle: {
        backgroundColor: '#5637DD'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: '#fff'
    },
    headerLeft: <Icon
        name='bars'
        type='font-awesome'
        iconStyle={styles.stackIcon}
        onPress={() => navigation.toggleDrawer()}
    />
    })
}
);

const VideosNavigator = createStackNavigator(
    {
        Videos: { screen: VideosPage }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
            backgroundColor: '#5637DD'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon
            name='bars'
            type='font-awesome'
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
        />
        })
   }
 );

const MainNavigator = createDrawerNavigator(
   {
       Home: { screen: HomeNavigator },
       Images: { screen: ImagesNavigator },
       Videos: { screen: VideosNavigator }
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

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;

