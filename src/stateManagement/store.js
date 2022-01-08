import { createStore, applyMiddleware} from 'redux';
import rootReducers from './reducers/combineReducers';   //reducers combinados
import thunk from 'redux-thunk';

//Almacena los estados globales

export const store = createStore(           //Almacenmiento recibe reducers y middleware
    rootReducers,applyMiddleware(thunk)
)