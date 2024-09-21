import React from "react";
import { useParams } from "react-router-dom";
import { TOKENS } from "../Services/Helper";

function DetailsPage() {
  const { id } = useParams();
  console.log("ID from params:", id);
  console.log("TOKENS array:", TOKENS);
  const token = TOKENS.find((token) => token.id === id);
  console.log("details Page", token);
  console.log("ok");

  if (!token) {
    return <div className="text-center py-16">Token not found</div>;
  }
  return (
    <>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="shade1 p-8 rounded-lg shadow-md max-w-6xl mx-auto">
            {/* NFT Image and Details */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mb-12">
              {/* NFT Image */}
              <div className="flex justify-center">
                <img
                  src={token.image}
                  alt="Token "
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              {/* NFT Details */}
              <div>
                <h3 className="text-3xl font-semibold text-blue-900 mb-6">
                  Token Details
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Creator:</strong>{" "}
                  <span className="text-blue-500">{token.creator}</span>
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Owner:</strong>{" "}
                  <span className="text-blue-500">{token.address}</span>
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Category:</strong>{" "}
                  <span className="text-blue-500">{token.category}</span>
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Description:</strong>{" "}
                  <span className="text-blue-500">
                    {token.description}
                  </span>
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Total Supply:</strong>{" "}
                  <span className="text-blue-500">{token.totalSupply}</span>
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Mint Price:</strong>{" "}
                  <span className="text-blue-500">{token.mintPrice} XLM</span>
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Time Left:</strong>{" "}
                  <span className="text-blue-500">3d 12h 45m</span>
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Number of People Minted:</strong>{" "}
                  <span className="text-blue-500">150</span>
                </p>
                <div className="flex justify-start space-x-4">
                  <button className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                    Mint Token
                  </button>
                  <button className="bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                    View on Explorer
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Enhanced Transaction Table */}
          <div className="shade2 p-8 rounded-lg shadow-md max-w-6xl mx-auto mt-12">
            <h3 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
              Transaction History
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 bg-gray-200"> ID#</th>
                    <th className="py-2 px-4 bg-gray-200">Buyer Address</th>
                    <th className="py-2 px-4 bg-gray-200">Amount</th>
                    <th className="py-2 px-4 bg-gray-200">Transaction Date</th>
                    <th className="py-2 px-4 bg-gray-200">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample row */}
                  {token.holder ?
                    token.holder.map((token, index) => (
                      <tr key={index}>
                        <td className="border-t py-2 px-4">{token.id}</td>
                        <td className="border-t py-2 px-4">{token.address}</td>
                        <td className="border-t py-2 px-4">
                          {token.holder_quantity} XLM
                        </td>
                        <td className="border-t py-2 px-4">2024-01-01</td>
                        <td className="border-t py-2 px-4">{token.message}</td>
                      </tr>
                    )):<td className="border-t py-2 px-4">No records found</td>}
                  {/* Repeat for other rows */}
                  {/* <tr>
                  <td className="border-t py-2 px-4">2</td>
                  <td className="border-t py-2 px-4">0xBuyerAddress2</td>
                  <td className="border-t py-2 px-4">30 XLM</td>
                  <td className="border-t py-2 px-4">2024-01-02</td>
                  <td className="border-t py-2 px-4">Pending</td>
                </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
