import AdDetail from '@pages/adDetail';
import AdsList from '@pages/adsList';
import NotFound from '@pages/notFound';
import Wishlist from '@pages/wishlist';
import {Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AdsList />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/adDetail:id" element={<AdDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
