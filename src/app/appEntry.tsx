import AppRouter from '@app/appRouter';
import {appStore} from '@app/appStore';
import {createRoot} from 'react-dom/client';
import {Provider as ReduxProvider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ReduxProvider store={appStore}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ReduxProvider>,
);
