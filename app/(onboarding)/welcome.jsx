import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import ScreenWrapper from '../../components/ScreenWrapper'
import { hp, wp } from '../../helpers/common'

const Welcome = () => {
  return (
    <ScreenWrapper bg='white' >
      <View style={tw`flex-1`} >
        {/* Name */}
        <View style={tw`px-[${wp(4)}px] flex-1 items-center justify-center `} >
          <Text style={tw`text=[${hp(2)}px] font-semibold`} >Campus Life, All in one</Text>
        </View>
        {/* Get Started */}
        <View style={tw`bg-black p-6 py-[${hp(4)}px] rounded-t-3xl gap-2`} >
            <TouchableOpacity onPress={() => router.push('signUp')} style={tw`px-[${wp(4)}px] p-5 bg-gray-500 shadow-sm shadow-white rounded-xl `} >
              <Text style={tw`text-center`} >Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('login')} >
              <Text style={tw`text-white text-center`} >Login</Text>
            </TouchableOpacity>
          </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome