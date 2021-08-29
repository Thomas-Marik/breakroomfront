import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import GlobalStyles from '../assets/GlobalStyles'

const EditDeleteScreen=({navigation,route}) =>{
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
            <View style={GlobalStyles.footer}>
                <TouchableOpacity onPress={()=>{
                    navigation.popToTop()
                    }}>
                    <Text>Edit Current Item</Text>                    
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigation.popToTop()
                }}>
                    <Text>Delete Current Item</Text>                    
                </TouchableOpacity>

            </View>

        </View>
    )
}
export default EditDeleteScreen
