import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import OrderItem from '../Components/OrderItem'
import ORDERS from '../Data/orders'

const renderItem = ({ item }) => (
    <OrderItem
        item={item}
    />

)

const OrderScreen = () => {
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