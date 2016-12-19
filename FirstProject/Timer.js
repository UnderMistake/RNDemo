/*
 * @Author: wzx
 * @Date: 2016-12-18 22:50:18
 * @Last Modified by: wzx
 * @Last Modified time: 2016-12-19 00:11:18
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state={count:0};
    }

    componentDidMount(){
        setInterval(()=>this.increase(),1000);
    }

    increase(){
        this.setState({count:this.state.count+1});
    }

  render(){
      return(
        <View style={{flex:1}}>
            <Text>count: {this.state.count}</Text>
        </View>
        );
    }
}

export default Timer;
