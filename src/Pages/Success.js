import React from "react";

function Success() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#f5f5f5]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
          Thanks for your purchase!
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-stone-600 w-4/5 sm:w-3/5 md:w-1/2 text-center mt-6">
          Check your email for all the details of your purchase.
        </p>

        <a
          href="/products/all"
          className="mt-8 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white px-4 py-2 rounded-lg"
        >
          Go back to products
        </a>
      </div>
    </div>
  );
}

export default Success;
