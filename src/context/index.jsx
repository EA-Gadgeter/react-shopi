import {createContext, useState} from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Cart Pruducts
  const [cartProducts, setCartProducts] = useState([]);
  // Show Product Detail
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  // Show checkout menu
  const [checkoutMenuOpen, setCheckoutMenuOpen] = useState(false);
  // Product to show
  const [productToShow,setProductToShow] = useState({});
  // Shopping Cart - Order
  const [order, setOrder] = useState([]);

  // Toggle Product Detail
  const openProductDetail = () => setProductDetailOpen(true);
  const closeProductDetail = () => setProductDetailOpen(false);

  // Toggle Checkout Menu
  const openCheckoutMenu = () => setCheckoutMenuOpen(true);
  const closeCheckoutMenu = () => setCheckoutMenuOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        productDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        checkoutMenuOpen,
        openCheckoutMenu,
        closeCheckoutMenu,
        order,
        setOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};