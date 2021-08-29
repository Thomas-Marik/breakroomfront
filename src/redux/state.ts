import IItem from '../assets/models/Item'

export interface IAppState{
    items: IItem[];

}

export const initialState: IAppState ={
    items:[]
}