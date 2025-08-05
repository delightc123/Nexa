import React from 'react'
import { Image, Text, View } from 'react-native'
import tw from 'twrnc'
import { hp, wp } from '../helpers/common'
import ActiveIcon from './ActiveIcon'

const ThreadCard = ({ item }) => {
  return (
    <View style={tw`border-b py-[${hp(4)}px] border-gray-300`} >
          <View style={tw`px-[${wp(4)}px] flex-row gap-2 items-center `} >
            <View>
              {/* Header 1 */}
              <Image source={item.profilePic} contentFit='contain' style={tw`w-8 h-8 rounded-xl`} />
              <View style={tw`border-l-2 flex-1 self-center mt-3 border-gray-400 `}></View>
            </View>
            <View style={tw`flex-1 gap-3`} >
              {/* Header 2 */}
              <View style={tw`flex-row justify-between items-center `} >
                <Text style={tw`font-medium`} >{item.user.userName}</Text>
                <View style={tw`flex-row gap-2 items-center`} >
                  <Text>{item.createdAt}</Text>
                  <ActiveIcon name={'menu'} size={26} />
                </View>
              </View>
              {/* Thread */}
              <Text>{item.thread}</Text>
              {/* Post */}
              {item.post && (
                <Image source={item.post} style={tw`w-full h-[${hp(30)}px] rounded-2xl`} contentFit='cover'/>
              )}
              {/* Other Users Action */}
              <View style={tw`flex-row gap-3 items-center`} >
                <View style={tw`flex-row gap-1 items-center`} >
                  <ActiveIcon name={'heart'} />
                  <Text>{item.likes}</Text>
                </View>
                <View style={tw`flex-row gap-1 items-center`} >
                  <ActiveIcon name={'message'} />
                  <Text>{item.comments}</Text>
                </View>
                <View style={tw`flex-row gap-1 items-center`} >
                  <ActiveIcon name={'send'} strokeWidth={1.5} />
                  <Text>{item.shared}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
  )
}

export default ThreadCard