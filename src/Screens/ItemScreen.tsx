import React, { useState } from 'react'
import GlobalStyles from '../assets/GlobalStyles'
import {View, Text, TouchableOpacity} from 'react-native'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { stockItem } from '../redux/actions/items'
interface IProps{
   
    brandName:string,
    type:string,
    distributor:string,
    diet:boolean,
    caloriesPerServing:number,
    caffeine:boolean,
    glutenFree:boolean
}
const ItemScreen = ({navigation,route}) => {
   
 const dispatch = useDispatch()

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.display}>
                <Text style={GlobalStyles.test}>Brand Name:  {route.params.brandName}{"\n"}{"\n"}
                        Type:  {route.params.type}{"\n"}{"\n"}
                        Distributor:  {route.params.distributor}{"\n"}{"\n"}
                        Diet:  {route.params.diet.toString()}{"\n"}{"\n"}
                        Calories/Serving:  {route.params.caloriesPerServing}{"\n"}{"\n"}
                        Caffeinated:  {route.params.caffeine.toString()}{"\n"}{"\n"}
                        Gluten Free:  {route.params.glutenFree.toString()} </Text>       
            </View>
            <View style={GlobalStyles.footer}>
                <TouchableOpacity onPress={()=>navigation.push('Edit', route.params)}>
                    <Text style={GlobalStyles.button}>Edit or Delete Item</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{  
                                  
                                  dispatch(stockItem(route.params))
                    navigation.popToTop()}}>
                    <Text style={GlobalStyles.button}>Add to Vending Machine</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ItemScreen
