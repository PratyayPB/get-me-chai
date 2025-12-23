import React from "react";
import Cover from "../../public/cover-img.jpg";
import Pfp from "../../public/pfp.jpg";

import Image from "next/image";

const Username = async ({ params }) => {
  const { username } = await params;
  console.log(username);

  return (
    <div className="min-h-screen ">
      <div className="cover relative">
        <Image
          src={Cover}
          alt="Cover Image"
          className="object-cover h-[50vh]"
        />

        <div className="absolute left-1/2 top-100 transform -translate-x-1/2 -translate-y-1/2">
          <Image src={Pfp} alt="Pfp" className="w-30 h-30 rounded-lg" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-25 gap-2">
        <h1 className="text-3xl font-semibold">{username}</h1>
        <h3 className=" font-medium text-gray-50">
          creating forced perspective masterpieces
        </h3>
        <h3 className="font-medium text-[#BFBFBF]">
          1,553 members . 230 posts
        </h3>
      </div>

      <div className="payments  flex items-start justify-center gap-10 my-10 w-[70%] mx-auto">
        <div className="supporters bg-[#101828]  w-full pl-5 py-8 rounded-2xl h-90  overflow-y-scroll">
          <h1 className="font-bold pb-4 text-xl">Supporters</h1>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="gray"
                viewBox="0 0 430 430"
              >
                <g stroke-linejoin="round" stroke-width="12">
                  <path
                    stroke="#121331"
                    d="M55 350c0-63.513 51.487-115 115-115h90c63.513 0 115 51.487 115 115v25H55z"
                  />
                  <path
                    stroke="#08a88a"
                    stroke-linecap="round"
                    stroke-miterlimit="27.88"
                    d="M272.496 76.733C283.423 89.78 290 106.648 290 125c0 41.478-33.628 75-75 75s-75-33.628-75-75 33.628-75 75-75c23.126 0 43.706 10.396 57.496 26.733"
                  />
                </g>
              </svg>
              Cr7 donated $30 with a message
            </li>
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="gray"
                viewBox="0 0 430 430"
              >
                <g stroke-linejoin="round" stroke-width="12">
                  <path
                    stroke="#121331"
                    d="M55 350c0-63.513 51.487-115 115-115h90c63.513 0 115 51.487 115 115v25H55z"
                  />
                  <path
                    stroke="#08a88a"
                    stroke-linecap="round"
                    stroke-miterlimit="27.88"
                    d="M272.496 76.733C283.423 89.78 290 106.648 290 125c0 41.478-33.628 75-75 75s-75-33.628-75-75 33.628-75 75-75c23.126 0 43.706 10.396 57.496 26.733"
                  />
                </g>
              </svg>
              Cr7 donated $30 with a message
            </li>
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="gray"
                viewBox="0 0 430 430"
              >
                <g stroke-linejoin="round" stroke-width="12">
                  <path
                    stroke="#121331"
                    d="M55 350c0-63.513 51.487-115 115-115h90c63.513 0 115 51.487 115 115v25H55z"
                  />
                  <path
                    stroke="#08a88a"
                    stroke-linecap="round"
                    stroke-miterlimit="27.88"
                    d="M272.496 76.733C283.423 89.78 290 106.648 290 125c0 41.478-33.628 75-75 75s-75-33.628-75-75 33.628-75 75-75c23.126 0 43.706 10.396 57.496 26.733"
                  />
                </g>
              </svg>
              Cr7 donated $30 with a message
            </li>
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="gray"
                viewBox="0 0 430 430"
              >
                <g stroke-linejoin="round" stroke-width="12">
                  <path
                    stroke="#121331"
                    d="M55 350c0-63.513 51.487-115 115-115h90c63.513 0 115 51.487 115 115v25H55z"
                  />
                  <path
                    stroke="#08a88a"
                    stroke-linecap="round"
                    stroke-miterlimit="27.88"
                    d="M272.496 76.733C283.423 89.78 290 106.648 290 125c0 41.478-33.628 75-75 75s-75-33.628-75-75 33.628-75 75-75c23.126 0 43.706 10.396 57.496 26.733"
                  />
                </g>
              </svg>
              Cr7 donated $30 with a message
            </li>
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="gray"
                viewBox="0 0 430 430"
              >
                <g stroke-linejoin="round" stroke-width="12">
                  <path
                    stroke="#121331"
                    d="M55 350c0-63.513 51.487-115 115-115h90c63.513 0 115 51.487 115 115v25H55z"
                  />
                  <path
                    stroke="#08a88a"
                    stroke-linecap="round"
                    stroke-miterlimit="27.88"
                    d="M272.496 76.733C283.423 89.78 290 106.648 290 125c0 41.478-33.628 75-75 75s-75-33.628-75-75 33.628-75 75-75c23.126 0 43.706 10.396 57.496 26.733"
                  />
                </g>
              </svg>
              Cr7 donated $30 with a message
            </li>
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="gray"
                viewBox="0 0 430 430"
              >
                <g stroke-linejoin="round" stroke-width="12">
                  <path
                    stroke="#121331"
                    d="M55 350c0-63.513 51.487-115 115-115h90c63.513 0 115 51.487 115 115v25H55z"
                  />
                  <path
                    stroke="#08a88a"
                    stroke-linecap="round"
                    stroke-miterlimit="27.88"
                    d="M272.496 76.733C283.423 89.78 290 106.648 290 125c0 41.478-33.628 75-75 75s-75-33.628-75-75 33.628-75 75-75c23.126 0 43.706 10.396 57.496 26.733"
                  />
                </g>
              </svg>
              Cr7 donated $30 with a message
            </li>
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="gray"
                viewBox="0 0 430 430"
              >
                <g stroke-linejoin="round" stroke-width="12">
                  <path
                    stroke="#121331"
                    d="M55 350c0-63.513 51.487-115 115-115h90c63.513 0 115 51.487 115 115v25H55z"
                  />
                  <path
                    stroke="#08a88a"
                    stroke-linecap="round"
                    stroke-miterlimit="27.88"
                    d="M272.496 76.733C283.423 89.78 290 106.648 290 125c0 41.478-33.628 75-75 75s-75-33.628-75-75 33.628-75 75-75c23.126 0 43.706 10.396 57.496 26.733"
                  />
                </g>
              </svg>
              Cr7 donated $30 with a message
            </li>
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="gray"
                viewBox="0 0 430 430"
              >
                <g stroke-linejoin="round" stroke-width="12">
                  <path
                    stroke="#121331"
                    d="M55 350c0-63.513 51.487-115 115-115h90c63.513 0 115 51.487 115 115v25H55z"
                  />
                  <path
                    stroke="#08a88a"
                    stroke-linecap="round"
                    stroke-miterlimit="27.88"
                    d="M272.496 76.733C283.423 89.78 290 106.648 290 125c0 41.478-33.628 75-75 75s-75-33.628-75-75 33.628-75 75-75c23.126 0 43.706 10.396 57.496 26.733"
                  />
                </g>
              </svg>
              Cr7 donated $30 with a message
            </li>
          </ul>
        </div>
        <div className="additional  bg-[#101828]  w-full pl-10 py-20 rounded-2xl h-90 flex flex-col items-start justify-center ">
          <h1 className="font-bold text-xl">Make a Payment</h1>

          <div className="input-boxes flex flex-col gap-4 my-4 w-[90%]  ">
            <input
              type="text"
              className=" bg-[#1D293B] rounded-md py-1.5 pl-4"
              placeholder="Enter Name"
            />
            <input
              type="text"
              className="bg-[#1D293B] rounded-md py-1.5 pl-4"
              placeholder="Enter Message"
            />
            <input
              type="number"
              className="bg-[#1D293B] rounded-md py-1.5 pl-4"
              placeholder="Enter Amount"
            />
            <button className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  py-2.5 text-center  ">
              Pay
            </button>
          </div>

          <div className="pay-options flex gap-4 mt-4">
            <button className="bg-[#1D293B] px-3 py-1.5 rounded-md">
              Pay $10
            </button>
            <button className="bg-[#1D293B] px-3 py-1.5 rounded-md">
              Pay $20
            </button>
            <button className="bg-[#1D293B] px-3 py-1.5 rounded-md">
              Pay $30
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Username;
