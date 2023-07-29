import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../context/shoppingCart.jsx";

import Card from "../components/Card";
import ProductDetail from "../components/ProductDetail.jsx";
import CheckoutSideMenu from "../components/CheckoutSideMenu.jsx";

const Home = () => {
  const { productDetailOpen,
    checkoutMenuOpen,
    items, searchByTitle,
    setSearchByTitle
  } = useContext(ShoppingCartContext);

  const { category} =  useParams();

  const handleInput = (event) => {
    setSearchByTitle(event.target.value);
  };

  let filteredItems = [];

  if (!searchByTitle) {
    filteredItems = items;
  }

  if (searchByTitle) {
    filteredItems = items.filter(item => {
      const itemTitle = item.title.toLowerCase();
      const searchTitle = searchByTitle.toLowerCase();

      return  itemTitle.includes(searchTitle);
    });
  }

  if (category) {
    filteredItems = filteredItems.filter(item => {
      const itemCategory = item.category.name.toLowerCase();

      return  itemCategory.includes(category.toLowerCase());
    });
  }

  return (
    <>
      <h1 className="mb-6 font-medium text-xl">Exclusive Products</h1>

      <input type="text" placeholder="Search a product..."
       className="
         w-80
         p-4
         mb-6
         rounded-lg
         border
         border-black
         focus:outline-none
       "
       value={searchByTitle}
       onChange={handleInput}
      />

      <div className="w-full max-w-screen-lg grid grid-cols-4 gap-4">
        {filteredItems.length ?
          (
            filteredItems.map((item) => (
              <Card
                key={`card-${item.id}`}
                productInfo={item}
              />
            ))
          )
          // eslint-disable-next-line react/no-unescaped-entities
          : <h1>We don't have any products</h1>
        }
      </div>

      {productDetailOpen && <ProductDetail />}
      {checkoutMenuOpen && <CheckoutSideMenu />}
    </>
  );
};

export default Home;