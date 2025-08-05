import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import { hp } from '../helpers/common'
import ActiveIcon from './ActiveIcon'

const PostCard = ({item}) => {

    const userActionTypes = [
        {
            name: 'heart',
            count: item.likes,
        },
        {
            name: 'message',
            count: item.comments,
        },
        {
            name: '',
            // strokeWidth: 1.5,
            count: item.share,
        }
    ]
  return (
    <View style={tw`p-[8px] border-[1px] border-gray-300 shadow-gray-500 gap-4 rounded-2xl`} >
        {/* Heading */}
        <View style={tw`flex-row justify-between items-center`} >
            <TouchableOpacity style={tw`gap-2 flex-row items-center`} >
                <Image source={item.profilePic} contentFit='contain' style={tw`w-8 h-8 rounded-xl`} />
                <View>
                    <Text>{item.user.userName}</Text>
                    <Text>{item.user.lvl}</Text>
                    {/* <Text>{item.level} lvl</Text> */}
                </View>
            </TouchableOpacity>
            <ActiveIcon name={'threeDotsHorizontal'} size={26} strokeWidth={2} />
        </View>
        {/* Post */}
        <View style={tw``} >
            <Image source={item.post} style={tw`w-full h-[${hp(50)}px] rounded-2xl`} contentFit='cover' />
        </View>
        {/* Other Users Action */}
        <View style={tw`flex-row gap-3 items-center`} >
            <View style={tw`flex-row gap-1 items-center`} >
                <ActiveIcon name={'heart'} />
                <Text>{item.likes}</Text>
            </View>
            <View style={tw`flex-row gap-1 items-center`}  >
                <ActiveIcon name={'message'} onPress={() => router.push('comment')} />
                <Text>{item.comments}</Text>
            </View>
            <View style={tw`flex-row gap-1 items-center`}    >
                <ActiveIcon name={'send'} strokeWidth={1.5} onPress={() => router.push('share')} />
                <Text>{item.shared}</Text>
            </View>
            {/* {userActionTypes.map((item, index) => (
                <UserAction key={index} items={item} />
            ))} */}
        </View>
        {/* Post Details */}
        <View>
            <View style={tw`flex-row gap-2`} >
            <Text style={tw`font-medium`} >{item.userName}</Text>
            <Text>{item.description}</Text>
            </View>
            <TouchableOpacity>
            <Text>View all comments</Text>
            </TouchableOpacity>
        </View>
        {/* Post Date/Time */}
        <Text>{item.createdAt}</Text>
    </View>
  )
}

export default PostCard