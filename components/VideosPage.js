import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

class VideosPage extends Component {

    static navigationOptions = {
        title: 'Videos'
    }

    render() {
        return (
            <View style={styles.home}>
                <Text>Videos Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   home: {
     flex: 1,
     backgroundColor: '#ABABAB',
     alignItems: 'center',
     justifyContent: 'center',
   }
 })

export default VideosPage;
