import React from "react";
// import Rixa from "../assets/Rixa.jpeg";
import NFT1 from "../assets/NFT1.avif";
// import NFT2 from "../assets/NFT2.webp";
import { TOKENS } from "../Services/Helper";
import { Link } from "react-router-dom";

function MarketPlace() {
  try {
    const myWord = "elephant";
    let firstThree = myWord.substring(0, 3);
    let lastFour = myWord.substring(myWord.length - 4);
    let myFinal = firstThree + "..." + lastFour;
    console.log(myFinal);
  } catch (error) {
    console.log(error);
  }
  function sliceAddress() {
    try {
      const tokenAddress = TOKENS;
      let tokenAddresArray = [];

      for (let i = 0; i <= tokenAddress.length; i++) {
        let token = tokenAddress[i];
        if (token && token.address) {
          let myAddr = token.address;
          let sliceAddr = myAddr.slice(0, 3) + "..." + myAddr.slice(-4);
          tokenAddresArray.push(sliceAddr);
        } else {
          console.warn(`Skipping invalid token at ${i}`, tokenAddress);
        }
      }
      console.log(tokenAddresArray);
    } catch (error) {
      console.log(error);
    }
  }
  sliceAddress();

  return (
    <>
      <div>
        {/* SECTION */}

        <section
          className="relative bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${NFT1})` }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-50"></div>{" "}
          {/* Blue overlay with transparency */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="sm:text-5xl  font-bold  mt-12">
                Ready to Transform Your Creativity ?{" "}
                {/* <span>Tokenize and Crowdfund Your Projects</span> */}
              </h1>
              <p className="text-lg mt-4 mb-4">
                Join our platform today and start your journey towards
                empowering your creativity and connecting with your audience.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                <a href="marketplace"> Explore Creative Works</a>
              </button>
              <button className="bg-transparent border border-white hover:bg-white hover:text-blue-900 text-white font-bold py-2 px-4 rounded">
                <a href="about">Join Now!</a>
              </button>
            </div>
          </div>
        </section>

        {/* SECTION */}



<section className="bg-gray-100 py-16">
  {/* <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Marketplace</h2> */}
  <div className="container mx-auto px-6 mb-4 flex flex-wrap gap-4">
    {TOKENS.map((token, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            // src={NFT2}
            src={token.image}
            alt="Token "
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-center text-blue-900">
              {token.creator}
            </h3>
            <p className="text-gray-600">
              Creator: <span className="text-blue-500">0x123...456</span>
            </p>
            <p className="text-gray-600">
              Total Supply: <span className="text-blue-500">{token.totalSupply}</span>
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">
              Mint Price: <span className="text-blue-500">{token.mintPrice} XLM</span>
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">
              Time Left:{" "}
              <span className="text-blue-500" id="countdown1">
                3d 12h 45m
              </span>
            </p>
          </div>
          <button className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mb-2 rounded-lg w-full">
            {token.mintPrice} XLM
          </button>
 
                  <Link to={`/details/${token.id}`}>
                    {/* &creator=${token.creator}&address=${token.address}&mint-price=${token.mintPrice} XLM */}
                    <button class="bg-slate-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default MarketPlace;
