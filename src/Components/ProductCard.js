import React, { useState } from "react";
import ProductModal from "./ProductModal";

const ProductCard = ({ product, cartItems, setCartItems, currentUser }) => {
  const [open, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <ProductModal
        open={open}
        setOpen={setOpen}
        product={product}
        cartItems={cartItems}
        setCartItems={setCartItems}
        currentUser={currentUser}
      />
      <div
        className="rounded-lg m-4 shadow-md p-2 hover:shadow-lg transition-all duration-300 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-[45vh] sm:h-[35vh] lg:h-[40vh] xl:h-[45] object-cover rounded-lg transition-all duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="flex flex-row mt-1 justify-between items-center">
          <h2 className="text-gray-600">{product.name}</h2>
          <p className="text-gray-600">{product.price} MXN</p>
        </div>

        {product.availability === "Sold" && (
          <div className="flex flex-row justify-between items-center">
            <p className="text-red-500">{product.availability}</p>
            <div className="rounded-full h-4 w-4 bg-red-500"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
