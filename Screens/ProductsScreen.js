import { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Dimensions, useWindowDimensions, Button, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Searcher from '../Components/Searcher'
import { MaterialIcons } from '@expo/vector-icons'
import ListIndex from '../Components/List/ListIndex'
import { PRODUCTS } from '../Data/Products'
import { colors } from '../Styles/Colors'
import { NavigationContainer } from '@react-navigation/native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProductsScreen = ({ category = { id: 1, category: "Ropa" }, navigation, route }) => {

    const { width, height } = useWindowDimensions()
    const [input, setInput] = useState("");
    const [initialProducts, setInitialProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])
    const { categoryId } = route.params
    // console.log(route.params)


    const handleErase = () => {
        setInput("")
    }

    //este UseEffect busca productos según el input
    useEffect(() => {
        if (initialProducts.length !== 0) {
            if (input === "") { setProductsFiltered(initialProducts) }
            else {
                const productosFiltrados = initialProducts.filter(product => product.description.toLowerCase().includes(input.toLowerCase()))
                setProductsFiltered(productosFiltrados)
            }
        } else { }
    }, [input, initialProducts])

    //este UseEffect hace el filtro inicial de productos por categoria
    useEffect(() => {
        const productosIniciales = PRODUCTS.filter(product => product.category === categoryId)
        setInitialProducts(productosIniciales)
    }, [categoryId])

    // console.log(initialProducts);
    // console.log(productsFiltered);

    const handleDetailProduct = (product) => {
        // console.log("se navegara al Details");
        navigation.navigate("Details",
            {
                productId: product.id,
                productTitle: product.description,
            });
        console.log(product)
    }

    return (
        <>
            {/* <Header title={category.category} /> */}
            {/* <View style={{
                        flexDirection: "row",
                        flex: 1
                    }}> */}
            {/* <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            > */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>

                    <Searcher additionalStyles={{
                        backgroundColor: colors.secundario
                    }}>
                        <Button title={"<- Go \n back"} onPress={() => navigation.goBack()} style={{ margin: 10 }} />

                        <TextInput
                            value={input}
                            onChangeText={setInput}
                            keyboardType="default"
                            style={styles.input}
                            placeholder="Ingrese producto a buscar"
                        />

                        <TouchableOpacity onPress={handleErase}>
                            <MaterialIcons name="delete-forever" size={36} color="black" style={{ margin: 8, }} />
                        </TouchableOpacity>

                    </Searcher>
                    {/* </View> */}

                    {/* <Button title="<- Go back" onPress={() => handleCategory(null)} /> */}
                    {/* quite el button a modo de prueba y lo puse dentro de Search para tener mas pantalla */}
                    <View style={{
                        ...styles.listContainer,
                        height: height < 534 ? "76%" : "83%"
                    }}>{console.log(height)}
                        {productsFiltered.length !== 0 ?
                            <ListIndex data={productsFiltered} itemType={"Producto"} onPress={handleDetailProduct} />
                            :
                            <Text>"El criterio de busqueda no coincide con ningun producto disponible"</Text>}
                        {/*----------------------------------------------------- onPress (funcion vacia) */}
                        {/* {console.log("----productos en el filtro => " + productsFiltered.length)} */}
                        {/*aplicar if o similar para determinar si productsFiltered.length es 0, ejecute un texto*/}

                    </View>
                </View>
            </TouchableWithoutFeedback>
            {/* </KeyboardAvoidingView> */}
        </>

    )
}

export default ProductsScreen

const styles = ({

    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        // justifyContent: 'center',
        width: "100%",
    },
    input: {
        flex: 1,
        width: "50%",
        padding: 10,
        marginVertical: 10,
        marginStart: 10,
        backgroundColor: colors.terciario,
        borderRadius: 10,
        height: 50,
        borderWidth: 1,
    },
    listContainer: {
        marginTop: 8,
        // height: "50%", /*cambié por useWindowDimensions*/
    }
})