import { useContext } from "react";
import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/outline/index.js";

import { ShoppingCartContext } from "../context/index.jsx";

import OrderCard from "./OrderCard.jsx";

import { totalPrice } from "../utils/index.js";

const CheckoutSideMenu = () => {
  const { 
    closeCheckoutMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder
  } = useContext(ShoppingCartContext);

  const handleClose = () => closeCheckoutMenu();

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id != id);
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    };

    setOrder([...order, orderToAdd]);
    closeCheckoutMenu();
    setCartProducts([]);
  };

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

      <div className="flex flex-1 flex-col gap-3.5 overflow-y-auto scrollbar-hide">
        {
          cartProducts.map(product => {
            return <OrderCard
              key={`order-card-${product.id}`}
              productInfo={product}
              handleDelete={handleDelete}
            />;
          })
        }
      </div>

        <div>
          <p className="flex justify-between items-center">
            <span className="font-light">Total:</span>
            <span className="font-medium text-2xl">${totalPrice(cartProducts)}</span>
          </p>

          <Link
            to="/my-orders/last"
            className="w-full inline-block py-3 rounded-lg text-center text-white bg-black" 
            onClick={handleCheckout}
          >
            Checkout
          </Link>
        </div>
    </aside>
  );
};

export default CheckoutSideMenu;