import {createStore, combineReducers, applyMiddleware} from 'redux';
import itemReducer from './reducers/ItemReducers';
import createSagaMiddleware from '@redux-saga/core'
import itemSaga from './saga';


const rootReducer = combineReducers({
    items: itemReducer
})

const sagaMiddleware = createSagaMiddleware();


const configureStore = () =>{
    const store= createStore(rootReducer,applyMiddleware(sagaMiddleware));
     sagaMiddleware.run(itemSaga)
     return store
}



export default configureStore;



