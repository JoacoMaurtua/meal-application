import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

import CategoryGrid from "../components/CategoryGrid";

function renderCategoryItem(itemData){
  return <CategoryGrid title={itemData.item.title} color={itemData.item.color}/>
}

function CategoriesScreen(){
  return(
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}


export default CategoriesScreen;















