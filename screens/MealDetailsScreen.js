import {View, Text, StyleSheet} from 'react-native';

const MealDetailsScreen = ({route}) => {
  const title = route.params.title;
  const complexity = route.params.complexity;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{complexity}</Text>
    </View>
  )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({

});