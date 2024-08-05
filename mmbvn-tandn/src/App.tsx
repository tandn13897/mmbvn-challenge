import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailPage from "./page/detail";
import HomePage from "./page/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail",
    element: <DetailPage />,
  },
]);

function App() {
  return (
    <div className="max-w-screen h-full bg-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
