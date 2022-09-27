import {View, Text, StyleSheet} from 'react-native';

const MealsOverviewScreen = ({route}) => {

  const id = route.params.categoryID;
  const title = route.params.categoryName;

  return (
    <View style = {styles.conrainer}>
      <Text>{title} - {id}</Text>
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