import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(roots)" />
        <Stack.Screen name="(onboarding)" />
        <Stack.Screen name="(screens)" />
        <Stack.Screen name="(menu)" />
      </Stack>
      <StatusBar style='auto' />
    </>
  )
}