import React, { useState } from "react";
import StellarSdk from "stellar-sdk"; // Import full SDK

const TestPage = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [issuerAddress, setIssuerAddress] = useState("");
  const [distributorAddress, setDistributorAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Initialize the Stellar testnet server
  const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");
  const networkPassphrase = StellarSdk.Networks.TESTNET; // Use full reference

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Validate that the issuer and distributor addresses are valid
      StellarSdk.Keypair.fromPublicKey(issuerAddress); // Check if issuer address is valid
      StellarSdk.Keypair.fromPublicKey(distributorAddress); // Check if distributor address is valid

      // Create an Asset (Token) on the Stellar blockchain
      const token = new StellarSdk.Asset(tokenSymbol, issuerAddress);

      // Load the distributor account to create a transaction
      const distributorAccount = await server.loadAccount(distributorAddress);

      // Build the transaction to trust the asset from the distributor's side
      const transaction = new StellarSdk.TransactionBuilder(distributorAccount, {
        fee: StellarSdk.BASE_FEE,
        networkPassphrase,
      })
        .addOperation(
          StellarSdk.Operation.changeTrust({
            asset: token,
            limit: totalSupply.toString(), // Set total supply limit
          })
        )
        .setTimeout(100)
        .build();

      // Sign the transaction with the distributor's secret key
      const distributorKeypair = StellarSdk.Keypair.fromSecret("<DISTRIBUTOR_SECRET>");
      transaction.sign(distributorKeypair);

      // Submit the transaction to the Stellar network
      const response = await server.submitTransaction(transaction);

      console.log("Transaction successful:", response);
      setSuccess(`Token ${tokenSymbol} created successfully!`);
    } catch (err) {
      console.error("Transaction failed:", err);
      setError("Failed to create token. Please check the inputs and try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Stellar Token
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="tokenName"
              className="block text-sm font-medium text-gray-700"
            >
              Token Name
            </label>
            <input
              type="text"
              id="tokenName"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter token name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tokenSymbol"
              className="block text-sm font-medium text-gray-700"
            >
              Token Symbol
            </label>
            <input
              type="text"
              id="tokenSymbol"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter token symbol"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="totalSupply"
              className="block text-sm font-medium text-gray-700"
            >
              Total Supply
            </label>
            <input
              type="number"
              id="totalSupply"
              value={totalSupply}
              onChange={(e) => setTotalSupply(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter total supply"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="issuerAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Issuer Address
            </label>
            <input
              type="text"
              id="issuerAddress"
              value={issuerAddress}
              onChange={(e) => setIssuerAddress(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter issuer address"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="distributorAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Distributor Address
            </label>
            <input
              type="text"
              id="distributorAddress"
              value={distributorAddress}
              onChange={(e) => setDistributorAddress(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter distributor address"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            {loading ? "Creating..." : "Create Token"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestPage;
