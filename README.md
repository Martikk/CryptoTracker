# CryptoTracker

CryptoTracker is a React application that fetches and displays the current prices and market data of various cryptocurrencies using the CoinGecko API. The app is designed with a mobile-first approach and styled to resemble the sleek, dark-themed design of Binance.

## Features

- Fetches and displays the top 10 cryptocurrencies by market cap
- Shows current price, market cap, and 24-hour price change percentage
- Responsive design optimized for mobile devices

## Demo

You can view a live demo of the application [here](#).

## Screenshots

![CryptoTracker Screenshot](path/to/screenshot.png)

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