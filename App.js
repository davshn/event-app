import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import {store} from './src/stateManagement/store'; 
import Index from './src/Index';
import { Provider as PaperProvider } from 'react-native-paper';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  return (
    <>
      <Provider store={store}>
      <StripeProvider publishableKey=''>
        <PaperProvider>
          <Index />
        </PaperProvider>
      </StripeProvider>
      </Provider>
    </>
  );
}