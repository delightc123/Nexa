// this is a wrapper for the screen to make the app responsive for both android and ios

import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import tw from 'twrnc'

const ScreenWrapper = ({children , bg }:{children:React.ReactNode, bg:string}) => {
    const {top} = useSafeAreaInsets()
    const paddingTop = top>0 ? top+5 : 30
  return (
    <View style={tw`flex-1 pt-[${paddingTop}px] bg-[${bg}]`}>
      {children}
    </View>
  )
}

export default ScreenWrapper