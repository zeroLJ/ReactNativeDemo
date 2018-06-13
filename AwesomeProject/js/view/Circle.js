import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

const MCircle = requireNativeComponent('MCircle', {
    propTypes: {
        ...View.propTypes // 包含默认的View的属性
    },
});

export default MCircle;