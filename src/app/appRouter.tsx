import {AdsListPage} from '@pages/adsList/AdsListPage';
import {Route, Routes} from 'react-router-dom';

export default function AppRouter() {
  return (
    <Routes>
      <Route index element={<AdsListPage />} />
    </Routes>
  );
}
