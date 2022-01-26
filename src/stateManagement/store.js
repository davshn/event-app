import { createStore, applyMiddleware} from 'redux';
import rootReducers from './reducers/combineReducers';   //reducers combinados
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

//Almacena los estados globales

export const store = createStore(           //Almacenmiento recibe reducers y middleware
    rootReducers,applyMiddleware(thunk)
)
export const persistor = persistStore(store);