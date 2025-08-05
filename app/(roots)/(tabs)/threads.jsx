import React from 'react'
import { FlatList, Text, View } from 'react-native'
import tw from 'twrnc'
import ActiveIcon from '../../../components/ActiveIcon'
import Loading from '../../../components/Loading'
import ScreenWrapper from '../../../components/ScreenWrapper'
import ThreadCard from '../../../components/ThreadCard'
import { threads } from '../../../constants/data'
import { wp } from '../../../helpers/common'

const Threads = () => {
  return (
    <ScreenWrapper bg='white' >
      <View style={tw`px-[${wp(4)}px]`} >
        {/* Header */}
        <View style={tw`items-center flex-row justify-center mt-4`} >
          <Text style={tw`text-center flex-1 text-2xl`} >Threads</Text>
          <ActiveIcon name={'send'} strokeWidth={1.5} />
        </View>
      </View>
      <View style={tw`mt-4`} >
        {/* Thread Post */}
        <FlatList
          data={threads}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={tw`pb-44`}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => 
          (
            <ThreadCard item={item} />
          )}
          onEndReached={() => {

          }}
          onEndReachedThreshold={0}
          ListFooterComponent={threads.length == 0 ? (
            <Loading/>
          ):(
            <View style={tw`mt-12`} >
              <Text style={tw`text-center`}>No more posts</Text>
            </View>
          )

          }
        />
        
      </View>
    </ScreenWrapper>
  )
}

export default Threads