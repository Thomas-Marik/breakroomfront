import { ActionSheetIOS } from 'react-native'
import {ADD_ITEM,DELETE_ITEM,EDIT_ITEM,STOCK_ITEM,GET_ALL_ITEMS,UPDATE_STORED_ITEMS} from '../actions/types'

const initialState ={
    itemList:[],
    stockList:[]
}

const itemReducer = (state =initialState, action)=>{
    switch(action.type){
        case UPDATE_STORED_ITEMS:
            return {...state,itemList:action.data}  
        case STOCK_ITEM:
            const newStock = []
            state.stockList.forEach(item=>newStock.push(item))
            newStock.push(action.data)            
            return{...state,stockList:newStock}        
        default:
            return state;
    }
}
    export default itemReducer
