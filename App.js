import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#f5a442" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen}/>
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({


});


/* Utilizo la libreria React Navigation de expo para
   implementar navegacion a la App */

/* El primer Stack.Screen dentro de Stack.Navigator es la primera pagina en mostrarse */

/* Si se desea navegar dentro de un componente que noe esta registrado como screen, se puede
   utilizar el hook useNavigation */