import { useContext } from "react";

import { ShoppingCartContext } from "../context";

import OrderCard from "../components/OrderCard";

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);

  // If order is an empty array, products will not exits
  // so we use optional chaining, that also happens with
  // optional render in the JSX
  const lastOrder = order.slice(-1)[0]?.products;

  return (
    <>
      My Order
      <div className="w-80 flex flex-col gap-3.5 overflow-y-auto scrollbar-hide">
        {lastOrder && (
          lastOrder.map(product => {
            return <OrderCard
              key={`order-page-card-${product.id}`}
              productInfo={product}
            />;
          })
        )}
      </div>
    </>
  );
};

export default MyOrder;