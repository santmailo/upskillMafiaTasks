import React from "react";

function Payment() {
  return (
    <div className="w-3/4 flex flex-col flex-wrap gap-4 p-5 justify-around items-center mt-28">
      <h1 className="text-4xl font-bold ">Payment</h1>
      <div className="flex">
        <div className="ml-10">
          <input type="radio" name="method" id="cod" className="text-2xl p-3" />
          <label className="text-2xl p-3" htmlFor="cod">
            Cash on Delivery
          </label>
        </div>
        <div className="ml-10">
          <input
            className="text-2xl p-3"
            type="radio"
            name="method"
            id="card"
          />
          <label className="text-2xl p-3" htmlFor="card">
            Credit Card
          </label>
        </div>
        <br />
      </div>
      <div className="w-2/4 border-slate-400 mt-3 border-2 p-10 rounded-md shadow-lg shadow-slate-600">
        <label className="font-semibold text-2xl block m-2" htmlFor="cardNo">
          Enter Your Card Number.
        </label>
        <input
          className="text-slate-400 block m-2 border-2 border-black p-2 w-full  rounded-md  focus:outline-blue-400 "
          type="text"
          placeholder="Card Number"
          id="cartNo"
        />
        <label className="font-semibold text-2xl block m-2" htmlFor="expiry">
          {"Enter Your Card's Expiry Date"}
        </label>
        <input
          className="text-slate-400 block m-2 border-2 border-black p-2 w-full  rounded-md  focus:outline-blue-400"
          type="text"
          placeholder="Expiry Date"
          id="expiry"
        />
        <label className="font-semibold text-2xl block m-2" htmlFor="cvv">
          Enter your CVV
        </label>
        <input
          className="text-slate-400 block m-2 border-2 border-black p-2 w-full    focus:outline-blue-400 rounded-md"
          type="text"
          placeholder="CVV"
          id="cvv"
        />
      </div>
      <button className="text-3xl hover:scale-125 text-white bg-orange-300 mt-3 rounded-2xl p-3 shadow-md shadow-slate-400">
        Confirm Payment
      </button>
    </div>
  );
}

export default Payment;
