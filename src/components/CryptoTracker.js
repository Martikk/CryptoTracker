// Importing necessary libraries and styles
import React, { useState, useEffect } from 'react'; // React library and hooks for state and effect management
import axios from 'axios'; // Library for making HTTP requests
import './CryptoTracker.scss'; // Importing SCSS file for styling

// Defining the CryptoTracker component
const CryptoTracker = () => {
  // Declaring state variables using the useState hook
  const [cryptoData, setCryptoData] = useState([]); // State to hold cryptocurrency data
  const [loading, setLoading] = useState(true); // State to handle loading state

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch cryptocurrency data from the API
    const fetchCryptoData = async () => {
      try {
        // Making a GET request to the CoinGecko API to get cryptocurrency market data
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd', // Fetching prices in USD
            order: 'market_cap_desc', // Ordering by market capitalization in descending order
            per_page: 20, // Limiting to 10 cryptocurrencies per page
            page: 1, // Fetching the first page
            sparkline: false, // Disabling sparkline data
          },
        });
        // Setting the fetched data to the state
        setCryptoData(response.data); // Updating state with the fetched data
        setLoading(false); // Setting loading state to false after data is fetched
      } catch (error) {
        // Logging any errors that occur during the API call
        console.error("Error fetching data:", error); // Logging error to the console
        setLoading(false); // Setting loading state to false if there is an error
      }
    };

    // Calling the function to fetch data
    fetchCryptoData(); // Triggering data fetch when the component mounts
  }, []); // Empty dependency array means this effect runs only once after the initial render

  // If data is still loading, display a loading message
  if (loading) {
    return <div>Loading...</div>; // Displaying loading message while data is being fetched
  }

  // Returning the JSX to render the component
  return (
    <div className="crypto-tracker"> {/* Container for the crypto tracker */}
      <h1>Crypto Price Tracker</h1> {/* Heading for the crypto tracker */}
      <ul className="crypto-list"> {/* List to hold cryptocurrency items */}
        {cryptoData.map((crypto) => ( // Iterating over the cryptocurrency data
          <li key={crypto.id}> {/* List item for each cryptocurrency */}
            <div className="crypto-details"> {/* Container for cryptocurrency details */}
              <h2>{crypto.name}</h2> {/* Displaying the name of the cryptocurrency */}
              <p className="crypto-price">${crypto.current_price.toLocaleString()}</p> {/* Displaying the current price */}
              <p>Market Cap: ${crypto.market_cap.toLocaleString()}</p> {/* Displaying the market cap */}
            </div>
            <div className={`crypto-change ${crypto.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}`}> {/* Container for price change percentage with conditional styling */}
              {crypto.price_change_percentage_24h.toFixed(2)}% {/* Displaying the 24-hour price change percentage */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoTracker; // Exporting the CryptoTracker component for use in other parts of the application
