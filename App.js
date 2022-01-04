import { Provider } from 'react-redux';
import {store} from './src/stateManagement/store'; 
import Root from './src/Root';

export default function App() {
  return (
    <>
      <Provider store={store}>
          <Root />
      </Provider>
    </>
  );
}