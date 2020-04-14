import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Color from '../constants/Color';

const CustomHeaderButton = (props) => {
    return(
        <HeaderButton 
            {...props} 
            IconComponent={Ionicons} 
            iconSize={23} 
            color={(Platform.OS === 'android') ? Color.white : Color.header}/>
    );
}

export default CustomHeaderButton;



