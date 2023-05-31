import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../context";

import OrdersCard from "../components/OrdersCard";

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="w-80 flex justify-center items-center relative">
        <Link to="/my-order" className="absolute left-0">
          <ChevronLeftIcon 
            className="
              w-6
              h-6
              text-black
              cursor-pointer
            "
          />
        </Link>
        <h1>My Orders</h1>
      </div>
      {
        order.map((order, index) => {
          return (
            <Link 
              key={`orders-card-${index}`} 
              to={`/my-order/${order.id}`}
            >
              <OrdersCard orderInfo={order}/>;
            </Link>
          );
        })
      }
    </>
  );
};

export default MyOrders;