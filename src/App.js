import React from "react"
import {useState,useEffect} from 'react'


function App() {
  const [cryptoData, setcryptoData] = useState([])
  
  useEffect(() => {
    const interval = setInterval(() => {
      fetchCryptoData()
      console.log("table has updated")
  }, 5000) 
  return () => clearInterval(interval)},
  [cryptoData])

  const fetchCryptoData = async () => {
    const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
    const response = await data.json()
    // console.log(response)
    setcryptoData(response)
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
  <div className="py-8">
    <div>
      <h2 className="text-2xl text-center font-semibold leading-tight">Crypto currency live tracking table</h2>
    </div>
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Cryptocurrencies
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                MarketCap Rank
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Price Change - 24hrs
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Percentage Change - 24hrs
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Trend
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
              ></th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map(cryptocurrency => 
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src={cryptocurrency.image}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {cryptocurrency.name}
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">{cryptocurrency.symbol}</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">$ {cryptocurrency.current_price}</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">{cryptocurrency.market_cap_rank}</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">{cryptocurrency.price_change_24h}</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">{cryptocurrency.market_cap_change_percentage_24h}%</p>
              </td>
              {cryptocurrency.market_cap_change_percentage_24h > 0 ?
              (<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                  className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span className="relative">Upward</span>
                </span>
              </td>) : (<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                  className="relative inline-block px-3 py-1 font-semibold text-red-600 leading-tight"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                  ></span>
                  <span className="relative">Downward</span>
                </span>
              </td>
              )}
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
)};

export default App;
