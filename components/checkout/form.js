import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    country: "",
    zip: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    router.push({
      pathname: "/payment",
      query: data,
    });
  };

  const { name, email, street, city, country, zip } = data;
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg m-4 p-4 bg-white rounded shadow-xl w-1/2"
    >
      <p className="text-gray-800 font-medium">Customer information</p>
      <div className="">
        <label className="block text-sm text-gray-600" htmlFor="cus_name">
          Name
        </label>
        <input
          name="name"
          value={name}
          onChange={handleChange}
          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          type="text"
          required
          placeholder="Your Name"
          aria-label="Name"
        />
      </div>
      <div className="mt-2">
        <label className="block text-sm text-gray-600" htmlFor="cus_email">
          Email
        </label>
        <input
          name="email"
          value={email}
          onChange={handleChange}
          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          type="email"
          required
          placeholder="Your Email"
          aria-label="Email"
        />
      </div>
      <div className="mt-2">
        <label className="block text-sm text-gray-600" htmlFor="cus_email">
          Address
        </label>
        <input
          name="street"
          value={street}
          onChange={handleChange}
          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          type="text"
          required
          placeholder="Street"
          aria-label="Email"
        />
      </div>
      <div className="mt-2">
        <label
          className="hidden text-sm block text-gray-600"
          htmlFor="cus_email"
        >
          City
        </label>
        <input
          name="city"
          value={city}
          onChange={handleChange}
          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          type="text"
          required
          placeholder="City"
          aria-label="Email"
        />
      </div>
      <div className="inline-block mt-2 w-1/2 pr-1">
        <label
          className="hidden block text-sm text-gray-600"
          htmlFor="cus_email"
        >
          Country
        </label>
        <input
          name="country"
          value={country}
          onChange={handleChange}
          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          type="text"
          required
          placeholder="Country"
          aria-label="Email"
        />
      </div>
      <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
        <label
          className="hidden block text-sm text-gray-600"
          htmlFor="cus_email"
        >
          Zip
        </label>
        <input
          name="zip"
          value={zip}
          onChange={handleChange}
          className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          type="number"
          required
          placeholder="Zip"
          aria-label="Email"
        />
      </div>
      <div className="mt-4">
        <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded">
          Go for payment
        </button>
      </div>
    </form>
  );
}
