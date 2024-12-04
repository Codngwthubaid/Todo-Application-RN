import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

export default function RootLayout() {
  return (
    // <View>
    //   <Text style={styles.lulla}>RootLayout</Text>
    // </View>
    <>
      {/* <Text>Header</Text>
      <Slot />
      <Text>Footer</Text> */}
      <Stack>
        <Stack.Screen name='index' options={{headerShown : false}} />
      </Stack>
    </>
  )
}

// const styles = StyleSheet.create({
// lulla :{
//   backgroundColor: "white",
//   fontSize : 50,
//   margin: 10,
// }
// })