// import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import tw from 'twrnc'
import ActiveIcon from '../../../components/ActiveIcon'
import Loading from '../../../components/Loading'
import PostCard from '../../../components/PostCard'
import ScreenWrapper from '../../../components/ScreenWrapper'
import { post } from '../../../constants/data'
import { hp, wp } from '../../../helpers/common'

const Home = () => {
  return (
    <ScreenWrapper bg='white' >
      <View style={tw`px-[${wp(3)}px]`} >
        {/* Header */}
        <View style={tw`justify-between flex-row items-center`} >
          <Text style={tw`text-[${hp(2.5)}px]`} >Nexa</Text>
          <View style={tw`flex-row items-center gap-4`} >
            <ActiveIcon name={'notification'} size={26} onPress={() => router.push('notification')} />
            <ActiveIcon name={'addRounded'} size={26} onPress={() => router.push('createPost')}/>
            <View>
              <ActiveIcon name={'messenger'} size={26} strokeWidth={1.4} onPress={() => router.push('dm')} />
              {/* Code for the new message sign */}
            </View>
          </View>
        </View>
        <View style={tw`mt-6`} >
          {/* Post */}
          <FlatList
            data={post}
            showsVerticalScrollIndicator = {false}
            contentContainerStyle={tw`gap-12 pb-44`}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => 
            (
              <PostCard item={item} />
            )
            }
            onEndReached={() => {

            }}
            onEndReachedThreshold={0}
            ListFooterComponent={post.length == 0 ? (
              <Loading/>
            ):(
              <View>
                <Text style={tw`text-center`} >No more posts</Text>
              </View>
            )

            }
          />
        </View>
      </View>
      
    </ScreenWrapper>
  )
}

export default Home