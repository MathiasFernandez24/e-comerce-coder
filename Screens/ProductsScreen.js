import { Button, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'
import Searcher from '../Components/Searcher'
import { MaterialIcons } from '@expo/vector-icons'
import ListIndex from '../Components/List/ListIndex'
import { PRODUCTS } from '../Data/Products'
import { colors } from '../Styles/Colors'


const ProductsScreen = ({ category = { id: 1, category: "Ropa" }, handleCategory }) => {

    const [input, setInput] = useState("");
    const [initialProducts, setInitialProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])

    const handleErase = () => {
        setInput("")
    }

    //este UseEffect busca productos según el input
    useEffect(() => {
        if (initialProducts.length !== 0) {
            if (input === "") { setProductsFiltered(initialProducts) }
            else {
                const productosFiltrados = PRODUCTS.filter(product => product.description.toLowerCase().includes(input.toLowerCase()))
                setProductsFiltered(productosFiltrados)
            }
        } else { }
    }, [input, initialProducts])

    //este UseEffect hace el filtro inicial de productos por categoria
    useEffect(() => {
        const productosIniciales = PRODUCTS.filter(product => product.category === category.id)
        setInitialProducts(productosIniciales)
    }, [])

    console.log(initialProducts);
    console.log(productsFiltered);

    return (
        <>
            <Header title={"category".category} />
            <View style={styles.container}>
                <Searcher additionalStyles={{
                    backgroundColor: colors.secundario
                }}>
                    <TextInput
                        value={input}
                        onChangeText={setInput}
                        keyboardType="default"
                        style={styles.input}
                        placeholder="Ingrese producto a buscar"
                    />
                    <TouchableOpacity onPress={handleErase}>
                        <MaterialIcons name="delete-forever" size={36} color="black" />
                    </TouchableOpacity>
                </Searcher>
                <View style={styles.listContainer}>
                    <ListIndex data={productsFiltered} itemType={"Producto"} />
                    <Button title="Go back" onPress={() => handleCategory(null)} />
                </View>
            </View>
        </>

    )
}

export default ProductsScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        // justifyContent: 'center',
        width: "100%",
    },
    input: {
        flexDirection: 'column',
        width: "80%",
        padding: 10,
        margin: 10,
        backgroundColor: colors.terciario,
        borderRadius: 10,
        height: 50,
        borderWidth: 1,
    }
})