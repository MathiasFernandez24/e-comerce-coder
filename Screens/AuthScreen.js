import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../Components/Input'
import { useDispatch } from 'react-redux'
import { signUp } from '../Features/Auth'
import { colors } from '../Styles/Colors'
import { schemaEmail, schemaPassword } from '../Utils/ValidateSchemas'

const LoginScreen = () => {

    const [registroVista, setRegistroVista] = useState(false)
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const dispatch = useDispatch()


    const handleSignup = () => {
        const validateEmail = schemaEmail.validate({ email: email });
        const validatePassword = schemaPassword.validate({ password: password });
        console.log(validateEmail);
        console.log(validatePassword);

        if (validateEmail.error) setPasswordError(validatePassword.error.message)
        else setPasswordError("")

        if (validatePassword.error) setEmailError(validateEmail.error.message)
        else setEmailError("")

        if (password === confirmPassword) {
            console.log("Se registra!");
            setConfirmPasswordError("")
            dispatch(signUp({ email: email, password: password }))
        } else setConfirmPasswordError("No coincide el Password")
    }

    // const registerButton = () => {
    //     setRegistroVista(true)
    // }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{registroVista ? "Registro" : "Login"}</Text>
                <Input label="Email" password={false} onChange={setEmail} value={email} error={emailError} />
                <Input label="Password" password={true} onChange={setPassword} value={password} error={passwordError} />
                {registroVista ?
                    <View>
                        <Input label="Confirm password" password={true} onChange={setConfirmPassword} value={confirmPassword} error={confirmPasswordError} />
                        <Button title="Signup" onPress={handleSignup} />
                        <View style={{ marginTop: 8 }} />
                        <Button title="<- Login" onPress={() => setRegistroVista(false)} />
                    </View>
                    :
                    <View>
                        <Button title="Login" onPress={handleSignup} />
                        <View style={{ marginTop: 8 }} />
                        <Button title="Register" onPress={() => setRegistroVista(true)} />
                    </View>
                }


            </View>
        </View>
    )



    /*RESPALDO*/
    // return (
    //     <View style={styles.container}>
    //         <View style={styles.content}>
    //             <Text style={styles.title}>{registroVista ? "Registro" : "Login"}</Text>
    //             <Input label="Email" password={false} onChange={setEmail} value={email} error={emailError} />
    //             <Input label="Password" password={true} onChange={setPassword} value={password} error={passwordError} />
    //             <Input label="Confirm password" password={true} onChange={setConfirmPassword} value={confirmPassword} error={confirmPasswordError} />
    //             <Button title="Signup" onPress={handleSignup} />
    //         </View>
    //     </View>
    // )




}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secundario
    },
    content: {
        backgroundColor: colors.primario,
        padding: 20,
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    title: {
        fontFamily: 'FjallaOneRegular',
        fontSize: 24,
        textAlign: 'center'
    },

})
