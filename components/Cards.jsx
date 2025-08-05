import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import images from '../constants/images'
import { hp, wp } from '../helpers/common'


export const FeaturedBrands = () => {
    return (
        <TouchableOpacity style={tw`items-center gap-2`} >
            <Image source={images.profilePicTest} contentFit='contain' style={tw`w-9 h-9 rounded-full`} />
            <Text style={tw`text-center`} >Brand Name</Text>
        </TouchableOpacity>
    )
}

export const FeaturedProduct = () => {
    return (
        <TouchableOpacity style={tw`rounded-3xl bg-gray-200/50 `}  >
            {/* Product Image */}
            <Image source={images.product.product1} contentFit='' style={tw`h-[${hp(16)}px] w-[${wp(40)}px] rounded-t-3xl`} />
            <View style={tw`flex-row p-3 gap-3`} >
                {/* Brand Image */}
                <Image source={images.profile.profile1} contentFit='contain' style={tw`w-8 h-8 rounded-full`} />
                <View style={tw`gap-3`} >
                    <Text>Product Description</Text>
                    <Text>Brand Name</Text>
                </View>
            </View>
        </TouchableOpacity>
)
}

export const YourDeals = () => {
  return (
    <TouchableOpacity>
        <View>
            {/* Product Image */}
            <Image source={images.product.product1} contentFit='' style={tw`h-[${hp(16)}px] w-[${wp(40)}px] rounded-t-3xl`} />
            <View>
            {/* Brand Image */}
            <Image source={images.product.product1} contentFit='' style={tw`h-[${hp(16)}px] w-[${wp(40)}px] rounded-t-3xl`} />
            </View>
        </View>
      
    </TouchableOpacity>
  )
}

