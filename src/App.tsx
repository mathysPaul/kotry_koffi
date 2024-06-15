import { Routes, Route, HashRouter } from "react-router-dom";

import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/about" element={<PageAbout />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
