import React from "react";
import { StyleSheet} from "react-native";


const GlobalStyles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#626960"   
       
    },
    label:{
        color:"#000",      
        fontSize:18,
        padding:10,      
        borderRadius:50,
        fontFamily:"Roboto",
        fontWeight:"bold",
        width:"300",
       

        

    },
    input: {
        backgroundColor:"#3e423c",
        padding:5,
        textAlign:"center",    
        color:"#fff",
        fontSize:20,
        fontFamily:"Roboto",
        fontWeight:"bold",
     
        
       
       
    },
    listItem:{
        height:40, 
        width:300,       
        padding:5,
        backgroundColor:"#014301",
        color:"white",
        margin:10,
        alignContent:"center",
        alignSelf:"center",
        textAlign:"center"
    },
    vendMachine:{
        flex:1,
        backgroundColor:"gray"
    

    },
    vendItem:{
        height:100,
        width:100,
        backgroundColor:"#014301",
        color:"white",
        margin:10, 
        padding:15, 
        textAlign:"center",
        borderRadius:30, 
        
       
    },
    display:{
        flex:1,
        alignSelf:"center",
        justifyContent:"center"

    },
    footer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf:"center"


    },
    button:{
        backgroundColor:"#3e423c",
        padding:10,
        margin:5,
        borderRadius:50,
        color:"#fff"
    },
    test:{
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingLeft: 30,
        marginBottom: 10,
        width: '90%',
        shadowColor:"gray",
        shadowOffset: 
            {
          width: 0,
          height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 35,
        backgroundColor:"blue",
    }
})
export default GlobalStyles