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
        <StripeProvider
          publishableKey="pk_test_51KHAP5LIn0UuDGLfU55zd6ikHNqTr28CKWnmaIWQNakzbMYAzXJxApeizgsbyuJGThrTusYIid4A52vtTlrJCdre00YR7QAAe4"
        >
          <PaperProvider>
            <Index />
          </PaperProvider>
        </StripeProvider>
      </Provider>
    </>
  );
}