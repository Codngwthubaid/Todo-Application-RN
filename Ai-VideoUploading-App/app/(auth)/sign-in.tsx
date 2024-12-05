import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { images } from "@/constants/images"

const Signin = () => {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center my-6 px-4 h-full'>
                    <Image
                        source={images.logo}
                        className='w-[115px] h-[35px]'
                        resizeMode='contain'
                    />
                    <Text className='text-3xl text-white font-psemibold mt-7'>Login to Aora</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Signin

const styles = StyleSheet.create({})