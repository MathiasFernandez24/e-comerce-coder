import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const Header = ({ title = "E-commerce" }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = ({
    container: {
        backgroundColor: colors.primario,
        paddingVertical: 5,
        // height: 60, /*lo cambie por paddingTop*/
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',


    },
    text: {
        fontSize: 30,
        fontFamily: 'NunitoBlack'
    }
})