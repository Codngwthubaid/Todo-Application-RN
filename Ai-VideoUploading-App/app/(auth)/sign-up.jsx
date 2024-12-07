import React, { useState } from 'react'
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import images from "../../constants/images"
import FormFields from '../../components/FormFields'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import createUser from "../../lib/appwrite"

const SignUp = () => {
  const [isSubmitting, setisSubmitting] = useState(false)
  const [form, setform] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleSubmit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error,please fill all the fields")
    }
    setisSubmitting(true)

    try {
      const result = await createUser(form.email, form.password, form.username)

      // Set it to be a global state

      router.replace("/(tabs)/home")
    } catch (error) {
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
          <Text className='text-3xl text-white font-psemibold mt-7'>SignUp to Aora</Text>

          <FormFields
            title="Username"
            value={form.username}
            handleChangeText={(e) => setform({ ...form, username: e })}
            otherStyles="mt-20"
          />
          <FormFields
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormFields
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title='Sign Up'
            handlePress={handleSubmit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-white font-pregular text-lg'>Already have an account</Text>
            <Link href="/sign-in" className='text-lg font-pregular text-secondary'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
