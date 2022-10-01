import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritiesScreen from './screens/FavoritiesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

//congiguraciones del drawer navigator en un componente funcional
function DrawerNavigator(){
  return <Drawer.Navigator>
    <Drawer.Screen name="Categories" component={CategoriesScreen} />
    <Drawer.Screen name="Favorities" component={FavoritiesScreen} />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#f5a442" style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#f5a442' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#f8f8ff' },
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen
            name="Drawer"
            options={{ 
              title: 'All Categories'
             }}
            component={DrawerNavigator}
          />

          <Stack.Screen
            name="MealsOverview"
            options={{ title: 'Meals Overview' }}
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={{
              title: 'Meal Details',
             /*  headerRight: ()=>{          //Ejemplo de elemento de cabecera sin interaccion
                return <Text>Arriba</Text>
              } */
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

/* Utilizo la libreria React Navigation de expo para
   implementar navegacion a la App */

/* El primer Stack.Screen dentro de Stack.Navigator es la primera pagina en mostrarse */

/* Si se desea navegar dentro de un componente que no esta registrado como screen, se puede
   utilizar el hook useNavigation */

/* Para configurar los encabezados y fondos dentro de un NavigationContainer, se puede
   pasar un objeto screenOptions al <Stack.Navigator> para definir estilos predeteminados
   o un objeto options a cada <Stack.Screen> para establecer estilos particulares*/

/* Para agregar elementos en la cabecera, se puede incluir la propiedad headerLeft
   o headerRight, ambas reciben un componente funcional como valor, ahora, si se desea
   agregar un componente que interactue, como un boton, el componente debe definirse aparte*/
