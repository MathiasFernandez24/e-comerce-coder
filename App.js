import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import CategoriesScreen from './Screens/CategoriesScreen';
import ProductsScreen from './Screens/ProductsScreen';

export default function App() {

  const [categorySelected, setCategorySelected] = useState(null)
  const handleCategory = (category) => {
    setCategorySelected(category)
  }

  return (
    <View style={styles.container}>
      {categorySelected ?
        <ProductsScreen category={categorySelected} handleCategory={handleCategory} />
        :
        <CategoriesScreen handleCategory={handleCategory} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //    justifyContent: 'center',
  },
});
