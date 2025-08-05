import { router } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'
import ScreenWrapper from '../../components/ScreenWrapper'

const AfterLogin = () => {
  const GoHome = () => {

  }
  GoHome()
  return (
    <ScreenWrapper>
      <Text>AfterLogin</Text>
      {setTimeout(() => {
        router.replace('home')
      }, 1000)}
    </ScreenWrapper>
  )
}

export default AfterLogin