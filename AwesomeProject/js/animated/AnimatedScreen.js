

import React, {Component} from 'react';
import {Text} from 'react-native';
import FadeInView from "./FadeInView";
export default class AnimatedScreen extends Component{
    static navigationOptions = {
        headerTitle:"动画效果 淡入",//标题
    };

    constructor(props){
        super(props)
    }
    render(){
        return(
            <FadeInView>
                <Text onPress={()=>{
                    this.props.navigation.navigate('ScreenA',{info:"我来了"});
                }}>页面B</Text>
            </FadeInView>
        );
    }


}