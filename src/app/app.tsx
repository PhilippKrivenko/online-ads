import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Routing from './routes';
import {setupStore} from './store';

export default function App() {
  const store = setupStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}
