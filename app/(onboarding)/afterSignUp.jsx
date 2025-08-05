import React from 'react'
import { Text, View } from 'react-native'

const AfterSignUp = () => {
  return (
    <View>
      <Text>AfterSignUp</Text>
      {setTimeout(() => {
        router.replace('home')
      }, 1000)}
    </View>
  )
}

export default AfterSignUp