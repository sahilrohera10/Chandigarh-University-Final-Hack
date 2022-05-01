import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Category() {
  const b = "books";
  const s = "stationery";
  const f = "furniture";
  const o = "others";

  return (
    <div className="pb-16">
      <div className="flex justify-center items-center">
        <div
          style={{ width: "1000px" }}
          className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full"
        >
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center space-y-2">
              <p className="text-xl leading-5 text-gray-600">
                2021 Trendsetters
              </p>
              <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
                Shop By Category
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
              <div className="relative group flex justify-center items-center h-full w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://st2.depositphotos.com/4185411/8501/i/950/depositphotos_85015512-stock-photo-still-life-with-a-pile.jpg"
                  alt="girl-image"
                />

                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  <Link to={`products/${b}`}>Books</Link>
                </button>

                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="data:image/jpeg;base64,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"
                    alt="shoe-image"
                  />

                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    <Link to={`products/${s}`}>Stationery</Link>
                  </button>

                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://storage.googleapis.com/static_images/v3_product_images/sprint9/tmp/01-Mar-2019T10-38-1551436717__pUpload_tmp/prods/new_images/elt-st/lifestyle/normal/1.png"
                    alt="watch-image"
                  />

                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    <Link to={`products/${f}`}>Furniture</Link>
                  </button>

                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
              </div>
              <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://c8.alamy.com/comp/2FKR4G4/a-positive-person-from-objects-a-man-made-of-sports-and-electronic-items-vertical-frame-2FKR4G4.jpg"
                  alt="girl-image"
                />

                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  <Link to={`products/${o}`}>Others</Link>
                </button>

                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
              <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                <img
                  className="object-center object-cover h-full w-full hidden md:block"
                  src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                  alt="girl-image"
                />
                <img
                  className="object-center object-cover h-full w-full md:hidden"
                  src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                  alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                />
                <Link to="products">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Women
                  </button>
                </Link>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
            </div>
            <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
              <img
                className="object-center object-cover h-full w-full hidden md:block"
                src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                alt="girl-image"
              />
              <img
                className="object-center object-cover h-full w-full sm:hidden"
                src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
              />
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Women
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}