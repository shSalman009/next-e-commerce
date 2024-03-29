import { useRouter } from "next/router";
import React, { useState } from "react";
import shortid from "shortid";
import { useUser } from "../../context/UserContext";

export default function Form({ cart }) {
  const { userToken } = useUser();

  const [data, setData] = useState({
    name: "",
    email: userToken ? userToken.email : "",
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

    const generateId = shortid.generate();

    const sendData = { ...data, orderId: generateId };

    router.push({
      pathname: "/payment",
      query: sendData,
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

      {userToken ? (
        <div className="mt-2">
          <label className="block text-sm text-gray-600" htmlFor="cus_email">
            Email{" "}
            <span className="font-semibold text-gray-400">
              (you can not write here)
            </span>
          </label>
          <input
            name="email"
            value={email}
            className="w-full px-2 py-2 text-gray-700 bg-gray-300 rounded"
            type="email"
            required
            placeholder="Your Email"
            aria-label="Email"
            disabled
            readOnly
          />
        </div>
      ) : (
        <div className="mt-2">
          <label className="block text-sm text-gray-600" htmlFor="cus_email">
            Email
          </label>
          <input
            name="email"
            value={email}
            onChange={handleChange}
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded read-only:"
            type="email"
            required
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>
      )}

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
        <button
          disabled={Object.keys(cart).length == 0}
          className="disabled:bg-indigo-300 disabled:cursor-not-allowed  bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
        >
          Go for payment
        </button>
      </div>
    </form>
  );
}
