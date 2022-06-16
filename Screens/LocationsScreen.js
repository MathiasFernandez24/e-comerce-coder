import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlaceItem from '../Components/PlaceItems'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getLocations, removeLocationDb } from '../Features/Locations'


const renderItem = ({ item }) => {

    return (
        <PlaceItem
            onSelect={() => { }}
            title={item.title}
            image={item.picture}
            address={item.address}
            id={item.id}
        />
    )
}

const LocationsScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLocations())
    }, [])

    const { locations } = useSelector(state => state.locations.value)
    console.log(locations);
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={locations}
                renderItem={renderItem}
                keyExtractor={location => location.id}

            />
        </View>
    )
}

export default LocationsScreen

const styles = StyleSheet.create({})