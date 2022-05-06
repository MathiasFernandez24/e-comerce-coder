import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';

export default function App() {
  return (
    <View style={styles.container}>

      <CategoriesScreen />

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
