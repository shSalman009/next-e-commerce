import React, { useState } from "react";
import { toastSuccess } from "../Toast";

export default function Edit({ user, getUser, setCurrent }) {
  const [data, setData] = useState({
    name: user?.name ? user.name : "",
    email: user?.email ? user.email : "",
    phone: user?.phone ? user.phone : "",
    address: user?.address ? user.address : "",
    city: user?.city ? user.city : "",
    country: user?.country ? user.country : "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateUser`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();

    if (response.success) {
      toastSuccess(response.message);
      await getUser();
      setCurrent(0);
    }
  };

  var { name, email, phone, address, city, country } = data;

  return (
    <div className="container mx-auto">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Full Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email Address{" "}
              <span className="font-semibold text-gray-400">
                (not available)
              </span>
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="grid-email"
              type="email"
              placeholder="example@gmail.com"
              name="email"
              value={email}
              onChange={handleChange}
              disabled
              readOnly
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-phone"
            >
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-phone"
              type="number"
              placeholder="+880"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-address"
            >
              Address
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-address"
              type="text"
              placeholder="1234 NW Bobcat Lane"
              name="address"
              value={address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
              name="city"
              value={city}
              onChange={handleChange}
            />
          </div>

          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-country"
            >
              Country
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-country"
              type="text"
              placeholder="Bangladesh"
              name="country"
              value={country}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase px-5  rounded-sm "
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
