import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.titleContainer}>Lulla</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  }
});
