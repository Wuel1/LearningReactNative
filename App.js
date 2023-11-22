import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './scr/components/Title/Index';
import Main from './scr/components/Main/Index';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});