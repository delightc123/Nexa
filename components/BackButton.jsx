import { useRouter } from 'expo-router'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import Icon from '../constants/Icon'

const BackButton = ({size= 26}) => {
  const router = useRouter()
  return (
    <TouchableOpacity onPress={() => router.back()} style={tw`items-center justify-center`}>
      <Icon name={'arrowLeft'} strokeWidth={1.5} size={size} color={'black'} />
    </TouchableOpacity>
  )
}

export default BackButton