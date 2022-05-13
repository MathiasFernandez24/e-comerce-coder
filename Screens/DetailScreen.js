import { useWindowDimensions, Button, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import CategoryItem from '../Components/List/CategoryItem'


const DetailScreen = ({ product, handleProduct }) => {
    const { width, height } = useWindowDimensions()
    const [orientation, setOrientation] = useState("vertical")
    useEffect(() => {
        setOrientation(height > width ? "vertical" : "horizontal")
    }, [height, width])
    console.log(orientation)

    return (
        <>
            <Header title={product.description} />
            <View style={orientation === 'vertical' ? styles.containerVertical : styles.containerHorizontal}>
                <Image
                    source={{ uri: product.image }}
                    style={orientation === 'vertical' ? styles.imageVertical : styles.imageHorizontal} />
                <View>
                    <Text style={styles.textPrice}>$ {product.price}</Text>
                    <Text>{product.description}</Text>
                    <Button onPress={() => handleProduct(null)} title='Go Back' />

                </View>
            </View>
        </>
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
        marginTop: 0.03 * Dimensions.get('window').width,
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
})