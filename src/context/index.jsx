import {createContext, useState} from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart total items
  const [count,setCount] = useState(0);
  //Cart Pruducts
  const [cartProducts, setCartProducts] = useState([]);
  // Show Product Detail
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  // Show checkout menu
  const [checkoutMenuOpen, setCheckoutMenuOpen] = useState(false);
  // Product to show
  const [productToShow,setProductToShow] = useState({});

  // Toggle Product Detail
  const openProductDetail = () => setProductDetailOpen(true);
  const closeProductDetail = () => setProductDetailOpen(false);

  // Toggle Checkout Menu
  const openCheckoutMenu = () => setCheckoutMenuOpen(true);
  const closeCheckoutMenu = () => setCheckoutMenuOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        productDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        checkoutMenuOpen,
        openCheckoutMenu,
        closeCheckoutMenu
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};