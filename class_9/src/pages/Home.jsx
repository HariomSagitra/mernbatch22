import React from "react";
import SingleCart from "../components/SingleCart";
import "./Home.css";

function Home({ products,setCartItem,cartItem }) {
  console.log("products", products)

  return (
    <div className="product-grid">
      {products.map((item, index) => (
        <SingleCart
          key={index}
          item={item}
          setCartItem={setCartItem}
          cartItem={cartItem}
        />
      ))}
    </div>
  );
}

export default Home;
