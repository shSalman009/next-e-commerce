const subtotal = "$210.00";
const discount = { code: "CHEAPSKATE", amount: "$24.00" };
const taxes = "$23.68";
const shipping = "$22.00";
const total = "$341.68";
const products = [
  {
    id: 1,
    name: "Micro Backpack",
    href: "#",
    price: "$70.00",
    color: "Moss",
    size: "5L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg",
    imageAlt:
      "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
  },
  // More products...
];

export default function Example({ cart }) {
  return (
    <div className="bg-gray-200 py-10">
      <div className="container mx-auto">
        <div className=" p-4  leading-loose flex justify-evenly">
          <form className="max-w-lg m-4 p-4 bg-white rounded shadow-xl w-1/2">
            <p className="text-gray-800 font-medium">Customer information</p>
            <div className="">
              <label className="block text-sm text-gray-600" htmlFor="cus_name">
                Name
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_name"
                name="cus_name"
                type="text"
                required=""
                placeholder="Your Name"
                aria-label="Name"
              />
            </div>
            <div className="mt-2">
              <label
                className="block text-sm text-gray-600"
                htmlFor="cus_email"
              >
                Email
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Your Email"
                aria-label="Email"
              />
            </div>
            <div className="mt-2">
              <label
                className="block text-sm text-gray-600"
                htmlFor="cus_email"
              >
                Address
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
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
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
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
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
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
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Zip"
                aria-label="Email"
              />
            </div>
            <p className="mt-4 text-gray-800 font-medium">
              Payment information
            </p>
            <div className="">
              <label className="block text-sm text-gray-600" htmlFor="cus_name">
                Card
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_name"
                name="cus_name"
                type="text"
                required=""
                placeholder="Card Number MM/YY CVC"
                aria-label="Name"
              />
            </div>
            <div className="mt-4">
              <button
                className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                type="submit"
              >
                $3.00
              </button>
            </div>
          </form>
          <div className="w-1/2">
            {Object.keys(cart).map((item) => {
              return (
                <div
                  key={item}
                  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                >
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img
                        className="h-24"
                        src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">
                        {cart[item].name}
                      </span>
                      <span className="text-red-500 text-xs">Apple</span>
                      <div
                        onClick={() => {
                          removeFromCart(item, cart[item].qty);
                          console.log(cart);
                        }}
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg
                      onClick={() => {
                        removeFromCart(item, 1);
                      }}
                      className="fill-current text-gray-600 w-3 cursor-pointer"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <div className="mx-2 border text-center w-8 select-none">
                      {cart[item].qty}
                    </div>

                    <svg
                      className="fill-current text-gray-600 w-3 cursor-pointer"
                      viewBox="0 0 448 512"
                      onClick={() => {
                        addToCart(item, 1);
                      }}
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    $.{cart[item].price}.00
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    $.{cart[item].price * cart[item].qty}.00
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
