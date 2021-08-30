import React, { useState } from 'react'
import GlobalStyles from '../assets/GlobalStyles'
import {View, Text, TouchableOpacity, TextInput}from 'react-native'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/actions/items'

import IItem from '../assets/models/Item'

const AddItemScreen=({navigation})=> {

    
const [brandName, setBrandName] = useState("");
const [type, setType]= useState("");
const [distributor, setDistributor] = useState("");
const [diet, setDiet] = useState(false);
const [caloriesPerServing, setCaloriesPerServing]= useState("");
const [caffeine, setCaffeine]= useState(true);
const [glutenFree, setGlutenFree] = useState(false);

 const dispatch = useDispatch()
 const addItems = (item) => {dispatch(addItem(item))
                                navigation.popToTop()}

    return (
        <View style={GlobalStyles.container}>
             <View style={GlobalStyles.display}>
             <Text style={GlobalStyles.label}>Enter New Item:</Text>          
            <Text style={GlobalStyles.label} >Brand Name:</Text>
            <TextInput style={GlobalStyles.input} placeholder={"New Brand"} onChangeText={setBrandName}></TextInput>
            <Text style={GlobalStyles.label}>Type:</Text>
            <TextInput style={GlobalStyles.input} placeholder={"Type of Item"}onChangeText={setType}></TextInput>
            <Text style={GlobalStyles.label}>Distributor:</Text>
            <TextInput style={GlobalStyles.input} placeholder={"New Distributor"}onChangeText={setDistributor}></TextInput>
            <Text style={GlobalStyles.label}>Diet:</Text>
            <TextInput style={GlobalStyles.input} placeholder={"0: false or 1: true"}></TextInput>
            <Text style={GlobalStyles.label}>Calories per Serving:</Text>
            <TextInput style={GlobalStyles.input} keyboardType={"numeric"} placeholder={"001"}onChangeText={setCaloriesPerServing}></TextInput>
            <Text style={GlobalStyles.label}>Caffeine:</Text>
            <TextInput style={GlobalStyles.input}placeholder={"0: false or 1: true"}></TextInput>
            <Text style={GlobalStyles.label}>Gluten  Free:</Text>
            <TextInput style={GlobalStyles.input}  placeholder={"0: false or 1: true"}></TextInput>
   
            </View>
        <View style={GlobalStyles.footer}>
            <TouchableOpacity onPress={()=>{
                addItems({soda:{
                   
                        brandName:brandName,
                        type:type,
                        distributor:distributor,
                        diet:diet,
                        caloriesPerServing:caloriesPerServing,
                        caffeine:caffeine,
                        glutenFree:glutenFree                   
                }
                        })
                     
            
            }}>
            <Text style={GlobalStyles.button}>Add item</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default AddItemScreen