import { useWindowDimensions, Button, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import CategoryItem from '../Components/List/CategoryItem'
import ListIndex from '../Components/List/ListIndex'
import { PRODUCTS } from '../Data/Products'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../Features/Cart'
import { colors } from '../Styles/Colors'



const DetailScreen = ({ route, navigation
}) => {

    // const { productId } = route.params
    const { productSelected } = useSelector(state => state.products.value)
    // console.log(productId);

    // const product =
    // {
    //     id: 1,
    //     category: 1,
    //     description: "Product 1",
    //     price: 29.99,
    //     image: "https://picsum.photos/200/300",
    // }


    // const handleBack = () => { navigation.goBack() }
    const dispatch = useDispatch();
    const handleAdd = (id) => {
        dispatch(addItem({ id: id }))
    }

    const { width, height } = useWindowDimensions()
    // const [product, setProduct] = useState(null)
    const [orientation, setOrientation] = useState("vertical")

    useEffect(() => {
        setOrientation(height > width ? "vertical" : "horizontal")
    }, [height, width])
    // console.log(orientation)


    // useEffect(() => {
    //     const productSelected = PRODUCTS.find(product => product.id === productId);
    //     setProduct(productSelected);
    // }, [productId])

    return (
        productSelected && (
            <>
                {/* <Header title={product.description} /> */}
                <View style={orientation === 'vertical' ? styles.containerVertical : styles.containerHorizontal}>
                    <Image
                        source={{ uri: productSelected?.image }}
                        style={orientation === 'vertical' ? styles.imageVertical : styles.imageHorizontal} />
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={styles.textPrice}>$ {productSelected?.price}</Text>
                        <Text style={{ marginBottom: 20 }}>{productSelected?.description}</Text>
                        <TouchableOpacity style={styles.boton} onPress={() => navigation.goBack()}>
                            <Text style={styles.textBoton}> Go Back</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.boton} onPress={() => handleAdd(productSelected.id)}>
                            <Text style={styles.textBoton}> Add to Cart</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </>
        )
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    containerVertical: {
        flexDirection: 'column',
    },
    containerHorizontal: {
        flex: 1,
        flexDirection: 'row',

    },
    imageVertical: {
        width: 0.94 * Dimensions.get('window').width,
        height: 0.94 * Dimensions.get('window').width,
        resizeMode: 'cover',
        margin: 0.03 * Dimensions.get('window').width,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "black",
    },
    imageHorizontal: {
        width: 0.95 * Dimensions.get('window').width,
        height: 0.75 * Dimensions.get('window').width,
        resizeMode: 'cover',
        marginTop: 0.01 * Dimensions.get('window').height,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "black",
        marginHorizontal: 0.05 * Dimensions.get('window').width,
    },
    textPrice: {
        fontSize: 30,
        fontFamily: "NunitoBlackItalic",
    },
    boton: {
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: colors.terciario,
        padding: 10,
        margin: 8,
        borderColor: colors.secundario,
        borderWidth: 2,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,


    },
    textBoton: {
        fontSize: 15,
        fontFamily: "NunitoRegular",

    }
})