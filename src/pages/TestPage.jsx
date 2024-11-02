import React, { useState } from "react";
import * as StellarSDK from '@stellar/stellar-sdk'; // Import full SDK

const TestPage = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [issuerAddress, setIssuerAddress] = useState("");
  const [distributorAddress, setDistributorAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


 
  const networkPassPhrase = StellarSDK.Networks.TESTNET
  console.log(`Network: ${networkPassPhrase}`);
  const server = new StellarSDK.Horizon.Server("https://horizon-testnet.stellar.org"); //If there's an error take out the / in the "or/g"
  console.log(`Server: ${server}`)
  const contractID = 'CC4VGQM4ETK77OXFXJGMLC73FVI3ZZUHCCMX3PIFOQ6NSC25H2PW3O73'
  console.log(`ContractID: ${contractID}`);
  
  const stringToSymbol = (value) => {
    return StellarSDK.nativeToScVal(value, {type: 'symbol'})
  }
  const amountToScVal = (account) => new StellarSDK.Address(account).toScVal()

  let params = {
    fee: StellarSDK.BASE_FEE,
    networkPassPhrase: StellarSDK.Networks.TESTNET
  }
  
const handleSubmit = async (event) => {
  event.preventDefault()
  console.log(tokenName, tokenSymbol, totalSupply, issuerAddress, distributorAddress);
  const sourceKeyPair = StellarSDK.Keypair.fromSecret('certain merge tumble stool charge lion disagree ensure attend fire sentence imitate')
  const publicKey = sourceKeyPair.publicKey()



  const functionName = 'init'

  const args = [
    {type: 'Symbol', value: tokenName},
    {type: 'Symbol', value: tokenSymbol},
    {type: 'Uint32', value: parseInt(totalSupply)},
    {type: 'Address', value: issuerAddress},
    {type: 'Address', value: distributorAddress},
  ]

  const account = await server.loadAccount(publicKey)

  const transaction = new StellarSDK.TransactionBuilder(account,
    {
      fee: StellarSDK.BASE_FEE,
      networkPassphrase: StellarSDK.Networks.TESTNET,
    }
  )
  .addOperation(StellarSDK.Operation.invokeHostFunction({
    function: functionName,
    args: args,
    contractId: contractID,
  }))
  .setTimeout(10)
  .build()

  transaction.sign(sourceKeyPair)
  const transactionResult = await server.submitTransaction(transaction)
  console.log(transactionResult);
  
  

}


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
