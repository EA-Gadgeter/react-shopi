import { useState, useEffect, useContext } from "react";
import { ShoppingCartContext } from "../context/index.jsx";

import Card from "../components/Card";
import ProductDetail from "../components/ProductDetail.jsx";
import CheckoutSideMenu from "../components/CheckoutSideMenu.jsx";

const API_BASE_URL =  "https://api.escuelajs.co/api/v1";

const Home = () => {
  const { productDetailOpen, checkoutMenuOpen } = useContext(ShoppingCartContext);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <>
      <div className="w-full max-w-screen-lg grid grid-cols-4 gap-4">
        {
          items.map((item) => (
            <Card
              key={`card-${item.id}`}
              productInfo={item}
            />
          ))
        }
      </div>
      {productDetailOpen && <ProductDetail />}
      {checkoutMenuOpen && <CheckoutSideMenu />}
    </>
  );
};

export default Home;