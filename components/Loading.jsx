import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import tw from 'twrnc'
import { theme } from '../constants/theme'

const Loading = ({size='large', color= theme.colors.primary}) => {
  return (
    <View style={tw`justify-center items-center`}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

export default Loading