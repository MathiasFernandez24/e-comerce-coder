import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import OrderItem from '../Components/OrderItem'
import ORDERS from '../Data/orders'
import { useDispatch } from 'react-redux'
import { getOrders } from '../Features/orders'

const renderItem = ({ item }) => (
    <OrderItem
        item={item}
    />

)

const OrderScreen = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrders)
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={ORDERS}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})