

import React, {Component} from 'react';
import {Text} from 'react-native';
export default class ScreenB extends Component{
    static navigationOptions = {
        headerTitle:"页面B",//标题
    };

    constructor(props){
        super(props)
    }
    render(){
        return(
            <Text onPress={()=>{
                this.props.navigation.navigate('ScreenA',{info:"我来了"});
            }}>页面B</Text>
        );
    }


}