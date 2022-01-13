import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import {store} from './src/stateManagement/store'; 
import Index from './src/Index';
import { Provider as PaperProvider } from 'react-native-paper';
import { StripeProvider } from '@stripe/stripe-react-native';
require('dotenv').config()

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StripeProvider
          publishableKey={process.env.PUBLISHABLE_KEY}
          // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}"
        >
          <PaperProvider>
            <Index />
          </PaperProvider>
        </StripeProvider>
      </Provider>
    </>
  );
}