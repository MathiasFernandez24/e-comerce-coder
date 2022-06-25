import { Button, Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import renamePathAndMove from '../Utils/renamePath';
import { colors } from '../Styles/Colors';
import { useDispatch } from 'react-redux';
import { addLocation, addLocationDb } from '../Features/Locations';


const SaveLocationScreen = ({ navigation, route }) => {
    const [title, setTitle] = React.useState("")
    const [picture, setPicture] = React.useState("")

    const params = route.params;
    console.log("--------------->");
    console.log(params?.address);

    const dispatch = useDispatch();

    const handlePickLibrary = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setPicture(result.uri);
        }
    }

    const getPermission = async () => {
        const { status } = await ImagePicker.getCameraPermissionsAsync()

        console.log(status);
        if (status !== 'granted') {
            return false
        }
        return true
    }

    const handleTakePicture = async () => {
        const isVerified = getPermission()
        if (!isVerified) {
            return
        }

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        })

        console.log(image);
        setPicture(image.uri);
    }

    const handleConfirm = async () => {
        // const path = await renamePathAndMove(picture);
        // console.log(path);
        let id = Date.now()
        dispatch(addLocation({ title, picture, id, address: params?.address }))
        dispatch(addLocationDb({ title, picture, id, address: params?.address }))
        setTitle("");
        setPicture("");
    }

    const handleLocation = () => {
        navigation.navigate("Get-location")
    }

    const handleSetLocation = () => {
        navigation.navigate("Set-location")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.buttonText}>Nueva dirección</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Ingrese título"
            />
            {picture ?
                <Image
                    source={{ uri: picture }}
                    style={styles.image}
                />
                : null
            }
            <TouchableOpacity onPress={handleTakePicture} style={styles.button}>
                <Text style={styles.buttonText}>Tomar una foto</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePickLibrary} style={styles.button}>
                <Text style={styles.buttonText}>Seleccionar de la galería</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLocation} style={styles.button}>
                <Text style={styles.buttonText}>Obtener mi ubicación</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSetLocation} style={styles.button}>
                <Text style={styles.buttonText}>Definir la ubicación</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleConfirm} style={styles.button}>
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>





        </View>
    )
}

export default SaveLocationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.terciario
    },
    image: {
        width: '90%',
        height: 200,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: colors.primario,
    },
    input: {
        borderBottomWidth: 2,
        fontSize: 24,
        height: 40,
        margin: 8,
        padding: 8
    },
    button: {
        backgroundColor: colors.secundario,
        borderColor: colors.primario,
        borderRadius: 5,
        borderWidth: 2,
        margin: 5,
        padding: 5,

    },
    buttonText: {
        fontFamily: 'NunitoBlack',
        fontSize: 20
    }
})