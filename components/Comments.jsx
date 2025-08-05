import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import images from '../constants/images'
import { wp } from '../helpers/common'
import ActiveIcon from './ActiveIcon'

const Comments = () => {
    const userAction = [
        {
            id: 1,

        }
    ]
  return (
    <View style={tw`  border-gray-300`} >
        <View style={tw`px-[${wp(4)}px] flex-row gap-2 `} >
            <TouchableOpacity onPress={() => router.push('userProfile')}>
                {/* Header 1 */}
                <Image source={images.profilePicTest} contentFit='contain' style={tw`w-8 h-8 rounded-full`} />
            </TouchableOpacity>
            <View style={tw`flex-1 gap-3`} >
                {/* Header 2 */}
                <View style={tw`flex-row justify-between items-center `} >
                    <TouchableOpacity onPress={() => router.push('userProfile')} >
                        <Text style={tw`font-medium`} >Name/ username</Text>
                    </TouchableOpacity>
                    <View style={tw`flex-row gap-2 items-center`} >
                        <Text>2min ago</Text>
                        <ActiveIcon name={'threeDotsHorizontal'} size={26} strokeWidth={2}/>
                    </View>
                </View>
                {/* Comment */}
                <Text>So baby, i visualized i took you out one a dinner date, or eat out sort, i dont the scenario of the dinner and all, but on our way back home you was so full and tired you was asleep throughout as i was driving us back home</Text>
                {/* Other Users Action */}
                {/* Create a mapping and a component of this */}
                <View style={tw`flex-row gap-3 items-center`} >
                    <TouchableOpacity style={tw`flex-row gap-1 items-center`} >
                        <ActiveIcon name={'heart'} />
                        <Text>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex-row gap-1 items-center`} onPress={() => {}} >
                        <ActiveIcon name={'message'} />
                        <Text>10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex-row gap-1 items-center`} onPress={() => router.push('share')} >
                        <ActiveIcon name={'send'} strokeWidth={1.5} onPress={() => router.push('share')}  />
                        <Text>50</Text>
                    </TouchableOpacity>
                </View>
                {/* More Comments */}
            </View>
        </View>
    </View>
  )
}

export default Comments