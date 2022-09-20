import React from "react";

export default function Profile({ user, setCurrent }) {
  if (user) {
    var { name, email, phone, address, city, country } = user;
  }

  const NotSet = () => {
    return <span className="text-sm text-gray-500 font-semibold">Not set</span>;
  };

  return (
    <div className="container mx-auto">
      <div className="w-full ">
        <h2 className="font-semibold text-4xl mt-7 mb-5 ">My Profile</h2>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Full Name
            </div>
            <div className=" block text-xl w-full bg-grey-lighter text-grey-darker py-2 mb-3">
              {name ? name : <NotSet />}
            </div>
          </div>

          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Email Address
            </div>
            <div className=" block text-xl w-full bg-grey-lighter text-grey-darker py-2 mb-3">
              {email ? email : <NotSet />}
            </div>
          </div>

          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Phone Number
            </div>
            <div className=" block text-xl w-full bg-grey-lighter text-grey-darker py-2 mb-3">
              {phone ? phone : <NotSet />}
            </div>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Address
            </div>
            <div className=" block text-xl w-full bg-grey-lighter text-grey-darker py-2 mb-3">
              {address ? address : <NotSet />}
            </div>
          </div>

          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              City
            </div>
            <div className=" block text-xl w-full bg-grey-lighter text-grey-darker py-2 mb-3">
              {city ? city : <NotSet />}
            </div>
          </div>

          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Country
            </div>
            <div className=" block text-xl w-full bg-grey-lighter text-grey-darker py-2 mb-3">
              {country ? country : <NotSet />}
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={() => setCurrent(1)}
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase px-5 mr-3 rounded-sm "
        >
          Edit Profile
        </button>
        <button
          onClick={() => setCurrent(3)}
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase px-5  rounded-sm "
        >
          Change Password
        </button>
      </div>
    </div>
  );
}
