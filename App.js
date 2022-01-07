import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import {store} from './src/stateManagement/store'; 
import Index from './src/Index';

export default function App() {
  return (
    <>
      <Provider store={store}>
          <Index />
      </Provider>
    </>
  );
}