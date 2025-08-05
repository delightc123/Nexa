import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'
import ScreenWrapper from '../../../components/ScreenWrapper'

const Profile = () => {
  return (
    <ScreenWrapper bg='white' >
      <View style={tw`items-center justify-center flex-1 `} >
      <Text onPress={() => router.push('welcome')} >welcome</Text>
      </View>
    </ScreenWrapper>
  )
}

export default Profile

