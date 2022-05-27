import { Dimensions, useWindowDimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/Colors'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CategoryItem = ({ category }) => {
    const { width, height } = useWindowDimensions();

    // console.log(windowWidth, windowHeight)
    return (
        <View style={{
            ...styles.container,
            maxWidth: width * 0.44,
            maxHeight: width * 0.44, //este width mantiene el ancho inicial al momento de ejecutar la app, lo que logra el efecto alargado de las categorias al girarlo
            margin: width * 0.03,
            /*con useWindowDimensions da el mismo error que en (styles.container -> margin) usando Dimensions*/
        }}>
            <Text style={styles.text}>{category.category}</Text>
        </View>
    )
}

export default CategoryItem

const styles = ({
    container: {
        // maxWidth: windowWidth * 0.44,
        // maxHeight: windowWidth * 0.44,
        width: 3000,
        height: windowWidth * 0.44,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 8,
        backgroundColor: colors.terciario,

        // margin: windowWidth * 0.03,
        /*0.03 de margin * 4 bordes =0.12 | 1.00 ancho pantalla -0.12= 0.88| 0.88/2 =0.44 disponible para cada categoria
        averiguar por que aumenta marginVertical cuanto aumento height, deberia ser el mismo margin para los 4 orientaciones (en este caso un 3% de la pantalla horizontal)
        en web parece funcionar correctamente*/

        borderRadius: 10,


        //Sombras
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    text: {
        fontSize: 17,
        fontFamily: "RubikGlitch"

    }

})