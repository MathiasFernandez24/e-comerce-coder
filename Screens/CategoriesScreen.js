import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, FlatList, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Searcher from '../Components/Searcher'
import { colors } from '../Styles/Colors'
import { CATEGORIES } from '../Data/Categories'
import ListIndex from '../Components/List/ListIndex'
import { MaterialIcons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import Categories, { selectCategory } from '../Features/Categories'
import { setProductsByCategory } from '../Features/Products'
import { login, logout } from '../Features/Auth'


const CategoriesScreen = ({ navigation }) => {

    const [input, setInput] = useState("")
    const [categoriesFilter, setCategoriesFilter] = useState([])

    const { categories } = useSelector(state => state.categories.value)
    const dispatch = useDispatch()
    // console.log(categories);

    // const categories = useSelector(state => state.categories.value)
    //console.log(CATEGORIES);

    const logout2 = () => {
        dispatch(logout(login.state))

    }
    const handleErase = () => {
        setInput("");
    }

    useEffect(() => {
        if (categories.length !== 0) {
            if (input === "") { setCategoriesFilter(categories) }
            else {
                // console.log("Se ejecuta el efecto");
                //utilize CATEGORIES en lugar de categoriesFilter, para que filtre al modificar cada letra 
                const categoriasFiltradas = categories.filter(category => category.category.toLowerCase().includes(input.toLowerCase()))
                setCategoriesFilter(categoriasFiltradas)
            }
        } else { }
    }, [input])



    const handleSelectedCategory = (category) => {
        // console.log(category);
        //handleCategory(category)

        dispatch(setProductsByCategory(category.id))
        dispatch(selectCategory(category.id))
        navigation.push("Products", {
            categoryId: category.id,
            categoryTitle: category.category,
        })
    }

    return (
        <>

            {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1, }}> */}
            {/* <Header /> */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Searcher additionalStyles={{
                        backgroundColor: colors.secundario
                    }}>
                        <TextInput
                            value={input}
                            onChangeText={setInput}
                            keyboardType="default"
                            style={styles.input}
                            placeholder="Ingrese categoria a buscar"
                        />
                        <TouchableOpacity onPress={handleErase}>
                            {/* <MaterialIcons name="delete-forever" size={36} color="black" /> */}
                            <MaterialIcons name="delete-forever" size={36} color="black" style={{ margin: 8 }} />
                        </TouchableOpacity>
                    </Searcher>
                    <TouchableOpacity style={styles.logout} onPress={logout2}>
                        <Text style={styles.logoutText}>Cerrar usuario</Text>
                    </TouchableOpacity>
                    <View style={styles.listContainer}>
                        {categoriesFilter.length !== 0 ?
                            <ListIndex data={categoriesFilter} onPress={handleSelectedCategory} />
                            :
                            <Text>"El criterio de busqueda no coincide con ninguna categoria"</Text>}

                        {console.log("----categorias en el filtro => " + categoriesFilter.length)}
                    </View>
                </View>
            </TouchableWithoutFeedback>
            {/* </KeyboardAvoidingView> */}
        </>
    )
}

export default CategoriesScreen

const styles = ({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        // justifyContent: 'center',
        width: "100%",
        height: "100%",
    },
    input: {
        flex: 1,
        width: "50%",
        padding: 10,
        marginVertical: 10,
        backgroundColor: colors.terciario,
        borderRadius: 10,
        height: 50,
        borderWidth: 1,
    },
    listContainer: {
        flex: 1,
    },
    logout: {
        marginBottom: 15,
        padding: 5,
        backgroundColor: colors.secundario,
        borderRadius: 5,
        borderWidth: 1,

    },
    logoutText: {
        fontSize: 20,
    }

})