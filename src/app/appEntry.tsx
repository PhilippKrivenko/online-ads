import AppRouter from '@app/appRouter';
import {store} from '@app/appStore';
import {createRoot} from 'react-dom/client';
import {Provider as ReduxProvider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ReduxProvider>,
);
