import {BrowserRouter, useRoutes} from "react-router-dom";

import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import MyOrder from "./pages/MyOrder";
import MyOrders from "./pages/MyOrders";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import Layout from "./components/Layout";

import { ShoppingCartProvider } from "./context/index.jsx";

const AppRoutes = () => {
  return useRoutes([
    {path: "/", element: <Home/>},
    {path: "/:category", element: <Home/>},
    {path: "/my-orders", element: <MyOrders/>},
    {path: "/my-orders/last", element: <MyOrder/>},
    {path: "/my-orders/:id", element: <MyOrder/>},
    {path: "/my-account", element: <MyAccount/>},
    {path: "/sign-in", element: <SignIn/>},
    {path: "/*", element: <NotFound/>},
  ]);
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;