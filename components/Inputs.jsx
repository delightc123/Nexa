import React from 'react'
import { TextInput, View } from 'react-native'
import tw from 'twrnc'
import { theme } from '../constants/theme'
import { hp } from '../helpers/common'

const Inputs = (props) => {
  return (
    <View style={tw`flex-row h-[${hp(7.2)}px] items-center justify-start border-[0.5px] border-[${theme.colors.text}] rounded-[${theme.radius.xxl}px] px-4 gap-3  ${props.containerStyles && props.containerStyles}`} >
      {props.icon && props.icon}
      <TextInput
        placeholderTextColor={theme.colors.textLight}
        ref={props.inputRef && props.inputRef}
        {...props}
      
      />
    </View>
  )
}
 
export default Inputs