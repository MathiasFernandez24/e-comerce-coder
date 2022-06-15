import { TouchableOpacity, StyleSheet } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LocationsScreen from "../../../Screens/LocationsScreen"
import { colors } from "../../../Styles/Colors";
import { Ionicons } from '@expo/vector-icons';
import SaveLocationScreen from "../../../Screens/SaveLocationScreen";
import GetLocationScreen from "../../../Screens/GetLocationScreen";
import SetLocationScreen from "../../../Screens/SetLocationScreen";


const Stack = createNativeStackNavigator();

const LocationStack = () => {
    return (
        <Stack.Navigator initialRouteName=""
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primario
                },
                headerTintColor: "white",
                headerTitleStyle: {
                    fontFamily: "NunitoBlack",
                    fontSize: 28,
                },
                headerTitleAlign: "center",
                // headerTransparent: true,
                // header: () => {
                //   return <Header/>
                // }
            }}
        >
            <Stack.Screen
                name="Locations"
                component={LocationsScreen}
                options={({ navigation }) => ({
                    title: "Direcciones",
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("Save-location")}>
                                <Ionicons name="add-circle" size={24} color="black" />
                            </TouchableOpacity>
                        )
                    }
                })}
            >
            </Stack.Screen>

            <Stack.Screen
                name="Save-location"
                component={SaveLocationScreen}
                options={
                    {
                        title: "Guardar dirección"
                    }
                }
            />

            <Stack.Screen
                name="Get-location"
                component={GetLocationScreen}
                options={
                    {
                        title: "Obtener ubicación"
                    }
                }
            />

            <Stack.Screen
                name="Set-location"
                component={SetLocationScreen}
                options={
                    {
                        title: "Definir ubicación"
                    }
                }
            />

        </Stack.Navigator>
    )
}

export default LocationStack

const styles = StyleSheet.create({})