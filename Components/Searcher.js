import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const Searcher = ({ children, additionalStyles }) => {
    return (
        <View style={{ ...styles.searcherContainer, ...additionalStyles }}>
            {children}
        </View>
    )
}

export default Searcher

const styles = StyleSheet.create({

    searcherContainer: {
        flexDirection: 'row',
        backgroundColor: colors.secundario,
        width: "90%",
        height: 120,
        marginVertical: 20,
        borderRadius: 18,

        //Sombras
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

})