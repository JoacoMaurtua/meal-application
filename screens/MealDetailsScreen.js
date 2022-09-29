import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = ({ route, navigation }) => {
  const id = route.params.id;
 
  const selectedMeal = MEALS.find((meal) => meal.id === id);

  //Generar titulos dinamicamente
  useEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
    });
  }, [navigation, id]);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      <View>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
      </View>
      <Text>Steps</Text>
      <View>
        {selectedMeal.steps.map((step) => (
          <Text key={step}>{step}</Text>
        ))}
      </View>

    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
});
