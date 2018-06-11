import React, {Component} from 'react';
import {Text} from 'react-native';
import ToastExample from "../ToastModule/ToastExample";
export default class ToastScreen extends Component{
    static navigationOptions = {
        headerTitle:"toast",//标题
    };
    render(){
        return(
            <Text onPress={()=>{
                // ToastExample.show("asdasd",ToastExample.SHORT)
                ToastExample.show("asdasd",ToastExample.SHORT,
                    (errorMsg)=>{
                        console.log(errorMsg);
                    },
                    (msg)=>{
                        console.log(msg);
                    })
            }}>页面A</Text>
        );
    }
}