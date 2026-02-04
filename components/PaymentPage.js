"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import Cover from "../public/cover-img.jpg";
import Pfp from "../public/pfp.jpg";
import { initiate } from "../actions/userActions";
import { useSession } from "next-auth/react";
import { fetchUser, fetchPayments } from "../actions/userActions";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PaymentPage = ({ username }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [paymentForm, setpaymentForm] = useState({});
  const [currentUser, setcurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  const searchParams = useSearchParams();
  const [coverImg, setcoverImg] = useState(currentUser?.cover?.Cover || Cover);
  const [pfp, setpfp] = useState(currentUser?.pfp?.Pfp || Pfp);

  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast("Payment Successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      router.push(`${username}`);
    }
  }, [searchParams, username, router]);

  const handleChange = (e) => {
    setpaymentForm({
      ...paymentForm,
      [e.target.name]: e.target.value,
    });
  };
  // const getData = async () => {
  //   let u = await fetchUser(username);
  //   setcurrentUser(u);
  //   let dbpayments = await fetchPayments(username);
  //   setPayments(dbpayments);
  // };
  useEffect(() => {
    const getData = async () => {
      const u = await fetchUser(username);
      setcurrentUser(u);

      const dbpayments = await fetchPayments(username);
      setPayments(dbpayments);
    };

    if (username) getData();
  }, [username]);

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentForm);

    let orderid = a.id;
    var options = {
      key: currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits.
      currency: "INR",
      name: "BuyMeAChai", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderid, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: session?.user?.name || paymentForm.name || "Guest User",
        email: session?.user?.email || "dummy@gmail.com",
      },
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.open();
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="min-h-screen">
        <div className="cover relative">
          <Image
            src={coverImg}
            alt="Cover Image"
            className="object-cover w-full h-[35vh] md:h-[40vh] lg:h-[50vh]"
            onError={() => setcoverImg(Cover)}
          />

          <div className="  absolute left-1/2  transform -translate-x-1/2 -translate-y-1/2 md:top-100 ">
            <Image
              src={pfp}
              alt="Pfp"
              className="w-30 h-30 rounded-lg "
              onError={() => setpfp(Pfp)}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-20 md:mt-25 gap-2 px-4">
          <h1 className="text-2xl md:text-3xl font-semibold">@{username}</h1>
          <h3 className="font-medium text-gray-50 text-center">
            Lets help {currentUser.name || "this creator"} to have a chai!
          </h3>
          <h3 className="font-medium text-[#BFBFBF] text-center">
            {payments.length} Payments. ₹
            {payments.reduce((acc, payment) => acc + payment.amount / 100, 0)}{" "}
            raised so far.
          </h3>
        </div>

        <div className="payments flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-10 my-10 w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="supporters bg-[#101828] w-full lg:w-1/2 pl-5 py-8 rounded-2xl h-auto max-h-[400px] overflow-y-scroll">
            <h1 className="font-bold pb-4 text-xl">Supporters</h1>
            <ul className="flex flex-col gap-2">
              {payments.length == 0 && <li>No payments yet</li>}
              {payments.map((p, i) => {
                return (
                  <li key={i} className="my-4 flex gap-2 items-center">
                    <img width={33} src="avatar.gif" alt="user avatar" />
                    <span>
                      {p.name} donated{" "}
                      <span className="font-bold">₹{p.amount / 100}</span> with
                      a message &quot;{p.message}&quot;
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="additional bg-[#101828] w-full lg:w-1/2 px-6 md:px-10 py-10 md:py-20 rounded-2xl h-auto flex flex-col items-start justify-center">
            <h1 className="font-bold text-xl mb-4">Make a Payment</h1>

            <div className="input-boxes flex flex-col gap-4 my-4 w-full">
              <input
                name="name"
                onChange={handleChange}
                value={paymentForm.name}
                type="text"
                className="bg-[#1D293B] rounded-md py-3 px-4 min-h-[48px]"
                placeholder="Enter Name"
              />
              <input
                name="message"
                onChange={handleChange}
                value={paymentForm.message}
                type="text"
                className="bg-[#1D293B] rounded-md py-3 px-4 min-h-[48px]"
                placeholder="Enter Message"
              />
              <input
                name="amount"
                onChange={handleChange}
                value={paymentForm.amount}
                type="number"
                className="bg-[#1D293B] rounded-md py-3 px-4 min-h-[48px]"
                placeholder="Enter Amount"
              />
              <button
                onClick={() => pay(Number.parseInt(paymentForm.amount) * 100)}
                className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm py-3 text-center disabled:opacity-50 disabled:bg-linear-to-br disabled:from-purple-100 disabled:to-blue-100 disabled:text-black disabled:cursor-not-allowed min-h-[48px]"
                disabled={
                  !paymentForm.name ||
                  !paymentForm.amount ||
                  !paymentForm.message
                }
              >
                Pay
              </button>
            </div>

            <div className="pay-options flex flex-wrap gap-4 mt-4">
              <button
                onClick={() => pay(1000)}
                disabled={!paymentForm.name || !paymentForm.message}
                className="bg-[#1D293B] px-4 py-3 rounded-md disabled:opacity-50 min-h-[48px]"
              >
                Pay ₹10
              </button>
              <button
                disabled={!paymentForm.name || !paymentForm.message}
                onClick={() => pay(2000)}
                className="bg-[#1D293B] px-4 py-3 rounded-md disabled:opacity-50 min-h-[48px]"
              >
                Pay ₹20
              </button>
              <button
                disabled={!paymentForm.name || !paymentForm.message}
                onClick={() => pay(3000)}
                className="bg-[#1D293B] px-4 py-3 rounded-md disabled:opacity-50 min-h-[48px]"
              >
                Pay ₹30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
