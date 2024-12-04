import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <Text>Lulla</Text>
      <Link href="/profile" style={{ color: "blue" }}>Profile</Link>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
  }
});
