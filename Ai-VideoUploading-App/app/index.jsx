import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../constants/images"
import CustomButton from '../components/CustomButton'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  const router = useRouter()

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className='flex justify-center items-center py-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[85px]'
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            className='w-full max-w-[380px] h-[300px]'
            resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className='text-4xl font-bold text-white text-center'>Discover Endless Possibilities with{" "}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>

            <Image
              source={images.path}
              className='w-[130px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>
          <Text className='text-sm font-pregular mt-10 text-white text-center'>Where creativity meets innovations: embark on a journey of limitless exploration with Aora</Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles='w-full mt-10'
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}

export default App
