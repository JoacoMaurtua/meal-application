import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import Subtitle from '../components/Subtitle';

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
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />

      <Subtitle>Ingredients</Subtitle>

      <View>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
      </View>

      <Subtitle>Steps</Subtitle>

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
    height: 300,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },

  
});
