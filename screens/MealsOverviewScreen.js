import {View, Text, StyleSheet, FlatList} from 'react-native';

import {MEALS} from '../data/dummy-data';

const MealsOverviewScreen = ({route}) => {

  const id = route.params.categoryID;
  const title = route.params.categoryName;

  //Hacer Match entre las comidas y a que categorias pertenecen
  const displayedMeals = MEALS.filter((mealItem) => (
    mealItem.categoryIds.indexOf(id) >= 0
  ));

  function renderMealItem(itemData){

  }

  return (
    <View style = {styles.conrainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      
      />
    </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  conrainer:{
    flex:1,
    padding: 16,
  }
})

/* Cualquier componenete registrado como screen puede acceder como prop a route */

/* Para utilizar route en un componente no registrado como screen, se puede usar useRoute */