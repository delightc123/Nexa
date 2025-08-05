import images from "@/constants/images";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";

import tw from 'twrnc';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={images.logo} resizeMode="contain" style={tw`scale-50`} />
      {/* {setTimeout(() => {
        router.replace('home')
      }, 1200)} */}
      <Text onPress={() => router.push('home')} >Welcome</Text>
    </View>
  );
}
