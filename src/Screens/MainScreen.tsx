import React from 'react'
import {SafeAreaView,View, Text, TouchableOpacity, FlatList, Image, ImageBackground} from 'react-native'
import { useSelector } from 'react-redux'
import GlobalStyles from '../assets/GlobalStyles'


const image = { uri: "../assets/empty.png" };

const MainScreen=({navigation})=> {

    const stockList = useSelector((state:any)=>state.items.stockList)
    console.log(stockList);

   
    return (
        
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.vendMachine}>
           
            <FlatList
                numColumns={3}
                keyExtractor={(item)=>item.brandName}
                data={stockList}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('View',item)}>
                        <Text style={GlobalStyles.vendItem}>{item.brandName}{"\n"}{`Type: ${item.type}`}</Text>
                    </TouchableOpacity>
                )}
                
                /> 
            </View>
            <View style={GlobalStyles.footer}>
                
                <TouchableOpacity  onPress={()=>navigation.push('Items')}>
                    <Text style={GlobalStyles.button}>View All Items</Text>
                </TouchableOpacity>
            </View>
        </View>   
       
    )
}
export default MainScreen