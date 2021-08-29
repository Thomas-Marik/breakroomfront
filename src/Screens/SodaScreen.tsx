import React, { useState } from 'react'
import {View, Text, TouchableOpacity, FlatList}from 'react-native'
import GlobalStyles from '../assets/GlobalStyles'

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





   
 

const SodaScreen: React.FC<IProps> =(props:IProps,{navigation})=> {

    const[itemList, setItemList]= useState([{
        brandName: "",
        type:""

    }]);
    
  const fetchSodas = async () => {
    const res = await axios.get(`api/sodas/all}`);
    setItemList(res.data);
  };

  React.useEffect(() => {
    fetchSodas();

    return function cleanup() {
      setItemList([]);
    };
  }, []);

    return (
        <View style={GlobalStyles.container}>
           <FlatList
                numColumns={1}
               keyExtractor={(item)=>item.brandName}
                data={itemList}
                renderItem={({item})=>(
                    <TouchableOpacity>
                        <Text style={GlobalStyles.listItem}>{item.brandName}</Text>
                    </TouchableOpacity>
                )}
                
                /> 
            <View style={GlobalStyles.footer}>
                <TouchableOpacity onPress={()=>navigation.push('Edit')}>
                    <Text>Edit/Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>navigation.push('Add')}>
                    <Text>Add a Soda</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default SodaScreen