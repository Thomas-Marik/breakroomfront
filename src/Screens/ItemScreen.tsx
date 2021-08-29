import React, { useState } from 'react'
import GlobalStyles from '../assets/GlobalStyles'
import {View, Text, TouchableOpacity} from 'react-native'
import axios from 'axios'
interface IProps{
   
    brandName:string,
    type:string,
    distributor:string,
    diet:boolean,
    caloriesPerServing:number,
    caffeine:boolean,
    glutenFree:boolean
}




const ItemScreen: React.FC<IProps> = (props: IProps,{navigation}) => {
   
 

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
                <TouchableOpacity onPress={()=>navigation.push('Edit')}>
                    <Text>Edit or Delete Item</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{                    
                    navigation.popToTop()}}>
                    <Text>Add to Vending Machine</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ItemScreen
