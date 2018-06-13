
import React, {Component} from 'react';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";
import TabBarItem from "./TabBarItem";
import ToScreen from "./ToScreen";
import Test3 from "../Test3";
import AnimatedScreen from "../animated/AnimatedScreen";
import TextViewScreen from "../view/ViewScreen";
export default class MainScreen extends Component{
    render(){
        return(
           <Navigator/>
        );
    }
}


/**
 * Tab控件
 */
const Tab = TabNavigator(
    {
        Home:{
            screen:ScreenA,
            navigationOptions:({navigation}) => ({
                tabBarLabel:'首页',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../src/A_unselect.png')}
                        selectedImage={require('../src/A_select.png')}
                    />
                )
            }),
        },

        Mine:{
            screen:ScreenB,
            navigationOptions:({navigation}) => ({
                tabBarLabel:'我',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../src/B_unselect.png')}
                        selectedImage={require('../src/B_select.png')}
                    />
                )
            }),
        },

        Test3:{
            screen:TextViewScreen,
            navigationOptions:({navigation}) => ({
                tabBarLabel:'我',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../src/B_unselect.png')}
                        selectedImage={require('../src/B_select.png')}
                    />
                )
            }),
        },
    },

    {
        tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled:false,
        animationEnabled:true,
        lazy:true,
        tabBarOptions:{
            activeTintColor:'#06c1ae',
            inactiveTintColor:'#979797',
            style:{backgroundColor:'#ffffff',},
            labelStyle: {
                fontSize: 20, // 文字大小
            },
        }
    })


/**
 * 页面跳转控件
 */
const Navigator = StackNavigator({
    Main:{screen:Tab},
    ScreenB:{screen:ScreenB},
    ScreenA:{screen:ScreenA},
    ToScreen:{screen:ToScreen},
    AnimatedScreen:{screen:AnimatedScreen}
},{
    navigationOptions:{
        headerTitle:"主页面",
        headerBackTitle:"返回",
        headerTintColor:'#111111',
        showIcon:false,
        swipeEnabled:false,
        animationEnabled:false,
    },
    HeaderMode:"screen",
    mode:'card',
});