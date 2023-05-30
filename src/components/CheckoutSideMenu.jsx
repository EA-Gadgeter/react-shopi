import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline/index.js";

import { ShoppingCartContext } from "../context/index.jsx";

import OrderCard from "./OrderCard.jsx";

const CheckoutSideMenu = () => {
  const { closeCheckoutMenu, cartProducts } = useContext(ShoppingCartContext);

  const handleClose = () => closeCheckoutMenu();

  return (
    <aside
      className={`
        w-[360px]
        h-[calc(100vh-68px)]
        flex
        flex-col
        gap-2
        fixed right-0 top-[68px]
        p-6
        border border-black
        rounded-b-lg
        bg-white
      `}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">My Order</h2>
        <button className="w-8 h-8" onClick={handleClose}>
          <XCircleIcon />
        </button>
      </div>

      <div className="flex flex-col gap-3.5 overflow-y-auto scrollbar-hide">
        {
          cartProducts.map(product => {
            return <OrderCard
              key={`order-card-${product.id}`}
              productInfo={product}
            />;
          })
        }
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;