import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from '../constants/Icon'

const ActiveIcon = ({ name, size, strokeWidth, color, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Icon name={name} size={size} strokeWidth={strokeWidth} color={color}/>
    </TouchableOpacity>
  )
}

export default ActiveIcon