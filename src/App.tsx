import { Route, Routes } from 'react-router-dom';
import InitialMenu from './pages/InitialMenu/InitialMenu';

function App() {
  return (
    <Routes>
      <Route path="/" element={<InitialMenu />} />
    </Routes>
  );
}

export default App;
