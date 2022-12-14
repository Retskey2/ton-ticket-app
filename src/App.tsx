import { NftColectionsPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/constants/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.COLLECTIONS} element={<NftColectionsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
