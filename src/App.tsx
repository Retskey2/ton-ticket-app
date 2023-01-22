import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/constants/routes';
import { NftPage, NftSearchPage, ValidationPage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.COLLECTIONS} element={<NftSearchPage />} />
        <Route path={ROUTES.COLLECTION_PAGE} element={<NftPage />} />
        <Route path={ROUTES.VALIDATION_PAGE} element={<ValidationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
