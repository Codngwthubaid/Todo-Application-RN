import {StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.titleContainer}>Lulla</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    textAlign: "center",
    height: 100,
    gap: 8,
    fontSize:20,
    backgroundColor: "white",
  }
});
