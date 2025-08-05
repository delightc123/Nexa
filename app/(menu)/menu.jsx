import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import ActiveIcon from '../../components/ActiveIcon';
import ScreenWrapper from '../../components/ScreenWrapper';
import images from '../../constants/images';
import { hp, wp } from '../../helpers/common';

const Menu = () => {
  const [navigate, setNavigate] = useState('For You')
    const handleNavigate = (data) => {
        setNavigate(data.name)
        data.navigate()
    }
  return (
    <ScreenWrapper>
      <View style={tw`h-full`} >
        {/* Header */}
        <View>
            <Image></Image>
            <View>
                <Text></Text>
                <TouchableOpacity>
                    <Text>View Dasboard</Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* Navigations */}
        <View style={tw`px-[${wp(4)}px] gap-4 `} >
            {
                navigation.map((data, index) => (
                    <TouchableOpacity key={index} style={tw`flex-row items-center gap-4 w-full ${navigate === data.name && 'bg-gray-200/50' } p-3 rounded-2xl`} onPress={() => handleNavigate(data)} >
                        {
                            data.icon && data.icon
                        }
                        <Text style={tw`text-[${hp(1.7)}px] font-medium`} >{data.name}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Menu


export const navigation = [
    {
        id: 1,
        name: 'For You',
        icon: <Image source={images.AlloraLogo} resizeMode="cover" style={tw`w-6 h-6`} />,
        navigate: () => router.push('shop')
    },
    {
        id: 2,
        name: 'In Store',
        icon: <ActiveIcon name={'search'} size={22} strokeWidth={1.5}/>,
        navigate: () => router.push('inStore')
    },
    {
        id: 3,
        name: 'Leaderboard',
        icon: <ActiveIcon name={'mail'} size={22} strokeWidth={1.5}/>,
        navigate: () => router.push('leaderboard')
    },
    {
        id: 4,
        name: 'Cart',
        icon: <ActiveIcon name={'lock'} size={22} strokeWidth={1.5} />,
        navigate: () => router.push('cart')
    },
    {
        id: 4,
        name: 'Wishlist',
        icon: <ActiveIcon name={'lock'} size={22} strokeWidth={1.5} />,
        navigate: () => router.push('wishlist')
    },
    // {
    //     id: 4,
    //     name: 'History',
    //     icon: <ActiveIcon name={'lock'} size={22} strokeWidth={1.5} />,
    //     navigate: () => router.push('history')
    // }
]