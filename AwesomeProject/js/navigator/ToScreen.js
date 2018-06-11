

import React, {Component} from 'react';
import {Text,TouchableOpacity} from 'react-native';

/**
 * 跳转新页面
 */
export default class ToScreen extends Component{
    static navigationOptions = {
        headerTitle:"跳转页面",//标题
    };

    constructor(props){
        super(props)
    }
    render(){
        return(
            //<Text>页面B，来自页面A的消息：</Text>
            <TouchableOpacity>
                <Text>页面B，来自页面A的消息：{this.props.navigation.state.params.info}</Text>
            </TouchableOpacity>
        );
    }


}