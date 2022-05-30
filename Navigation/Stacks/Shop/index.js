import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../../../Screens/CategoriesScreen';
import ProductsScreen from '../../../Screens/ProductsScreen';
import DetailScreen from '../../../Screens/DetailScreen';
import { colors } from '../../../Styles/Colors';
import Header from '../../../Components/Header';


const Stack = createNativeStackNavigator();

function ShopNavigator() {
    return (
        <Stack.Navigator initialRouteName="Categories"
            screenOptions={{
                headerStyle: { backgroundColor: colors.primario },
                headerTintColor: "white",
                headerTitleStyle: {
                    fontFamily: "NunitoBlack",
                    fontSize: 28
                },
                headerTitleAlign: "center"

                // headerTransparent: true,
                // header: () => {
                //     return (<Header />)
                // }
            }}>

            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "Categorias",
                }}
            />
            <Stack.Screen
                name="Products"
                component={ProductsScreen}
                options={({ route }) => ({
                    title: route.params.categoryTitle,
                })
                }
            />
            <Stack.Screen
                name="Details"
                component={DetailScreen}
                options={({ route }) => ({
                    title: route.params.productTitle,

                    // title: productSelected.description,  /*AVERIGUAR COMO IMPLEMENTAR ESTA IDEA*/

                    headerTintColor: "black",
                    headerStyle: { backgroundColor: colors.secundario },

                })
                }
            />
        </Stack.Navigator>
    )
}

export default ShopNavigator;

const styles = StyleSheet.create({})