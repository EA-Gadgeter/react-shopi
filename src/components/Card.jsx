import { useContext, useEffect, useState } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";

import { ShoppingCartContext } from "../context/shoppingCart.jsx";

const Card = ({ productInfo }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  
  const {
    openProductDetail,
    setProductToShow,
    setCartProducts,
    cartProducts,
    closeCheckoutMenu,
  } = useContext(ShoppingCartContext);

  const {images, title, category, price} = productInfo;

  useEffect(() => {
    const isInCart = cartProducts.filter(product =>  product.id === productInfo.id).length > 0;

    if (isInCart)
      setAddedToCart(true);
    else
      setAddedToCart(false);  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts]);

  const handleAddProduct = (event) => {
    event.stopPropagation();

    if (!addedToCart) {
      setCartProducts([...cartProducts, productInfo]);
      setAddedToCart(true);
    }
  };

  const handleProductDetail = () => {
    setProductToShow(productInfo);
    closeCheckoutMenu();
    openProductDetail();
  };

  return (
    <div
      className="w-56 h-60 rounded-lg bg-white"
    >
        <figure className="w-100 h-4/5 relative mb-2">
            <img 
              className="
                w-full h-full max-h-full
                block 
                rounded-lg
                cursor-pointer
                object-cover
              "
              src={images[0]}
              alt={title}
              onClick={handleProductDetail}
            />

            <span 
              className="
                  absolute bottom-0 left-0 
                  m-2
                  px-3
                  py-0.5
                  text-xs
                  text-black
                  bg-white/60 
                  rounded-lg
                "
            >
              {category.name}
            </span>

            <button
              className={`
                w-7
                h-7
                flex justify-center
                absolute top-0 right-0
                m-2
                p-1
                rounded-full
                ${!addedToCart ? "text-black" : "text-white"}
                ${!addedToCart ? "bg-white" : "bg-black"}
              `}
              onClick={handleAddProduct}
            >
              {!addedToCart ? <PlusIcon/> : <CheckIcon />}
            </button>
        </figure>

        <div className="flex justify-between">
            <span className="text-sm font-light">{title}</span>

            <span className="text-lg font-medium">${price}</span>
        </div>
    </div>
  );
};

export default Card;