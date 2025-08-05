import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import ActiveIcon from '../../components/ActiveIcon'
import Loading from '../../components/Loading'
import ScreenWrapper from '../../components/ScreenWrapper'
import Search from '../../components/Search'
import { shareToUser } from '../../constants/data'
import { hp, wp } from '../../helpers/common'

const Share = () => {
  return (
    <ScreenWrapper bg='white' >
      <View style={tw`h-full`} >
        {/* Search */}
        <View style={tw`flex-row px-[${wp(4)}px] items-center gap-4 `} >
          <Search/>
          <View>
            <ActiveIcon name={'profile'} />
          </View>
        </View>
        {/* Suggested profile */}
        <View style={tw`px-[${wp(4)}px] mt-6 flex-1 `} >
          <FlatList
            data={shareToUser}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={tw`px-[${wp(4)}px] gap-12`}
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={tw`gap-6 pb-32 justify-center `}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {}} style={tw`flex-1 gap-3 items-center `} >
                <Image source={item.profilePic} contentFit='contain' style={tw`w-18 h-18 rounded-full`} />
                <Text style={tw``} >{item.userName}</Text>
              </TouchableOpacity>
            )}
            onEndReached={() => {

            }}
            onEndReachedThreshold={0}
            ListFooterComponent={shareToUser.length == 0 ? (
              <Loading/>
            ):(
              <View>
                <Text style={tw`text-center`} >No more users</Text>
              </View>
            )

            }
          />
        </View>
        {/* other share method */}
        <View style={tw`p-6 pb-[${hp(3)}px] px-[${wp(4)}px] rounded-t-3xl border-t-0 shadow shadow-gray-400 flex-row gap-4 `} >
          <TouchableOpacity style={tw`gap-3`} >
            <View style={tw`bg-gray-300/50 p-5 rounded-full`} >
              <ActiveIcon name={'share'} size={30} strokeWidth={1.5} />
            </View>
            <Text style={tw`text-center`} >Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`gap-3`} >
            <View style={tw`bg-green-400/80 p-5 rounded-full`} >
              <ActiveIcon name={'messenger'} size={30} />
            </View>
            <Text style={tw`text-center`} >Messenger</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Share