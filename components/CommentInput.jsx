import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import images from '../constants/images'
import tw from 'twrnc'
import { hp, wp } from '../helpers/common'

const CommentInput = () => {
  return (
    <View style={tw`p-6 rounded-t-3xl border-t-0 shadow shadow-gray-400 px-[${wp(4)}px] pb-[${hp(5)}px] flex-row gap-4`} >
        <Image source={images.profilePicTest} contentFit='contain' style={tw`w-10 h-10 rounded-full`} />
        <TextInput placeholder='add a comment for angeldavid' style={tw`flex-1 text-[${hp(1.7)}px]`} />
    </View>
  )
}

export default CommentInput