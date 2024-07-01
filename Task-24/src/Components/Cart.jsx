import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import { Link, useLocation } from "react-router-dom";

function Cart() {
  const { cart, total, addToCart, removeFromCart } = useContext(CartContext);
  const location = useLocation();
  return (
    <div className="w-1/5 p-5 h-fit shadow-lg shadow-slate-400 fixed right-10">
      <h1 className="text-4xl font-semibold text-center  border-b-black border-b-2">
        Cart
      </h1>
      {cart.map((item) => {
        // setTotal((prev) => prev + item.price);
        return (
          <div key={item?.id} className="flex justify-between border-b-2 m-2">
            <div className="w-10 h-10">
              <img src={item?.image} alt="Image" />
            </div>
            <div className=" w-3/4">
              <p className="font-semibold">{item?.title}</p>
              <div className="flex justify-between items-center ">
                <p className="font-semibold">${item?.price}</p>
                <div className="font-semibold w-1/2 flex justify-between items-center">
                  <span
                    onClick={() => {
                      removeFromCart(item);
                    }}
                    className="font-lg px-2 h-fit flex justify-center  font-bold items-center cursor-pointer border-1 border-transparent bg-slate-400"
                  >
                    -{" "}
                  </span>{" "}
                  <span className="font-lg p-2">{item?.quantity}</span>{" "}
                  <span
                    onClick={() => addToCart(item)}
                    className="font-lg px-2 h-fit flex justify-center  font-bold items-center cursor-pointer border-1 border-transparent bg-slate-400 "
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="flex flex-col items-center justify-center mt-3">
        <p className="text-4xl font-semibold text-center">
          Total : ${total.toFixed(2)}
        </p>
        <Link to={location.pathname === "/payment" ? "" : "/payment"}>
          <button className="p-3 shadow-md shadow-slate-400 hover:scale-125 bg-orange-300 rounded-2xl text-white font-semibold mt-4">
            {location.pathname === "/payment"
              ? "Go Back To Shopping"
              : "Proceed to Payment"}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
