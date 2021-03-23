import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <View style={styles.home}>
                <Text>Home Component</Text>
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

export default Home;

