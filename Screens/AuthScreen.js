import { TouchableOpacity, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../Components/Input'
import { useDispatch } from 'react-redux'
import { signUp, login } from '../Features/Auth'
import { colors } from '../Styles/Colors'
import loginValidationSchema from "../Utils/ValidationYup"
// import { schemaEmail, schemaPassword } from '../Utils/ValidateSchemas'
import { Formik } from 'formik';

const LoginScreen = () => {

    const [registroVista, setRegistroVista] = useState(false)
    // ---------------------------------
    // const [email, setEmail] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const [password, setPassword] = useState("");
    // const [passwordError, setPasswordError] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    // --------------------------------------
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const dispatch = useDispatch()


    // MATHIAS 2 BOTONES, LOGIN y SINGUP
    // const handleSignup = () => {
    //     const validateEmail = schemaEmail.validate({ email: email });
    //     const validatePassword = schemaPassword.validate({ password: password });
    //     console.log(validateEmail);
    //     console.log(validatePassword);

    //     if (validateEmail.error) setPasswordError(validatePassword.error.message)
    //     else setPasswordError("")

    //     if (validatePassword.error) setEmailError(validateEmail.error.message)
    //     else {
    //         setEmailError("")
    //         setPasswordError("")
    //     }

    //     if (password === confirmPassword) {
    //         console.log("Se registra!");
    //         setConfirmPasswordError("")
    //         dispatch(signUp({ email: email, password: password }))
    //     } else { setConfirmPasswordError("No coincide el Password") }
    // }

    // const handleLogin = () => {
    //     dispatch(login({ email: email, password: password }));
    //     setEmailError("")
    //     setPasswordError("")
    // }



    // -------------------------------
    const handleSubmit = (values) => {
        console.log(values);
        console.log("Se submiteo un form válido");
        if (registroVista) {
            if (values.password === values.confirmPassword) {
                console.log("Se registra!");
                dispatch(signUp({ email: values.email, password: values.password }))
            } else {
                setConfirmPasswordError("Los passwords deben coincidir")
            }
        }
        else {
            console.log("Entra al login");
            dispatch(login({ email: values.email, password: values.password }));
        }
    }
    // -------------------------------

    // MATHIAS LO HIZO
    // return (
    //     <View style={styles.container}>
    //         <View style={styles.content}>
    //             <Text style={styles.title}>{registroVista ? "Registro" : "Login"}</Text>
    //             <Input label="Email" password={false} onChange={setEmail} value={email} error={emailError} />
    //             <Input label="Password" password={true} onChange={setPassword} value={password} error={passwordError} />
    //             {registroVista ?
    //                 <View>
    //                     <Input label="Confirm password" password={true} onChange={setConfirmPassword} value={confirmPassword} error={confirmPasswordError} />
    //                     <Button title="Signup" onPress={handleSignup} />
    //                     <View style={{ marginTop: 8 }} />
    //                     <Button title="<- Login" onPress={() => setRegistroVista(false)} />
    //                 </View>
    //                 :
    //                 <View>
    //                     <Button title="Login" onPress={handleLogin} />
    //                     <View style={{ marginTop: 8 }} />
    //                     <Button title="Register" onPress={() => setRegistroVista(true)} />
    //                 </View>
    //             }


    //         </View>
    //     </View>
    // )



    /*EJ PROFE*/
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{registroVista ? "Registro" : "Login"}</Text>
                <Formik
                    onSubmit={handleSubmit}
                    initialValues={{ email: "", password: "", confirmPassword: "" }}
                    validationSchema={loginValidationSchema}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {({ handleChange, errors, handleSubmit, values, handleBlur }) => (
                        <>
                            <Input label="Email" password={false} onChange={handleChange('email')} value={values.email} error={errors.email} onBlur={handleBlur('email')} />
                            <Input label="Password" password={true} onChange={handleChange('password')} value={values.password} error={errors.password} onBlur={handleBlur('password')} />
                            {registroVista && <Input label="Confirm password" password={true} onChange={handleChange('confirmPassword')} value={values.confirmPassword} onBlur={handleBlur('confirmPassword')} error={confirmPasswordError} />}
                            {registroVista ?
                                <Button title="Signup" onPress={handleSubmit} />
                                :
                                <Button title="Login" onPress={handleSubmit} />
                            }
                            <View style={styles.textContainer}>
                                {registroVista ?
                                    <TouchableOpacity onPress={() => setRegistroVista(false)}>
                                        <Text>¿Ya tienes cuenta? <Text
                                            style={styles.link}
                                        >Login</Text></Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => setRegistroVista(true)}
                                    >
                                        <Text>¿No tienes cuenta? <Text
                                            style={styles.link}
                                        >¡Crea una!</Text></Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </>
                    )}
                </Formik>

            </View>
        </View>
    )





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
