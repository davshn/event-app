import { createStore } from 'redux';
import rootReducers from './reducers/combineReducers';   //reducers combinados

//Almacena los estados globales

export const store = createStore(           //Almacenmiento recibe reducers y middleware
    rootReducers
)