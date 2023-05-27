import { useState, useEffect, useContext } from "react";
import { ShoppingCartContext } from "../context/index.jsx";

import Card from "../components/Card";
import ProductDetail from "../components/ProductDetail.jsx";

const API_BASE_URL =  "https://api.escuelajs.co/api/v1";

const Home = () => {
  const { productDetailOpen } = useContext(ShoppingCartContext);

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
              title={item.title}
              price={item.price}
              category={item.category}
              images={item.images}
            />
          ))
        }
      </div>
      {productDetailOpen && <ProductDetail />}
    </>
  );
};

export default Home;