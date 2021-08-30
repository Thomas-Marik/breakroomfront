import React, { useState } from 'react'
import {View, Text, TouchableOpacity, FlatList}from 'react-native'
import GlobalStyles from '../assets/GlobalStyles'

import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getAllItems } from '../redux/actions/items'
import { IAppState } from '../redux/state'

interface IProps{
   
    brandName:string,
    type:string,
    distributor:string,
    diet:boolean,
    caloriesPerServing:number,
    caffeine:boolean,
    glutenFree:boolean
}





   
 

const VenderItemScreen =({navigation, route})=> {

   const dispatch = useDispatch()
   const itemList = useSelector((state:any)=>state.items.itemList)
    
  const fetchItems = async () => {dispatch(getAllItems())}
    


  React.useEffect(() => {
    fetchItems();   
  }, []);

    return (
        <View style={GlobalStyles.container}>
           <FlatList
                numColumns={1}
               keyExtractor={(item)=>item.brandName}
                data={itemList}
                renderItem={({item})=>(
                    <TouchableOpacity>
                        <Text style={GlobalStyles.listItem} onPress={()=>navigation.push('View',item)}>{item.brandName}</Text>
                    </TouchableOpacity>
                )}
                
                /> 
            <View style={GlobalStyles.footer}>
              
                <TouchableOpacity  onPress={()=>navigation.push('Add')}>
                    <Text style={GlobalStyles.button}>Add an Item </Text>
                </TouchableOpacity>
            </View>
            <View></View>
        </View>
    )
}
export default VenderItemScreen