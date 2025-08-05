import { router } from 'expo-router'
import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import ActiveIcon from '../../components/ActiveIcon'
import BackButton from '../../components/BackButton'
import ScreenWrapper from '../../components/ScreenWrapper'
import Search from '../../components/Search'
import { dmCategory } from '../../constants/data'
import images from '../../constants/images'
import { hp, wp } from '../../helpers/common'

const Dm = () => {

  const [category, setCategory] = useState('Primary')

  const handleCategorySelect = (type) => {
    setCategory(type)
  }
  return (
    <ScreenWrapper>
      <View style={tw`gap-5`} >
        <View style={tw`px-[${wp(4)}px] gap-5`} >
          {/* Header */}
          <View style={tw`flex-row justify-between items-center`} >
            <View style={tw`flex-row gap-3 items-center`} >
              <BackButton/>
              <TouchableOpacity onPress={() => router.push('profile')} >
                <Text style={tw`text-[${hp(2.3)}px] font-semibold `} >angeldavid</Text>
              </TouchableOpacity>
            </View>
            <View style={tw`flex-row gap-3 items-center`} >
              <ActiveIcon name={'threeDotsHorizontal'} strokeWidth={2} />
              <ActiveIcon name={'pencilEdit'} size={24} strokeWidth={2} />
            </View>
          </View>
          {/* Search */}
          <View style={tw`flex-row items-center gap-4 `} >
            <Search/>
            <Text style={tw`font-medium text-blue-600`} >Filter</Text>
          </View>
        </View>
        {/* Category */}
        <View style={tw`pl-5`} >
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tw`gap-3 pr-5 `}>
          {dmCategory.map((data, index) => (
            <TouchableOpacity key={index} style={tw`${category === data.type ? 'bg-blue-200/35' : 'bg-gray-200/50'} p-3 px-[${wp(8)}px] rounded-lg `} onPress={() => handleCategorySelect(data.type)} >
              <Text style={tw`text-[${hp(1.3)}px] font-medium ${category === data.type && 'text-blue-600'}`} >{data.type}</Text>
            </TouchableOpacity>
          ))}
          </ScrollView>
        </View>
        {/* Chat Profiles */}
        {/* Create a FlatList */}
        <View style={tw`px-[${wp(5)}px] mt-3 gap-4`} >
          <View style={tw`flex-row gap-3`} >
            <TouchableOpacity>
              <Image source={images.profilePicTest} resizeMode='contain' style={tw`w-14 h-14 rounded-full`} />
            </TouchableOpacity>
            <TouchableOpacity style={tw`flex-1`} onPress={() => router.push('chat')} >
              <Text style={tw`text-[${hp(1.6)}px] font-medium`} >daniella_maiy</Text>
              <Text style={tw`text-[${hp(1.3)}px]`} >Tap to chat</Text>
            </TouchableOpacity>
            <Text>2min ago</Text>
          </View>
          <View style={tw`flex-row gap-3`} >
            <TouchableOpacity>
              <Image source={images.profilePicTest} resizeMode='contain' style={tw`w-14 h-14 rounded-full`} />
            </TouchableOpacity>
            <TouchableOpacity style={tw`flex-1`} onPress={() => router.push('chat')} >
              <Text style={tw`text-[${hp(1.6)}px] font-medium`} >daniella_maiy</Text>
              <Text style={tw`text-[${hp(1.3)}px]`} >Tap to chat</Text>
            </TouchableOpacity>
            <Text>2min ago</Text>
          </View>
          <View style={tw`flex-row gap-3`} >
            <TouchableOpacity>
              <Image source={images.profilePicTest} resizeMode='contain' style={tw`w-14 h-14 rounded-full`} />
            </TouchableOpacity>
            <TouchableOpacity style={tw`flex-1`} onPress={() => router.push('chat')} >
              <Text style={tw`text-[${hp(1.6)}px] font-medium`} >daniella_maiy</Text>
              <Text style={tw`text-[${hp(1.3)}px]`} >Tap to chat</Text>
            </TouchableOpacity>
            <Text>2min ago</Text>
          </View>
        </View>
        {/* Suggestion */}
        <View style={tw`px-[${wp(5)}px] mt-3 gap-4`} >
          <Text style={tw`text-[${hp(1.6)}px] font-medium`} >Suggestions</Text>
          {/* Suggested Chat */}
          <View style={tw`flex-row gap-3`} >
            <TouchableOpacity>
              <Image source={images.profilePicTest} resizeMode='contain' style={tw`w-14 h-14 rounded-full`} />
            </TouchableOpacity>
            <TouchableOpacity style={tw`flex-1`} onPress={() => router.push('chat')} >
              <Text style={tw`text-[${hp(1.6)}px] font-medium`} >daniella_maiy</Text>
              <Text style={tw`text-[${hp(1.3)}px]`} >Tap to chat</Text>
            </TouchableOpacity>
            <Text>2min ago</Text>
          </View>
        </View>
        
      </View>
    </ScreenWrapper>
  )
}

export default Dm