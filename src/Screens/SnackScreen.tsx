import React from 'react'
import GlobalStyles from '../assets/GlobalStyles'
import {Text, TouchableOpacity, View} from 'react-native'

const SnackScreen=({navigation})=> {
    return (
        <View style={GlobalStyles.container}>
            <Text>Snack Screen</Text>
            <View style={GlobalStyles.footer}>
                <TouchableOpacity onPress={()=>navigation.push('Edit')}>
                    <Text>Edit or Delete Snack</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>navigation.push('Add')}>
                    <Text>Add a Snack</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default SnackScreen