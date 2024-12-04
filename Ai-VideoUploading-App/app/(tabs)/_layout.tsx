import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function RootLayout() {
  return (
    <View>
      <Text style={styles.lulla}>RootLayout</Text>
    </View>
  )
}

const styles = StyleSheet.create({
lulla :{
  backgroundColor: "white",
  fontSize : 50,
  margin: 10,
}
})