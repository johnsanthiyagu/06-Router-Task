import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import axios from "axios";
const Product = () => {
  const { cartItems, AddToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const FAKE_API = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios
      .get(FAKE_API)
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mt-20">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-2xl">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto"
            />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p>${product.price}</p>
            <button
              className={`mt-2 p-2 w-full ${
                cartItems.some((item) => item.id === product.id)
                  ? "bg-gray-500"
                  : "bg-blue-500"
              } text-white`}
              onClick={() => AddToCart(product)}
            >
              {cartItems.some((item) => item.id === product.id)
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
