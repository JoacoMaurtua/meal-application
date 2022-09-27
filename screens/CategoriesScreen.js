import { FlatList, View, Text, ScrollView, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

import CategoryGrid from '../components/CategoryGrid';

function renderCategoryItem(itemData) {
  return (
    <CategoryGrid title={itemData.item.title} color={itemData.item.color} icon={itemData.item.icon}/>
  );
}

//reto personal: hacerlo con scrollable
function CategoriesScreen() {
  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(index) => index.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  categoriesContainer: {
    felx: 1,
    marginTop: 45,
  },
});

//Version Alternativa a FlatList
{
  /* <View>
        <ScrollView>
          {CATEGORIES.map((category, index) => (
            <Text>{category.title}</Text>
            <Image source={{uri:category.icon}}/>
          ))}
        </ScrollView>
    </View> */
}
