import { useWindowDimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductItem = ({ product }) => {

    const { width, height } = useWindowDimensions()

    return (
        <View>
            <Image source={{ uri: product.image }} style={{
                ...styles.image,
                width: width * 0.8,
                height: width * 0.8,
                marginHorizontal: width * 0.08 /*para que no se vea encimada a los productos la barra de navegacion vertical*/
            }} />
            <Text style={styles.text}>{product.description}</Text>
        </View>
    )
}

export default ProductItem

const styles = ({
    image: {
        // width: 300,
        // height: 300,
        borderRadius: 10,
        // marginHorizontal: 15,   
        /*para que no se vea encimada a los productos la barra de navegacion vertical*/
        borderWidth: 2,
        borderColor: "black",


    },
    text: {
        alignItems: 'center',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 35,
        fontFamily: "NunitoBlackItalic"
    }
})