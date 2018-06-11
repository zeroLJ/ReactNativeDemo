
import React, { Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableWithoutFeedback,
    TouchableHighlight,Alert, ToastAndroid,} from 'react-native';


/**
 * Button使用
 */

export default class Test3 extends Component {
 /*
 * 默认属性
 * @type {{name: string, age: number}}
 */
    static defaultProps={
         name:"eee",
         age : 2,
     }

     // static propTypes={
     //    name :
     // }

     //初始化
     constructor(props){
         super(props)
         this.state=({
             count:0,
         })
         console.log('---constructor---')
     }


    render() {
     console.log('======render======')
     return (
         <View
             style={{ flexDirection:'row',padding: 5}}>
             <TouchableWithoutFeedback
                 onPress={()=>{
                    this.setState({count: this.state.count+1})
                 }}
                 onLongPress={()=>{
                     Alert.alert("提示","长按",[
                         {text:"确定",onPress:()=>{
                             ToastAndroid.show("确定",ToastAndroid.SHORT)
                         }},
                         {text:"取消",onPress:()=>{
                             ToastAndroid.show("取消",ToastAndroid.SHORT)
                         }},
                     ])
                 }}
             >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            点击{this.state.count}次
                        </Text>
                    </View>
             </TouchableWithoutFeedback>

             <TouchableHighlight
                 style={{left:30}}
                 underlayColor='green'
                 onPress={()=>{
                     this.setState({count: this.state.count+1})
                 }}
                 onLongPress={()=>{
                     Alert.alert("提示","长按",[
                         {text:"确定",onPress:()=>{
                             ToastAndroid.show("确定",ToastAndroid.SHORT)
                         }},
                         {text:"取消",onPress:()=>{
                             ToastAndroid.show("取消",ToastAndroid.SHORT)
                         }},
                     ])
                 }}
             >
                 <View style={styles.button}>
                     <Text style={styles.buttonText}>
                         点击{this.state.count}次
                     </Text>
                 </View>
             </TouchableHighlight>
         </View>
     );
    }

    //准备加载组件
    componentWillMount(){
        console.log('---componentWillMount---')
    }

    //在组件第一次绘制之后
    componentDidMount(){
        console.log('---componentDidMount---')
    }

    //如果组件收到新的属性（props），就会调用
    componentWillReceiveProps(nextProps){
        console.log('---componentWillReceiveProps---')
    }

    //当组件接收到新的属性和状态改变的话，都会触发调用
    // 这个函数的返回值决定是否需要更新组件
    shouldComponentUpdate(nextProps,nextState){
        console.log('---shouldComponentUpdate---')
        return true;
    }

    //如果组件状态或者属性改变，并且上面的 shouldComponentUpdate(...)
    // 返回为 true，就会开始准更新组件，并调用 componentWillUpdate()
    //默认情况下，这个函数永远返回 true 用来保证数据变化的时候 UI 能够同步更新。
    componentWillUpdate(nextProps,nextState){
        console.log('---componentWillUpdate---')
    }
    //调用了 render() 更新完成界面之后，会调用 componentDidUpdate() 来得到通知
    componentDidUpdate( prevProps, prevState){
        console.log('---componentDidUpdate---')
    }

    //当组件要被从界面上移除的时候，就会调用 componentWillUnmount()
    //在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
    componentWillUnmount(){
        console.log('---componentWillUnmount---')
    }
}

const styles = StyleSheet.create({
    button:{

    },
    buttonText:{

    }
})