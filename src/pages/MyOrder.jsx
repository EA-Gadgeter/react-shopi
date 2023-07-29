import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import { ShoppingCartContext } from "../context/shoppingCart.jsx";

import OrderCard from "../components/OrderCard";

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);
  let { id: orderId } = useParams();

  if (!orderId) orderId = -1;

  return (
    <>
      <div className="w-80 flex justify-center items-center relative mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon 
            className="
              w-6
              h-6
              text-black
              cursor-pointer
            "
          />
        </Link>
        <h1>My Order</h1>
      </div>

      <div className="w-80 flex flex-col gap-3.5 overflow-y-auto scrollbar-hide">
        {
          // If order is an empty array, products will not exits
          // so we use optional chaining
          order.at(orderId)?.products.map(product => {
            return <OrderCard
              key={`order-page-card-${product.id}`}
              productInfo={product}
            />;
          })
        }
      </div>
    </>
  );
};

export default MyOrder;