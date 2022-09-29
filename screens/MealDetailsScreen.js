import { useEffect } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = ({route, navigation}) => {
  const id = route.params.id;
  const title = route.params.title;

  const selectedMeal = MEALS.find(
    (meal) => meal.id === id
  ); 
  
  //Generar titulos dinamicamente
  useEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
    });
  }, [navigation, id]);

  return (
    <View>
      <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
      <Text>{selectedMeal.title}</Text>
      <View>
        
      </View>
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 250,
  }

});