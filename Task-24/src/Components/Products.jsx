import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductContext";
import { CartContext } from "../Contexts/CartContext.jsx";

function Products() {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="w-3/4 flex flex-wrap gap-10 p-5 justify-around">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="w-1/4  shadow-lg shadow-gray-400 rounded-md"
          >
            <div className="w-full h-3/6">
              <img
                src={product.image}
                alt="Product Image"
                className=" h-full w-full"
              />
            </div>
            <div className="bg-orange-300 h-3/6 rounded-lg flex flex-col gap-5 justify-center items-center p-4">
              <h1 className="font-bold">{product.title}</h1>
              <p className="font-semibold">Price: ${product.price}</p>
              <button
                className="border-2 border-black p-2 rounded-md hover:bg-orange-600 font-semibold"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
