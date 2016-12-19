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
        let defaultName = 'PageComponent';
        let defaultComponent = PageComponent;
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

AppRegistry.registerComponent('FirstProject', () => FirstProject);
