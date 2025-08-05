import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { theme } from '../constants/theme'
import { hp, wp } from '../helpers/common'
import Loading from './Loading'

const OnboardingButton = ({ text, onPress, loading, hasShadow }) => {
  if(loading){
    return (
      <View style={tw`bg-pink-200 justify-center items-center rounded-3xl`}>
        <Loading/>
      </View>
    )
  }
  return (
    <TouchableOpacity onPress={onPress} style={tw`p-3 px-[${wp(10)}px] items-center bg-[#c33c3c] rounded-3xl ${hasShadow && `shadow-lg shadow-[${theme.colors.dark}] elevation-md `} `} >
      <Text style={tw`text-white text-[${hp(2)}px] font-medium`} >{text}</Text>
    </TouchableOpacity>
  )
}

export default OnboardingButton 