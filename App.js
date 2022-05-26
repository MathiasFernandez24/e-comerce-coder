import { ActivityIndicator, StyleSheet, View } from 'react-native';
// import { useState } from 'react';
// import CategoriesScreen from './Screens/CategoriesScreen';
// import ProductsScreen from './Screens/ProductsScreen';
import { useFonts } from 'expo-font';
// import DetailScreen from './Screens/DetailScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigator from './Navigation';


export default function App() {

  // const [categorySelected, setCategorySelected] = useState(null);
  // const [productSelected, setProductSelected] = useState(null);

  // const handleCategory = (category) => {
  //   setCategorySelected(category)
  // }
  // const handleProduct = (product) => {
  //   setProductSelected(product)
  // }
  // console.log(categorySelected);
  // console.log(productSelected);

  const [loaded] = useFonts({
    DancingScriptBold: require('./assets/Fonts/DancingScript/static/DancingScript-Bold.ttf'),
    FjallaOneRegular: require('./assets/Fonts/Fjalla_One/FjallaOne-Regular.ttf'),
    NunitoRegular: require('./assets/Fonts/Nunito/static/Nunito-Regular.ttf'),
    NunitoBlack: require('./assets/Fonts/Nunito/static/Nunito-Black.ttf'),
    NunitoBlackItalic: require('./assets/Fonts/Nunito/static/Nunito-LightItalic.ttf'),
    RubikGlitch: require("./assets/Fonts/Rubik_Glitch/RubikGlitch-Regular.ttf")

  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <MainNavigator />
    </SafeAreaView>
  );
}

