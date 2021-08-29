import React from 'react'
import GlobalStyles from '../assets/GlobalStyles'
import {View, Text, TouchableOpacity}from 'react-native'

const AddItemScreen=({navigation})=> {
    return (
        <View style={GlobalStyles.container}>
             <View style={GlobalStyles.container}>
                <Text>Brand Name:{"\n"}
                        Type:{"\n"}
                        Distrinutor:{"\n"}
                        Diet:{"\n"}
                        Calories/Serving:{"\n"}
                        Caffeinated:{"\n"}
                        Gluten Free: </Text>             
            </View>
        <View style={GlobalStyles.container}>
            <TouchableOpacity onPress={()=>{
                navigation.popToTop()
            }}>
            <Text>Add item</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default AddItemScreen