import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import {store} from './src/stateManagement/store'; 
import Index from './src/Index';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PaperProvider>
          <Index />
        </PaperProvider>
      </Provider>
    </>
  );
}