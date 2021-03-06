import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigatorLogged from './Tabs/UserLogged'
import AuthStack from './Stacks/Auth'
import { useSelector } from 'react-redux'

const MainNavigator = () => {

    const { user } = useSelector(state => state.auth.value)
    console.log(user);

    //const [user, setUser] = useState(false)
    return (
        <NavigationContainer>
            {user.email ?
                /* {true ? */
                <TabNavigatorLogged />
                :
                <AuthStack />
            }
        </NavigationContainer>
    )
}

export default MainNavigator


const styles = StyleSheet.create({})