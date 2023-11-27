import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './scr/components/Title/Index';
import Main from './scr/components/Main/Index';
import Form from './scr/components/Form/Index';
import { useFonts } from 'expo-font'

export default function App() {

  const [fontsLoaded] = useFonts({
    "Nunito-Sans": require("./assets/fonts/NunitoSans.ttf"),
    "Nunito-Sans-Italic": require("./assets/fonts/NunitoSans-Italic.ttf"),
    "Josefins-Sans": require("./assets/fonts/JosefinsSans.ttf"),
    "Josefins-Sans-Italic": require("./assets/fonts/JosefinSans-Italic.ttf"),
  })

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16041B',
    paddingTop: 80,
  },
});