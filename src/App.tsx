import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';

import { Routes, Route, HashRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome/>,
  },
  {
    path: "/about",
    element: <PageAbout/>,
  },
]);

function App() {
  return (
    // <RouterProvider router={router} />
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/about" element={<PageAbout />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
