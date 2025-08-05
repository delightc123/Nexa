import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import ActiveIcon from '../../../components/ActiveIcon'
import { FeaturedBrands, FeaturedProduct } from '../../../components/Cards'
import ScreenWrapper from '../../../components/ScreenWrapper'
import Search from '../../../components/Search'
import SearchResult from '../../../components/SearchResult'
import images from '../../../constants/images'
import { hp, wp } from '../../../helpers/common'

const Shop = () => {
  const [search, setSearch] = useState(false)
  const [showFilters, setShowFilters] = useState(true)


  const handleSetSearch = () => {
    setSearch(prev => !prev)
  }
  if(search){
    return (
      <ScreenWrapper bg='white' >
        <View  style={tw`px-[${wp(4)}px] gap-6`}  >
          {/* Search */}
          <View style={tw`flex-row items-center gap-3`} >
            <ActiveIcon name={'arrowLeft'} size={26} strokeWidth={1.5} onPress={handleSetSearch} />
            <Search styles='bg-white border-[1px] border-gray-300/50 shadow' showSearch={search}/>
          </View>
          {/* Filters */}
          <View>
            
          </View>
          {/* Result */}
          <SearchResult/>
        </View>
      </ScreenWrapper>
    )
  }
  return (
    <ScreenWrapper bg='white' >
      <ScrollView showsVerticalScrollIndicator={false} style={tw`h-full`} contentContainerStyle={tw`pb-24`} bounces={false} >
        <View style={tw`px-[${wp(4)}px] gap-6`} >
          {/* Header */}
          <View style={tw`justify-between flex-row items-center`} >
            <Text style={tw`text-[${hp(2.5)}px]`} >Nexa</Text>
            <View style={tw`flex-row items-center gap-4`} >
              <View>
                <ActiveIcon name={'cart'} size={26} strokeWidth={1.4} onPress={() => router.push('cart')} />
                {/* Code for the new message sign */}
              </View>
              <ActiveIcon name={'menu'} size={26} onPress={() => router.push('menu')} />
            </View>
          </View>
          {/* Featured Images */}
          <View>
            <Image source={images.product.product1} contentFit='contain' style={tw`w-full h-54 rounded-xl`} />
          </View>
          {/* Search */}
          <View style={tw`flex-row`} >
            <Search styles='bg-white border-[1px] border-gray-300/50 shadow' onPress={() => setSearch(true)} />
          </View>
        </View>

        {/* Featured */}
        <View style={tw`mt-8`} >
          
          {/* Brands */}
          <View style={tw`mt-3 px-[${wp(4)}px] gap-4 `} >
            <Text style={tw`text-[${hp(2)}px] font-semibold`} >Featured</Text>
            <View style={tw`flex-row items-center gap-4 flex-wrap`} >
            {[1,2,4,5,6,7,8].map((data, index) => (
              <FeaturedBrands key={index} />
            ))}
            <TouchableOpacity style={tw`items-center gap-2  `} >
              <View style={tw`rounded-full p-2 bg-gray-200/50`} >
                <ActiveIcon name={'arrowRight'} size={24} strokeWidth={2} />
              </View>
              <Text style={tw`text-center`} >All Brands</Text>
            </TouchableOpacity>
            </View>
          </View>
          {/* Product */}
          <View style={tw`pl-[${wp(4)}px] mt-8`} >
            <FlatList
              data={[1,2,3,4]}
              horizontal
              contentContainerStyle={tw` gap-3`}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <FeaturedProduct/>
              )}
            />
          </View>
        </View>

        {/* Your Deals */}
        <View style={tw`pl-[${wp(4)}px] mt-8 gap-4`} >
          <Text style={tw`text-[${hp(2)}px] font-semibold`} >Hot Deals</Text>
          <FlatList
            data={[1,2,3,4]}
            horizontal
            contentContainerStyle={tw` gap-3`}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <FeaturedProduct/>
            )}
          />
        </View>

        {/* Tending */}
        <View style={tw`pl-[${wp(4)}px] mt-8 gap-4`} >
          <Text style={tw`text-[${hp(2)}px] font-semibold`} >Trending 🔥</Text>
          <FlatList
            data={[1,2,3,4]}
            horizontal
            contentContainerStyle={tw` gap-3`}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <FeaturedProduct/>
            )}
          />
        </View>

      </ScrollView>
    </ScreenWrapper>
  )
}

export default Shop


const Header1 = () => {
  return (
    <View>
      <Image source={images.product.product1} style={tw`w-full h-[${hp(55)}px]`} contentFit='cover' />
      {/* Header */}
      <View style={tw`absolute top-12 w-full px-[${wp(4)}p] `} >
        <View style={tw`justify-between flex-row items-center`} >
          <View style={tw`flex-row items-center gap-4`} >
            <ActiveIcon name={'menu'} size={26} color={'white'}/>
            <Text style={tw`text-[${hp(3)}px] text-white font-medium`} >Nexa</Text>
          </View>
          <View style={tw`flex-row items-center gap-4`} >
            <ActiveIcon name={'addRounded'} size={26} color={'white'} />
            <ActiveIcon name={'cart'} size={26} strokeWidth={2} color={'white'}/>
          </View>
        </View>
      </View>
    </View>
  )
}