import { useRoutes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import MyOrder from "./pages/MyOrder";
import MyOrders from "./pages/MyOrders";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import Layout from "./components/Layout";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/",element: <Home /> },
    { path: "/my-orders",element: <MyOrders /> },
    { path: "/my-order",element: <MyOrder /> },
    { path: "/my-account",element: <MyAccount /> },
    { path: "/sign-in",element: <SignIn /> },
    { path: "/*",element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};


export default App;