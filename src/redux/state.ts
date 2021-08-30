import IItem from '../assets/models/Item'

export interface IAppState{
    itemList: IItem[],
    stockList: IItem[]

}

export const initialState: IAppState ={
    itemList:[],
    stockList:[]
}