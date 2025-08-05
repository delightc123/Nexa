import { router } from 'expo-router'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import ActiveIcon from '../../../components/ActiveIcon'
import ScreenWrapper from '../../../components/ScreenWrapper'
import Search from '../../../components/Search'
import { discoverMenu } from '../../../constants/data'
import { wp } from '../../../helpers/common'

const Discover = () => {
  const [showDiscoverables, setShowDiscoverables] = useState(false)


  const handleShowDiscoverables = () => {
    setShowDiscoverables(true)
  }
  return (
    <ScreenWrapper bg='white' >
      <View style={tw`px-[${wp(4)}px]`} >
        <View style={tw`flex-row items-center gap-3`} >
          {showDiscoverables && (<ActiveIcon name={'arrowLeft'} size={26} strokeWidth={1.5} onPress={() => setShowDiscoverables(false)} />)}
          <Search onPress={handleShowDiscoverables} showSearch={showDiscoverables} />
          <ActiveIcon name={'profile'} size={26}/>
          <ActiveIcon name={'call'} size={26} strokeWidth={1.5}/>
        </View>
      </View>
      {/* Filters */}
      {showDiscoverables && (
        <View style={tw`border-b border-gray-400 flex-row gap-4 mt-2 items-center`} >
          {discoverMenu.map((data, index) => (
            <TouchableOpacity key={index} style={tw`flex-1`} onPress={() => router.push(data.to)} >
              <Text style={tw``} >{data.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScreenWrapper>
  )
}

export default Discover