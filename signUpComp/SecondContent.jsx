import { router } from "expo-router";
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import BackButton from "../components/BackButton";
import Inputs from "../components/Inputs";
import OnboardingButton from "../components/OnboardingButton";
import Icon from "../constants/Icon";
import { theme } from "../constants/theme";
import { hp, wp } from '../helpers/common';

const SecondContent = () => {
  const nameRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const [loading, setLoading] = useState(false)

  const [emailPlaceholder, setEmailPlaceholder] = useState('University email');
  const [emailPlaceholderColor, setEmailPlaceholderColor] = useState();

  // const onSubmit = async() => {
  //   if(!emailRef.current || !passwordRef.current || !nameRef.current){
  //     Alert.alert('Sign Up', 'Please fill all fields!')
  //     return
  //   }

  //   // Adding the supabase config for the authentication process
  //   let name = nameRef.current.trim()
  //   let email = emailRef.current.trim()
  //   let password = passwordRef.current.trim()

  //   // University detection
  //   const universityEntry = Object.entries(UNIVERSITY_EMAILS).find(([ending]) =>
  //     email.endsWith(ending)
  //   );

  //   if (!universityEntry) {
  //     setEmailPlaceholder('University email not made available for this app yet');
  //     setEmailPlaceholderColor('red');
  //     emailRef.current = ''; // Optionally clear the input
  //     return;
  //   }

  //   setEmailPlaceholder('University email');
  //   setEmailPlaceholderColor(theme.colors.text);


  //   setLoading(true)
    
  //   const university = universityEntry[1];


  //   const {data: {session}, error} = await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       data: {
  //         name,
  //         university
  //       }
  //     }
  //   })

  //   setLoading(false)

  //   // console.log('session:', session)
  //   // console.log('error:', error)
  //   if(error){
  //     Alert.alert('Sign Up', error.message)
  //   }

  // }

  const onSubmit = () => {
    router.replace('afterSignUp')
  }
  return (
 
      <View style={tw`flex-1 gap-11 px-[${wp(5)}px]`} >
        <BackButton/>

        {/* Welcome */}
        <View>
          <Text style={tw`text-[${hp(4)}px] font-bold text-[${theme.colors.text}] `} >Let's</Text>
          <Text style={tw`text-[${hp(4)}px] font-bold text-[${theme.colors.text}] `}>Get started</Text>
        </View>

        {/* Form */}
        <View style={tw`gap-6`} >
          <Text style={tw`text-[${hp(1.5)}px] text-[${theme.colors.text}] `} >Please fill the details to create an account</Text>
          <Inputs
            icon={<Icon name={'profile'} size={26} strokeWidth={1.6} />}
            placeholder={'John'}
            onChangeText={value => nameRef.current = value}
          />
          <Inputs
            icon={<Icon name={'mail'} size={26} strokeWidth={1.6} />}
            placeholder={emailPlaceholder}
            placeholderTextColor={emailPlaceholderColor}
            onChangeText={value => {
              emailRef.current = value;
              // Reset placeholder if user starts typing again
              if (emailPlaceholder !== 'University email') {
                setEmailPlaceholder('University email');
                setEmailPlaceholderColor('');
              }
            }}
          />
          <Inputs
            icon={<Icon name={'lock'} size={26} strokeWidth={1.6} />}
            secureTextEntry
            placeholder={'*********'}
            onChangeText={value => passwordRef.current = value}
          />

          {/* Button */}
          <OnboardingButton text={'Sign Up'} onPress={onSubmit} loading={loading} hasShadow= {true}  />
        </View>

        {/* Footer */}
        <View style={tw`flex-row items-center justify-center gap-1`} >
          <Text style={tw`text-[${hp(1.6)}px] text-[${theme.colors.text}] text-center `} >
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push('login')} >
            <Text style={tw`text-[${hp(1.6)}px] text-[${theme.colors.rose}] font-semibold text-center `} >Login</Text>
          </TouchableOpacity>
        </View>
      </View>  
  )
}

export default SecondContent