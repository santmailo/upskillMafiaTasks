// import { useState } from "react";
import "./style.css";

const shoes = [
  {
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-shoe-66RGqF.png",
    name: "shoe 1",
    price: 50,
    count: 0,
    key: 1,
  },
  {
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-shoe-66RGqF.png",
    name: "shoe 2",
    price: 100,
    count: 0,
    key: 2,
  },
  {
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-shoe-66RGqF.png",
    name: "shoe 3",
    price: 150,
    count: 0,
    key: 3,
  },
  {
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-shoe-66RGqF.png",
    name: "shoe 4",
    price: 200,
    count: 0,
    key: 4,
  },
  {
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-shoe-66RGqF.png",
    name: "shoe 5",
    price: 250,
    count: 0,
    key: 5,
  },
  {
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-shoe-66RGqF.png",
    name: "shoe 6",
    price: 300,
    count: 0,
    key: 6,
  },
  {
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-shoe-66RGqF.png",
    name: "shoe 7",
    price: 350,
    count: 0,
    key: 7,
  },
  {
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-shoe-66RGqF.png",
    name: "shoe 8",
    price: 400,
    count: 0,
    key: 8,
  },
];

// eslint-disable-next-line react/prop-types
export default function Products({ cartItems, setCartItems, total, setTotal }) {
  function addItems(items) {
    // eslint-disable-next-line react/prop-types
    for (let i = 0; i < cartItems.length; i++) {
      // eslint-disable-next-line react/prop-types
      if (cartItems[i].key == items.key) return;
    }

    setCartItems([...cartItems, items]);
    setTotal(total + items.price);
  }
  return (
    <>
      <div className="products-container">
        {shoes.map((shoe) => {
          return (
            <div className="product" key={shoe.key + shoe.count + cartItems}>
              <div className="img-container">
                <img className="shoe-img" src={shoe.img} alt="shoe-img" />
              </div>
              <div className="product-details">
                <h4 className="shoe-name">{shoe.name}</h4>
                <p className="price">${shoe.price}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addItems(shoe)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
