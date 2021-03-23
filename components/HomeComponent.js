import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <View>
                <Text>Home Component</Text>
            </View>
        );
    }
}

export default Home;

// const styles = StyleSheet.create({
//    homeComponent: {
//      flex: 1,
//      backgroundColor: '#fff',
//      alignItems: 'center',
//      justifyContent: 'center',
//    },
//  });