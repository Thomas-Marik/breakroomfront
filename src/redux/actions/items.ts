import {ADD_ITEM,DELETE_ITEM,EDIT_ITEM,STOCK_ITEM, GET_ALL_ITEMS, UPDATE_STORED_ITEMS} from '../actions/types'

export const addItem = (item) =>(
    {
        type: ADD_ITEM,
        data: item
    }
)

export const deleteItem = (key) =>(
    {
        type: DELETE_ITEM,
        key:key
    }
)
export const editItem = (item) =>(
    {
        type: EDIT_ITEM,
        data: item
    }
)
export const stockItem = (item) =>(
    {
        type: STOCK_ITEM,
        data: item
    }
)
export const getAllItems =() => ({ type:GET_ALL_ITEMS})

export const updateItems = (items)=>(
    {
        type:UPDATE_STORED_ITEMS,
        data:items
    }
)
