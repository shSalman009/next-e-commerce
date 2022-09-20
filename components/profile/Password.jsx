import React, { useState } from "react";
import { toastError, toastSuccess } from "../Toast";

const passData = [
  { id: 1, name: "currentPassword" },
  { id: 2, name: "newPassword" },
  { id: 3, name: "confirmPassword" },
];

export default function Password({ user, setCurrent }) {
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.newPassword === password.confirmPassword) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/updatePassword`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user, password }),
        }
      );
      const response = await res.json();
      if (response.success) {
        toastSuccess(response.message);
        setPassword({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        setCurrent(0);
      } else {
        toastError(response.message);
      }
    } else {
      toastError("New password should be matched with confirm password");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="container mx-auto">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        {passData.map((data) => (
          <div key={data.id} className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor={data.name}
              >
                Current Password
              </label>
              <input
                required
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                id={data.name}
                type="password"
                placeholder="******************"
                name={data.name}
                value={password[data.name]}
                onChange={handleChange}
              />
            </div>
          </div>
        ))}

        {/* <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Current Password
            </label>
            <input
              required
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password"
              type="password"
              placeholder="******************"
              name="currentPassword"
              value={password.currentPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              New Password
            </label>
            <input
              required
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password"
              type="password"
              placeholder="******************"
              name="newPassword"
              value={password.newPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Confirm Password
            </label>
            <input
              required
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password"
              type="password"
              placeholder="******************"
              name="confirmPassword"
              value={password.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div> */}
      </div>
      <div>
        <button
          type="submit"
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase px-5  rounded-sm"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
