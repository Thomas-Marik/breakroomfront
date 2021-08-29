import React from 'react'
import {SafeAreaView,View, Text, TouchableOpacity, FlatList} from 'react-native'
import GlobalStyles from '../assets/GlobalStyles'
import IItem from '../assets/models/Item'

let vendList:IItem[]=[
    {brandName:"Bobs",type:"snack",distributor:"Me",diet:false,caloriesPerServing:10000,caffeine:true,glutenFree:false},
    {brandName:"Bobs",type:"snack",distributor:"Me",diet:false,caloriesPerServing:10000,caffeine:true,glutenFree:false},
    {brandName:"Bobs",type:"snack",distributor:"Me",diet:false,caloriesPerServing:10000,caffeine:true,glutenFree:false},
    {brandName:"Bobs",type:"snack",distributor:"Me",diet:false,caloriesPerServing:10000,caffeine:true,glutenFree:false},
    {brandName:"Bobs",type:"snack",distributor:"Me",diet:false,caloriesPerServing:10000,caffeine:true,glutenFree:false},
    
]
const MainScreen=({navigation})=> {
    return (
     
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.container}>
            <FlatList
                numColumns={3}
                keyExtractor={(item)=>item.brandName}
                data={vendList}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Edit',item)}>
                        <Text style={GlobalStyles.listItem}>{item.brandName}{"\n"}{`Type: ${item.type}`}</Text>
                    </TouchableOpacity>
                )}
                
                /> 
            </View>
            <View style={GlobalStyles.footer}>
                <TouchableOpacity onPress={()=>navigation.push('Snacks')}>
                    <Text>Snacks</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>navigation.push('Sodas')}>
                    <Text>Sodas</Text>
                </TouchableOpacity>
            </View>
        </View>    
    )
}
export default MainScreen