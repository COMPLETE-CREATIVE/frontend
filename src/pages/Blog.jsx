import React from "react";
import NFT8 from "../assets/NFT8.webp";

function Blog() {
  return (
    <>
      <div className="container mx-auto md:px-12">
        <div className="grid md:grid-cols-2 bg-blue-500 md:gap-12">
          <div className="">
            <img className="rounded-lg" src={NFT8}></img>
          </div>
          <div>
            <div className="mb-4 mt-4">Creator</div>
            <div className="mb-4 mt-4">Total Supply:</div>
            <div className="mb-4">Mint Price:</div>
            <div className="mb-4">Quantity:</div>
            <div className="mb-4">Time Left:</div>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad pariatur
        illo asperiores minima eveniet officia hic sed iusto nesciunt voluptas?
        Tempore enim quam repellendus voluptatem quia commodi, fugiat
        reprehenderit ratione!
      </div>
    </>
  );
}

export default Blog;
