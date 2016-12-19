import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Navigator
} from 'react-native';

import Maps from './Maps';
import Route from './Route';
import ImagePicker from './ImagePicker';

export default class PageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressMaps(type) {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'Maps',
                component: Maps,
            })
        }
    }
    _pressImagePicker(type) {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'ImagePicker',
                component: ImagePicker,
            })
        }
    }

    render() {
        return (
            <View style={{}}>
                <Text style={{height:50}}></Text>
                <TouchableOpacity onPress={this._pressMaps.bind(this)}>
                    <Text style={{fontSize:25}}>Maps</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._pressImagePicker.bind(this)}>
                    <Text style={{fontSize:25}}>ImagePicker</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
