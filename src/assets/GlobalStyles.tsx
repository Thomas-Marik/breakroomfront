import React from "react";
import { StyleSheet } from "react-native";
const GlobalStyles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    listItem:{
        height:100,
        width:100,
        backgroundColor:"green",
        color:"white",
        margin:10
    },
    footer:{
        flexDirection:"row",
        justifyContent:"space-between",
        
    }
})
export default GlobalStyles