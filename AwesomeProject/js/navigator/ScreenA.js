import React, {Component} from 'react';
import {Text} from 'react-native';
import ToastExample from "../ToastModule/ToastExample";
export default class ScreenA extends Component{
    static navigationOptions = {
        headerTitle:"页面A",//标题
    };
    render(){
        return(
            <Text onPress={()=>{
                this.props.navigation.navigate('ToScreen',{info:"我来了"});
            }}>页面A</Text>
        );
    }
}