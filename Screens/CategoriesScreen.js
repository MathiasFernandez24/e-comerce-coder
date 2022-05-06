import { FlatList, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Searcher from '../Components/Searcher'
import { colors } from '../Styles/Colors'
import { CATEGORIES } from '../Data/Categories'
import ListIndex from '../Components/List/ListIndex'


const CategoriesScreen = () => {
    const [input, setInput] = useState("")
    const [categoriesFilter, setCategoriesFilter] = useState(CATEGORIES)

    useEffect(() => {
        if (input === "") setCategoriesFilter(CATEGORIES)
        else {
            console.log("se ejecuta el efecto");
            categoriasFiltradas = categoriesFilter.filter(category => category.category.toLowerCase().includes(input.toLowerCase()))
            setCategoriesFilter(categoriasFiltradas)
        }

    }, [input])

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Searcher additionalStyles={{
                    backgroundColor: colors.secundario
                }}>
                    <TextInput
                        value={input}
                        onChangeText={setInput}
                        keyboardType="default"
                        style={styles.input}
                    />
                    <TouchableOpacity>
                        <Text>Find</Text>
                    </TouchableOpacity>
                </Searcher>
                <View style={styles.listContainer}>
                    <ListIndex data={categoriesFilter} />
                </View>
            </View>
        </>
    )
}

export default CategoriesScreen

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