import {createContext, useState} from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart total items
  const [count,setCount] = useState(0);
  // Show Product Detail
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  // Product to show
  const [productToShow,setProductToShow] = useState({});

  // Toggle Product Detail
  const openProductDetail = () => setProductDetailOpen(true);
  const closeProductDetail = () => setProductDetailOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        productDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};