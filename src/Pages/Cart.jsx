import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FaTrash } from "react-icons/fa";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const Cart = () => {
  const { cartItems, RemoveFromCart, UpdateQuantity } = useContext(CartContext);
  console.log(cartItems);

  function handleRemove(id, title) {
    const confirmRemove = window.confirm(
      `Are you sure want to Remove?  ${title}`
    );
    if (confirmRemove) {
      RemoveFromCart(id);
    }
  }
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  totalPrice.toFixed(2);
  const finalPrice = (totalPrice * 0.9).toFixed(2);

  return (
    <>
      <div className="mt-20 h-full  flex justify-center items-center">
        <div className="w-5/6 px-10 mt-10  ">
          <table className="w-full flex-row items-center justify-center">
            <thead className="">
              <tr className="border-b-2 gap-10 flex justify-between  ">
                <th className="w-4/4 text-left">Products</th>
                <th className="w-1/4">Price</th>
                <th className="w-1/4">Quantity</th>
                <th className="w-1/4">Sub-Total</th>
                <th className="w-1/4 ">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-500 gap-10 py-6 flex items-center "
                >
                  <td className="w-4/4 flex items-center gap-2">
                    <img src={item.image} className="h-14 w-14" />
                    <span>{item.title}</span>
                  </td>
                  <td className="w-1/4 justify-center flex">${item.price}</td>
                  <td className="w-1/4 justify-center flex items-center gap-2">
                    <span
                      onClick={() => {
                        if (item.quantity === 1) {
                          handleRemove(item.id, item.title);
                        } else {
                          UpdateQuantity(item.id, item.quantity - 1);
                        }
                      }}
                      className="cursor-pointer text-red-600 "
                    >
                      <FiMinusCircle />
                    </span>
                    <span>{item.quantity}</span>
                    <span
                      onClick={() => UpdateQuantity(item.id, item.quantity + 1)}
                      className={`cursor-pointer text-green-600 ${
                        item.quantity === 1 ? "opacity-100" : ""
                      }`}
                    >
                      <FiPlusCircle />
                    </span>
                  </td>
                  <td className="w-1/4 justify-center flex">
                    {(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td
                    onClick={() => handleRemove(item.id, item.title)}
                    className="w-1/4 cursor-pointer text-red-400 rounded items-center flex justify-center hover:text-red-500"
                  >
                    <FaTrash />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Check out payment */}
          <div className="flex justify-center items-center mt-8">
            <div className="flex  border border-gray-500 rounded-xl flex-col md:w-1/2 p-10 gap-2">
              <div className="flex justify-between">
                <p className="flex">Total Items:</p>
                <p className=" px-2">{cartItems.length}</p>
              </div>
              <div className="flex justify-between">
                <p>Total Amount:</p>
                <p className="px-2">${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-green-950 font-semibold">
                <p>10% Discount:</p>
                <p className="px-2">-${(totalPrice - finalPrice).toFixed(2)}</p>
              </div>
              <div className="flex justify-between border-t mt-4 py-2  border-gray-400 font-semibold">
                <h3 className="">Final Price :</h3>
                <p className="px-2 text-green-900">${finalPrice}</p>
              </div>
              <button className="mt-5 bg-amber-500 rounded p-2 font-bold cursor-pointer hover:bg-amber-600">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
