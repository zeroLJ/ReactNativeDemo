import React, {Component} from 'react';
import {Text} from 'react-native';
import {post} from "./HttpUtil";
export default class PostScreen extends Component{
    static navigationOptions = {
        headerTitle:"post请求测试",//标题
    };
    render(){
        return(
            <Text onPress={()=>{
                let formData = new FormData();
                formData.append('name','zero');
                formData.append('password','22');
                // http://193.112.132.83:8080/VoiceNote/Signin
                post('http://193.112.132.83:8080/VoiceNote/Signin',formData,(responseJson) => {
                    alert("请求成功！");
                    console.log(responseJson);
                    console.log(responseJson.success);
                    console.log(responseJson.msg);
                    console.log(responseJson.resultMap);
                })
            }}>发送post请求</Text>
        );
    }

}