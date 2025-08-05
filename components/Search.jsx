import React from 'react'
import { TextInput, View } from 'react-native'
import tw from 'twrnc'
import { wp } from '../helpers/common'
import ActiveIcon from './ActiveIcon'

const Search = ({ onPress, styles, showSearch }) => {
  return (
    <View style={tw`p-[3px] px-[${wp(2)}px] rounded-2xl flex-row gap-2 items-center bg-gray-200/50 flex-1 ${styles} `} >
        {!showSearch && (
          <ActiveIcon name={'search'} size={20} strokeWidth={1.5} onPress={onPress} />
        )}
        <TextInput placeholder='Search' onPress={onPress} onChangeText={onPress}  />
    </View>
  )
}

export default Search