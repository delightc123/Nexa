import { router } from "expo-router";
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import BackButton from "../components/BackButton";
import Inputs from "../components/Inputs";
import OnboardingButton from '../components/OnboardingButton';
import ScreenWrapper from "../components/ScreenWrapper";
import Icon from "../constants/Icon";
import { theme } from "../constants/theme";
import { hp, wp } from '../helpers/common';

const LoginTwo = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const [loading, setLoading] = useState(false)

//   const onSubmit = async() => {
//     if(!emailRef.current || !passwordRef.current){
//       Alert.alert('Login', 'Please fill all fields!')
//       return
//     }

//     let email = emailRef.current.trim()
//     let password = passwordRef.current.trim()

//     setLoading(true)

//     // const {data: {session}, error} = await supabase.auth.signInWithPassword({
//     const {error} = await supabase.auth.signInWithPassword({
//       email,
//       password
//     })

//     setLoading(false)

//     // console.log('session:', session)
//     console.log('error:', error)
//     if(error){
//       Alert.alert('Login', error.message)
//       return
//     }
//   }

    const onSubmit = () => {
        router.push('afterLogin')
    }

  return (
    <ScreenWrapper bg='white'>
      <View style={tw`flex-1 gap-11 px-[${wp(5)}px]`} >
        <BackButton/>

        {/* Welcome */}
        <View>
          <Text style={tw`text-[${hp(4)}px] font-bold text-[${theme.colors.text}] `} >Hey,</Text>
          <Text style={tw`text-[${hp(4)}px] font-bold text-[${theme.colors.text}] `}>Welcome Back</Text>
        </View>

        {/* Form */}
        <View style={tw`gap-6`} >
          <Text style={tw`text-[${hp(1.5)}px] text-[${theme.colors.text}] `} >Please login to continue</Text>
          <Inputs
            icon={<Icon name={'mail'} size={26} strokeWidth={1.6} />}
            placeholder={'Enter your email'}
            onChangeText={value => emailRef.current = value}
          />
          <Inputs
            icon={<Icon name={'lock'} size={26} strokeWidth={1.6} />}
            secureTextEntry
            placeholder={'Enter your password'}
            onChangeText={value => passwordRef.current = value}
          />
          <Text style={tw`text-right font-semibold text-[${theme.colors.text}]`} >Forgot password?</Text>
          {/* Button */}
          <OnboardingButton text={'Login'} onPress={onSubmit} loading={loading} hasShadow= {true}  />
        </View>

        {/* Footer */}
        <View style={tw`flex-row items-center justify-center gap-1`} >
          <Text style={tw`text-[${hp(1.6)}px] text-[${theme.colors.text}] text-center `} >
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push('signUp')} >
            <Text style={tw`text-[${hp(1.6)}px] text-[${theme.colors.rose}] font-semibold text-center `} >Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>  
    </ScreenWrapper>
  )
}

export default LoginTwo