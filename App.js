import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#f5a442"
      />
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({

});
