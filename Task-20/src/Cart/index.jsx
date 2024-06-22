/* eslint-disable react/prop-types */
import { useState } from "react";
import "./style.css";

// eslint-disable-next-line react/prop-types
export default function Cart({ products, setProducts, total, setTotal }) {
  return (
    <>
      <div className="cart-container">
        <h2>Cart</h2>
        {products.map((item) => {
          return (
            <Product
              key={item.key + item.count}
              setTotal={setTotal}
              item={item}
              setCartItems={setProducts}
              total={total}
            />
          );
        })}
        <h2 className="cart-total">Total:- ${total}</h2>
      </div>
    </>
  );
}

function Product({ item, setTotal, setCartItems, total }) {
  const [count, setCount] = useState(1);

  return (
    <div className="cart-item-container">
      <div className="cart-item-img-container">
        <img src={item.img} title="item-image" />
      </div>
      <div className="cart-product-details-container">
        <p className="item-name">{item.name}</p>
        <div className="cart-product-details">
          <p>${item.price}</p>
          <div>
            <button
              className="btn"
              onClick={() => {
                if (count == 1) {
                  setCartItems((prevItems) =>
                    prevItems.filter(
                      (itemToRemove) => itemToRemove.key !== item.key
                    )
                  );
                  setTotal(total - item.price);
                } else {
                  setCount(count - 1);
                  setTotal(total - item.price);
                }
              }}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className="btn"
              onClick={() => {
                setTotal(total + item.price);
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
