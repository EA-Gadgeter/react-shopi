import { useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

import { ShoppingCartContext } from "../context/index.jsx";

const Card = ({ productInfo }) => {
  const { count, setCount, openProductDetail, setProductToShow } =  useContext(ShoppingCartContext);

  const {images, title, category, price} = productInfo;

  const handleAddProduct = (event) => {
    event.stopPropagation();
    setCount(count + 1);
  };

  const handleProductDetail = () => {
    setProductToShow(productInfo);
    openProductDetail();
  };

  return (
    <div
      className="w-56 h-60 rounded-lg bg-white"
      onClick={handleProductDetail}
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
              className="
                w-7
                h-7
                flex justify-center
                absolute top-0 right-0
                m-2
                p-1
                rounded-full
                bg-white
              "
              onClick={handleAddProduct}
            >
                <PlusIcon />
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