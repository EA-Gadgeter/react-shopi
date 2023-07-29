import { useContext } from "react";
import { Link } from "react-router-dom";

import { ShoppingCartContext } from "../context/shoppingCart.jsx";

import ProtectedRoute from "../components/ProtectedRoute.jsx";
import OrdersCard from "../components/OrdersCard";

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext);

  return (
    <ProtectedRoute>
      <h1 className="mb-6 font-medium text-xl">My Orders</h1>
      <div className="flex flex-col gap-3.5 overflow-y-auto scrollbar-hide">
        {
          order.map((order, index) => {
            return (
              <Link 
                key={`orders-card-${index}`} 
                to={`/my-orders/${index}`}
              >
                <OrdersCard orderInfo={order}/>
              </Link>
            );
          })
        }
      </div>
    </ProtectedRoute>
  );
};

export default MyOrders;