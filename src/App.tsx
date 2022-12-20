import { NftColectionsPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/constants/routes';
import { NftPage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.COLLECTIONS} element={<NftColectionsPage />} />
        <Route path={ROUTES.COLLECTION_PAGE} element={<NftPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
