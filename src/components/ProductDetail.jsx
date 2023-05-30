import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../context/index.jsx";

const ProductDetail = () => {
  const {
    closeProductDetail,
    productToShow,
    setProductToShow,
  } = useContext(ShoppingCartContext);

  const {images, title, price, description} = productToShow;

  const handleClose = () => {
    closeProductDetail();
    setProductToShow({});
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
        <h2 className="font-medium text-xl">Detail</h2>
        <button className="w-8 h-8" onClick={handleClose}>
          <XCircleIcon />
        </button>
      </div>

      <figure>
        <img
          className="
            w-full h-full max-h-full
            block
            rounded-lg
          "
          src={images[0]}
          alt={title}
        />
      </figure>

      <p className="flex flex-col">
        <span className="mb-2 font-medium text-2xl">${price}</span>
        <span className="font-medium text-md">{title}</span>
        <span className="font-light text-sm">{description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;