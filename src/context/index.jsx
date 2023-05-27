import {createContext, useState} from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count,setCount] = useState(0);
  const [productDetailOpen, setProductDetailOpen] = useState(false);

  const openProductDetail = () => setProductDetailOpen(true);
  const closeProductDetail = () => setProductDetailOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        productDetailOpen,
        openProductDetail,
        closeProductDetail
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};