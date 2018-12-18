import React , {Component} from 'react';
//import PropTypes from 'prop-type';
import {TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

function Button({iconName, onPress}){
    return(
        <TouchableOpacity>
            <FontAwesome name={iconName} size={80} color="white"/> 
        </TouchableOpacity>
    );
} 
/* 속성지정시 '', 필요 없다 */
export default Button;