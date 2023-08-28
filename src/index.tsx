import App from '@app/app';
import {setupStore} from '@app/store';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

const store = setupStore();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
