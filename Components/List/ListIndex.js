import { useWindowDimensions, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'
import ProductItem from './ProductItem'

const ListIndex = ({ itemType = "category", data, onPress }) => {

    const { width, height } = useWindowDimensions()


    const fnRender = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => onPress(item)}>
                {itemType === "category" ?
                    <CategoryItem category={item} />
                    :
                    <ProductItem product={item} />}
            </TouchableOpacity>
        )

    }
    return (
        <FlatList
            numColumns={itemType === "category" ? 2 : 1}
            // height > width ? 1 : 2}    // si aplico Ternary, solo renderiza 2 columnas en CategoryScreen si inicializo esa screen en vertical 
            data={data}
            renderItem={fnRender}
            keyExtractor={item => item.id}
        />
    )
}

export default ListIndex

const styles = StyleSheet.create({})