import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const DetailScreen = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: item.Image }}
                style={styles.image} />

            <Text>{item.description}</Text>
            <Text>$ {item.price}</Text>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',

    },
    image: {
        width: 0.8 * Dimensions.get(window).width,
        height: 300,
        resizeMode: 'cover',
    }
})