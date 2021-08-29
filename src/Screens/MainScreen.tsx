import React from 'react'
import {SafeAreaView,View, Text, TouchableOpacity} from 'react-native'
import GlobalStyles from '../assets/GlobalStyles'
interface PropsI{
    route:{
        params:{
            data:{
                brandName:"Bobs",
                type:string;
                distributor:string;
                diet:boolean;
                caloriesPerServing:number;
                caffeine:boolean;
                glutenFree:boolean;

            }
        }
    }

}

const MainScreen=({PropsI,navigation})=> {
    return (
     
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.container}>
                <Text>Main Screen</Text>
                <TouchableOpacity onPress={()=>navigation.push('Items',{
                    
                })}>
                    <Text>Test Item</Text>
                </TouchableOpacity>
            </View>
            <View style={GlobalStyles.container}>
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