import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Profile = () => {
  return (
    <View>
      <Text style={styles.profile}>Profile</Text>
      <StatusBar style='auto'/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  profile: {
    backgroundColor: "red",
    fontSize:30,
    color: "white",
  }
})