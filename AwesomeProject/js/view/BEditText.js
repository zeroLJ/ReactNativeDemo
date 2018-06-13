
import { requireNativeComponent, View } from 'react-native';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Android原生EditText，并监听其文字变化和焦点变化
 */
export default class BEditText extends Component {
    //初始化
    constructor(props){
        super(props)
        this._onChange = this._onChange.bind(this);
    }
    _onChange(event: Event) {
        switch (event.nativeEvent.flag){//从Android代码返回来的标志，“flag”为key值，若Android代码没返回该key值对应的value，则为空
            case 1:
                if (this.props.onTextChanged) {//有设置监听器才触发
                    console.log("onText")
                    this.props.onTextChanged(event.nativeEvent.text);
                }
                break;
            case 2:
                if (this.props.onFocusChanged){
                    console.log("onFocus")
                    this.props.onFocusChanged();
                }
                break;
        }
    }
    render() {
        return <RCTBEditText {...this.props} onChange={this._onChange} />;
    }
}
BEditText.defaultProps = {
    text:"2",//默认参数，可设置，不设置则默认为空
}
BEditText.propTypes = {
    text: PropTypes.string ,    //参数属性
    ...View.propTypes, // 包含默认的View的属性,此行必须加
    onTextChanged: PropTypes.func,
    onFocusChanged: PropTypes.func,
};

// Android代码中public String getName()中返回的字符串
var RCTBEditText = requireNativeComponent(`BEditText`, BEditText, {
    nativeOnly: {onChange: true}
});