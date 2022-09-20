import mongoose from "mongoose";
import Link from "next/link";
import React from "react";
import Product from "../model/Product";

export default function TShirts({ products }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {products &&
            Object.keys(products).map((key) => {
              const item = products[key];

              return (
                <Link key={item._id} href={`/product/${item.slug}`}>
                  <div className="lg:w-1/5 md:w-1/2 p-4 m-5 w-full shadow-md cursor-pointer">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-top w-full h-full block"
                        src={item.img}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <div className="flex gap-2 my-2">
                        {item.size.map((s) => (
                          <div className="border px-2" key={s}>
                            {s}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 my-2">
                        {item.color.map((s) => (
                          <button
                            key={s}
                            className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none my-2"
                            style={{ background: s }}
                          ></button>
                        ))}
                      </div>

                      <p className="mt-1">${item.price}.00</p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  const products = await Product.find({ category: "t-shirt" });

  const tShirts = {};

  for (let item of products) {
    if (item.title in tShirts) {
      if (
        !tShirts[item.title].color.includes(item.color) &&
        item.availibleQty > 0
      ) {
        tShirts[item.title].color.push(item.color);
      }
      if (
        !tShirts[item.title].size.includes(item.size) &&
        item.availibleQty > 0
      ) {
        tShirts[item.title].size.push(item.size);
      }
    } else {
      tShirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availibleQty > 0) {
        tShirts[item.title].color = [item.color];
        tShirts[item.title].size = [item.size];
      }
    }
  }

  return {
    props: { products: tShirts },
  };
}
