import { router } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import tw from 'twrnc';
import ActiveIcon from '../../components/ActiveIcon';
import CommentInput from '../../components/CommentInput';
import Comments from '../../components/Comments';
import ScreenWrapper from '../../components/ScreenWrapper';
import { hp, wp } from '../../helpers/common';

const Comment = () => {
  return (
    <ScreenWrapper bg='white' >
      <View style={tw`h-full`} >
        {/* Header */}
        <View style={tw`flex-row items-center justify-center pb-4 border-b-[0.2px] border-gray-300/50 px-[${wp(4)}px] mb-5`} >
          <Text style={tw`text-center flex-1 text-[${hp(1.8)}px] font-medium`} >Comments</Text>
          <ActiveIcon style={tw``} name={'send'} strokeWidth={1.5} onPress={() => router.push('share')} />
        </View>
        {/* Comments */}
        <View style={tw`flex-1`} >
          <FlatList
            data={[1,2,3,4]}
            showsVerticalScrollIndicator = {false}
            contentContainerStyle={tw`gap-6 pb-12`}
            // keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => 
            (
              <Comments item={item} />
            )}
            onEndReached={() => {

            }}
            onEndReachedThreshold={0}
            ListFooterComponent={ false ? (
              <Loading/>
            ):(
              <View style={tw`mt-3`} >
                <Text style={tw`text-center`} >No more posts</Text>
              </View>
            )

            }
          />
        </View>
        {/* Commenting Panel */}
        <CommentInput/>
      </View>
      
    </ScreenWrapper>
  )
}

export default Comment