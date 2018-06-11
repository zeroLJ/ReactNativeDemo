import React, {Component} from 'react';
import {Text} from 'react-native';
export default class TimerDemo extends Component{
    static navigationOptions = {
        headerTitle:"定时器",//标题
    };
    //当组件要被从界面上移除的时候，就会调用 componentWillUnmount()
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
    render(){
        return(
            <Text onPress={()=>{
                this.timer = setTimeout(
                    () => { console.log('把一个定时器的引用挂在this上'); },//延时操作
                    1000       //延时时间
                );
            }}>延时</Text>
        );
    }
}