import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, Alert } from 'react-native'
import { images } from "@/constants/images"
import FormFields from '@/components/FormFields'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { signIn } from '@/lib/appwrite'

const SignIn = () => {

    const [form, setform] = useState({
        email: "",
        password: ""
    })
    const [isSubmitting, setisSubmitting] = useState(false)

    const handleSubmit = async () => {
        if (!form.email || !form.password) {
            Alert.alert("Error,please fill all the fields")
        }
        setisSubmitting(true)

        try {
            await signIn(form.email, form.password)

            // Set it to be a global state

            router.replace("/(tabs)/home")
        } catch (error: any) {
            Alert.alert("Error", error.message)
        } finally {
            setisSubmitting(false)
        }
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center my-6 px-4 min-h-[90vh]'>
                    <Image
                        source={images.logo}
                        className='w-[115px] h-[35px]'
                        resizeMode='contain'
                    />
                    <Text className='text-3xl text-white font-psemibold mt-7'>Login to Aora</Text>

                    <FormFields
                        title="Email"
                        value={form.email}
                        handleChangeText={(e: string) => setform({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormFields
                        title="Password"
                        value={form.password}
                        handleChangeText={(e: string) => setform({ ...form, password: e })}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title='Sign In'
                        handlePress={handleSubmit}
                        containerStyles='mt-7'
                        isLoading={isSubmitting}
                    />

                    <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='text-white font-pregular text-lg'>Don't have an account ?</Text>
                        <Link href="/sign-up" className='text-lg font-pregular text-secondary'>Sign Up</Link>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn
