

import PropTypes from 'prop-types';
import { requireNativeComponent, View } from 'react-native';
import React, {Component} from 'react';
/**
 * Android原生TextView，可主动修改其状态，但无法监听其状态变化
 * 若要监听组件的状态变化，可查看BEditText
 */

export default class TextView extends Component{
    static propTypes={
        text: PropTypes.string ,
        ...View.propTypes // 包含默认的View的属性,此行必须加
    }

    static defaultProps={
        text: "2222"
    }
    render(){
       return <RCTTextView  {...this.props}/>
    }
}
//上面或下面两种设置方式都行
// TextView.propTypes = {
//     text: PropTypes.string ,    //参数属性
//     ...View.propTypes, // 包含默认的View的属性,此行必须加
//
// };
// TextView.defaultProps={
//     text: "2222"
// }

var RCTTextView = requireNativeComponent(`TextView`, TextView, {
    nativeOnly: {onChange: true}
});