import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome/>,
  },
  {
    path: "/about-us",
    element: <PageAbout/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
