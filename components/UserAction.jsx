import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import ActiveIcon from './ActiveIcon'

const UserAction = ({ items, key }) => {
  return (
    <TouchableOpacity key={key} style={tw`flex-row gap-1 items-center`} >
        <ActiveIcon name={items.name}/>
        <Text>{items.count}</Text>
    </TouchableOpacity>
  )
}

export default UserAction