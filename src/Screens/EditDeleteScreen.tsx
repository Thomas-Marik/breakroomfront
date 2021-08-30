import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import GlobalStyles from '../assets/GlobalStyles'
import { editItem, deleteItem } from '../redux/actions/items'

const EditDeleteScreen=({navigation,route}) =>{

const [brandName, setBrandName] = useState("");
const [type, setType]= useState("");
const [distributor, setDistributor] = useState("");
const [diet, setDiet] = useState(false);
const [caloriesPerServing, setCaloriesPerServing]= useState("");
const [caffeine, setCaffeine]= useState(true);
const [glutenFree, setGlutenFree] = useState(false);


const dispatch = useDispatch()
const deleteItems = () => {dispatch(deleteItem(route.params.brandName))}
const editItems =(item) => {dispatch(editItem(item))}


    return (
        <View style={GlobalStyles.container}>
             <View style={GlobalStyles.display}>
                <Text style={GlobalStyles.label}>
                    Brand Name: {route.params.brandName}{"\n"}                
                    Enter Updated Item:</Text>       
           
                <Text style={GlobalStyles.label}>Brand Name:</Text>
                <TextInput style={GlobalStyles.input} placeholder={"New Brand"}></TextInput>
                <Text style={GlobalStyles.label}>Type:</Text>
                <TextInput style={GlobalStyles.input} placeholder={"Type of Item"}></TextInput>
                <Text style={GlobalStyles.label}>Distributor:</Text>
                <TextInput style={GlobalStyles.input} placeholder={"New Distributor"}></TextInput>
                <Text style={GlobalStyles.label}>Diet:</Text>
                <TextInput style={GlobalStyles.input} placeholder={"0:false or 1:true"}></TextInput>
                <Text style={GlobalStyles.label}>Calories per Serving:</Text>
                <TextInput style={GlobalStyles.input} keyboardType={"numeric"} placeholder={"001"}></TextInput>
                <Text style={GlobalStyles.label}>Caffeine:</Text>
                <TextInput style={GlobalStyles.input} placeholder={"0:false or 1:true"}></TextInput>
                <Text style={GlobalStyles.label}>Gluten Free:</Text>
                <TextInput style={GlobalStyles.input} placeholder={"0:false or 1:true"}></TextInput>


            </View>
            <View style={GlobalStyles.footer}>
                <TouchableOpacity onPress={()=>{
                     editItems({
                   
                        brandName:brandName,
                        type:type,
                        distributor:distributor,
                        diet:diet,
                        caloriesPerServing:caloriesPerServing,
                        caffeine:caffeine,
                        glutenFree:glutenFree                   
                         
                        })
                     

                    navigation.popToTop()
                    }}>
                    <Text  style={GlobalStyles.button}>Edit Item</Text>                    
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    deleteItems()
                    navigation.popToTop()
                }}>
                    <Text style={GlobalStyles.button}>Delete Item</Text>                    
                </TouchableOpacity>

            </View>

        </View>
    )
}
export default EditDeleteScreen
