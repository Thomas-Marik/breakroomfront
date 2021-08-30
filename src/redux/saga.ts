
import { AxiosResponse } from 'axios'
import {ADD_ITEM,DELETE_ITEM,EDIT_ITEM,STOCK_ITEM, GET_ALL_ITEMS, UPDATE_STORED_ITEMS} from './actions/types'
import axios from'../../axios.config'
import { call, put, takeEvery } from '@redux-saga/core/effects'
import {updateItems} from './actions/items'



function* getAll(action): Generator<unknown,any,AxiosResponse>{
    try{
        const itemList= yield call(axios.get,"http://192.168.1.110:3000/api/sodas/all")   
     
        yield put(updateItems(itemList.data.sodas))   
    }

    catch(err){
        console.log(err)

    }
}
function* deleteItem(action): Generator<unknown,any,AxiosResponse>{
    try{
        yield call(axios.delete,`http://192.168.1.110:3000/api/sodas/delete/${action.key}`)

    }catch(err){
        console.log(err.response)
    }
}
function* addItem(action): Generator<unknown,any,AxiosResponse>{
    try{
        yield call(axios.post,"http://192.168.1.110:3000/api/sodas/add/",action.data)
    }catch(err){
        
        console.log(err.response.data)
        console.log(action.data)
    }
}
function* editItem(action): Generator<unknown,any,AxiosResponse>{
    try{
        yield call(axios.put,"http://192.168.1.110:3000/api/sodas/update")
    }catch(err){
        console.log(err)
    }
}


export default function* itemSaga(){
    yield takeEvery(GET_ALL_ITEMS, getAll)
    yield takeEvery(DELETE_ITEM, deleteItem)
    yield takeEvery(EDIT_ITEM, editItem)
    yield takeEvery(ADD_ITEM,addItem)




}


