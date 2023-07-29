import {createContext, useEffect, useState} from "react";

const API_BASE_URL =  "https://api.escuelajs.co/api/v1";
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

  const [searchByTitle, setSearchByTitle] =  useState("");

  // Toggle Product Detail
  const openProductDetail = () => setProductDetailOpen(true);
  const closeProductDetail = () => setProductDetailOpen(false);

  // Toggle Checkout Menu
  const openCheckoutMenu = () => setCheckoutMenuOpen(true);
  const closeCheckoutMenu = () => setCheckoutMenuOpen(false);

  // Get Products
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

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
        setOrder,
        items,
        searchByTitle,
        setSearchByTitle,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};