import React, {Component} from 'react';
import TextView from "./TextView";
import {View} from "react-native";
import Circle from "./Circle";
import BEditText from "./BEditText";
import ToastExample from "../ToastModule/ToastExample";

/**
 * 调用原生UI组件演示
 */
export default class ViewScreen extends Component{
    static navigationOptions = {
        headerTitle:"原生UI组件",//标题
    };
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <TextView
                    text="原生TextView"
                    style={{width: 100, height: 100}}//调用原生UI组件必须设置大小，不然无法显示
                  >
                </TextView>
                <BEditText
                    style={{ height: 100,fontWeight:1}}
                    text="原生EditText"
                    onFocusChanged={()=>{
                        ToastExample.show("focus",ToastExample.SHORT,
                            (errorMsg)=>{
                                console.log(errorMsg);
                            },
                            (msg)=>{
                                console.log(msg);
                            })
                    }}
                    onTextChanged={(text)=>{
                        ToastExample.show(text,ToastExample.SHORT,
                            (errorMsg)=>{
                                console.log(errorMsg);
                            },
                            (msg)=>{
                                console.log(msg);
                            })
                    }}>
                </BEditText>
                <Circle style={{width: 100, height: 100}} >

                </Circle>
            </View>

        );
    }


}