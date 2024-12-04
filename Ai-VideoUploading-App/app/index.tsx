import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'


const App = () => {
  return (
    <View className='w-full bg-black flex-1 justify-center items-center'>
      <Link href="/profile" className='text-blue-500 font-semibold'>Go to Profile</Link>   
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
