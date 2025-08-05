import { Tabs } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import Icon from '../../../constants/Icon'

const TabIcon = ({ focused, icon, title }) => (
    <View style={tw`flex-1 mt-3 flex flex-col items-center`}>
        <Icon name={icon} size={24} strokeWidth={1.5} stroke={''} fill={'white'} outline='none' />
        {/* <Image source={icon} resizeMode='contain' style={tw`size-5`} tintColor={focused ? '#0061ff' : '#666876'} /> */}
        {/* <Text style={tw`${focused ? 'text-[#0061ff] font-medium' : 'text-[#666876] '} w-full text-xs `} >{title}</Text> */}
    </View>
)

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'white',
                position: 'absolute',
                borderTopColor: 'white',
                borderTopWidth: 0,
                minHeight: 70
            }
        }}
    >
        <Tabs.Screen 
            name='home'
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused} icon={'home'} title='Home' />
                )
            }}
        />
        <Tabs.Screen 
            name='shop'
            options={{
                title: 'Shop',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused} icon={'shop'} title='Explore' />
                )
            }}
        />
        <Tabs.Screen 
            name='discover'
            options={{
                title: 'Discover',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused} icon={'discover'} title='Profile' />
                )
            }}
        />
        <Tabs.Screen 
            name='threads'
            options={{
                title: 'Threads',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused} icon={'message'} title='Profile' />
                )
            }}
        />
        <Tabs.Screen 
            name='profile'
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused} icon={'profile'} title='Profile' />
                )
            }}
        />
    </Tabs>
  )
}

export default TabsLayout

