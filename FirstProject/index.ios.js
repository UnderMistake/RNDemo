/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Platform,
    Navigator,
    Image,
    MapView,
    Text,
    TextInput,
    ScrollView,
    Switch,
    TouchableOpacity,
    View
} from 'react-native';
import Maps from './Maps';
import PageComponent from './PageComponent';

export default class FirstProject extends Component {
    render() {
        let children = [];
        let defaultName = 'PageComponent';
        let defaultComponent = PageComponent;
        for (var i = 0; i < 5; i++) {
            children.push(
                <View key={"key_" + i} style={styles.child}>
                    <Text>{"T" + i}</Text>
            </View>);
        }
        return (
                <Navigator
                    initialRoute={{ name: defaultName, component: defaultComponent }}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.VerticalDownSwipeJump;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                }} />
        );
    }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('FirstProject', () => FirstProject);
