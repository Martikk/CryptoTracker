# CryptoTracker

CryptoTracker is a React application that fetches and displays the current prices and market data of various cryptocurrencies using the CoinGecko API. The app is designed with a mobile-first approach and styled to resemble the sleek, dark-themed design of Binance.

## Features

- Fetches and displays the top 10 cryptocurrencies by market cap
- Shows current price, market cap, and 24-hour price change percentage
- Responsive design optimized for mobile devices

## Demo

You can view a live demo of the application [here](#).


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm installed. You can download and install Node.js from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/cryptotracker.git
cd cryptotracker
```

2. Install the dependencies:
```bash
npm install
```
3.Start the development server:
```
npm start
```
### The application will open in your default browser
``http://localhost:3000``


### Project Structure
```
cryptotracker/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── CryptoTracker.js
│   ├── App.js
│   ├── index.js
│   ├── CryptoTracker.scss
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```
## "positive" or "negative" classes comes from the conditional rendering in your JSX
```
<div className={`crypto-change ${crypto.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}`}>
  {crypto.price_change_percentage_24h.toFixed(2)}%
</div>
```
## Built With

- [React](https://react.dev/) - A JavaScript library for building user interfaces
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and Node.js
- [CoinGecko API](https://www.coingecko.com/)  - A free API for cryptocurrency data


## Contributing

1.Fork the project

2.Create your feature branch (git checkout -b feature/new-feature)

3.Commit your changes (git commit -m 'Add some feature')

4.Push to the branch (git push origin feature/new-feature)

4.Open a pull request

## Acknowledgments
- Inspiration from the Binance design
- Thanks to CoinGecko for their awesome API


### Explanation of Sections:
- **Project Title and Description**: Briefly describe what the project is and its purpose.
- **Features**: List key features of the project.
- **Demo**: Provide a link to a live demo if available.
- **Screenshots**: Add screenshots to visually represent the project.
- **Getting Started**: Instructions to set up the project locally.
- **Prerequisites**: List any software or tools required to run the project.
- **Installation**: Detailed steps to install dependencies and run the project.
- **Project Structure**: Outline the directory structure of the project.
- **Built With**: List major libraries and tools used in the project.
- **Contributing**: Guidelines for contributing to the project.
- **License**: Information about the project’s license.
- **Acknowledgments**: Mention any inspirations or acknowledgments related to the project.

Feel free to adjust the content according to your specific project details and preferences.
