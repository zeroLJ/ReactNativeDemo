
import React, { Component, PropType } from 'react';
import {Text, TextInput, View } from 'react-native';

export default class Hello extends Component {
    /**
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

    onClickListener(){
        console.log('---咳咳---')
        console.log('---click2---')
    }

     render() {
         console.log('======render======')
         return (
             <View
                 style={{padding: 5}}>
                 <TextInput
                     style={{height: 40}}
                     placeholder="Type here to translate!"
                 // onChangeText={(text) => this.setState({text})}
                 />

                 <Text style={{padding: 10, fontSize: 20}}
                       ref = "aadd"
                       onPress = {()=>{
                           console.log('======click======')
                           this.setState({
                               count:this.state.count+1,
                           })
                       }}>呵呵{this.props.name}{this.state.count}
                 </Text>
                 <Text style={{padding: 10, fontSize: 20}}
                       onPress = {
                           // this.onClickListener.bind(this)
                           ()=>{
                               this.onClickListener();
                            }
                           // console.log('======click======')
                       }
                       >呵呵{this.props.name}{this.state.count}
                 </Text>
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