import AdminLayout from "../../(auth)/components/AdminLayout";

const cryptoAssets = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    icon: "₿",
    price: "$42,560.20",
    change: "+2.45%",
    amount: "0.024 BTC",
    value: "$1,021.44",
    positive: true,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    icon: "Ξ",
    price: "$2,285.50",
    change: "+1.82%",
    amount: "0.85 ETH",
    value: "$1,942.67",
    positive: true,
  },
  {
    name: "Tether",
    symbol: "USDT",
    icon: "₮",
    price: "$1.00",
    change: "0.02%",
    amount: "1,250 USDT",
    value: "$1,250.00",
    positive: true,
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    icon: "B",
    price: "$310.25",
    change: "-1.24%",
    amount: "2.40 BNB",
    value: "$744.60",
    positive: false,
  },
];

const transactions = [
  {
    name: "Bitcoin",
    type: "Received",
    date: "Aug 18, 2024",
    amount: "+0.005 BTC",
    value: "+$212.80",
    positive: true,
  },
  {
    name: "Ethereum",
    type: "Sent",
    date: "Aug 17, 2024",
    amount: "-0.120 ETH",
    value: "-$274.26",
    positive: false,
  },
  {
    name: "Tether",
    type: "Received",
    date: "Aug 16, 2024",
    amount: "+500 USDT",
    value: "+$500.00",
    positive: true,
  },
  {
    name: "Binance Coin",
    type: "Sent",
    date: "Aug 15, 2024",
    amount: "-0.50 BNB",
    value: "-$155.12",
    positive: false,
  },
];

export default function CryptoPage() {
  return (
    <AdminLayout>

      {/* PAGE HEADER */}

      <div className="crypto-page-header">

        <div>
          <h1>Crypto</h1>

          <p>
            Manage your cryptocurrency portfolio
          </p>
        </div>

        <div className="crypto-header-actions">

          <button>
            + Buy Crypto
          </button>

          <button className="crypto-outline-button">
            Send
          </button>

        </div>

      </div>


      {/* BALANCE CARDS */}

      <div className="crypto-balance-grid">

        <div className="crypto-total-card">

          <div className="crypto-card-top">

            <div>
              <span>
                Total Balance
              </span>

              <h2>
                $12,845.60
              </h2>
            </div>

            <div className="crypto-wallet-icon">
              $
            </div>

          </div>

          <div className="crypto-balance-bottom">

            <span>
              +12.45% this month
            </span>

            <small>
              Updated just now
            </small>

          </div>

        </div>


        <div className="crypto-small-card">

          <div className="crypto-small-icon bitcoin">
            ₿
          </div>

          <div>
            <span>Bitcoin</span>

            <strong>
              $4,560.20
            </strong>

            <em>
              +2.45%
            </em>
          </div>

        </div>


        <div className="crypto-small-card">

          <div className="crypto-small-icon ethereum">
            Ξ
          </div>

          <div>
            <span>Ethereum</span>

            <strong>
              $3,842.50
            </strong>

            <em>
              +1.82%
            </em>
          </div>

        </div>


        <div className="crypto-small-card">

          <div className="crypto-small-icon tether">
            ₮
          </div>

          <div>
            <span>USDT</span>

            <strong>
              $2,250.00
            </strong>

            <em>
              +0.02%
            </em>
          </div>

        </div>

      </div>


      {/* MAIN CRYPTO GRID */}

      <div className="crypto-main-grid">

        {/* MARKET CHART */}

        <div className="dashboard-card crypto-chart-card">

          <div className="dashboard-card-header">

            <div>

              <h3>
                Portfolio Statistics
              </h3>

              <p>
                Your crypto portfolio performance
              </p>

            </div>

            <button>
              This Week ⌄
            </button>

          </div>


          <div className="crypto-chart-info">

            <strong>
              $12,845.60
            </strong>

            <span>
              +12.45%
            </span>

          </div>


          <div className="crypto-chart">

            <div className="crypto-chart-grid">

              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>

            </div>

            <svg
              viewBox="0 0 700 250"
              preserveAspectRatio="none"
            >

              <defs>

                <linearGradient
                  id="cryptoGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="0%"
                    stopOpacity="0.25"
                  />

                  <stop
                    offset="100%"
                    stopOpacity="0"
                  />

                </linearGradient>

              </defs>

              <polygon
                points="
                  0,210
                  80,170
                  150,185
                  220,120
                  300,145
                  380,90
                  460,125
                  540,75
                  620,105
                  700,45
                  700,250
                  0,250
                "
                fill="url(#cryptoGradient)"
              />

              <polyline
                points="
                  0,210
                  80,170
                  150,185
                  220,120
                  300,145
                  380,90
                  460,125
                  540,75
                  620,105
                  700,45
                "
                fill="none"
                stroke="#ff7655"
                strokeWidth="3"
              />

            </svg>


            <div className="crypto-chart-days">

              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>

            </div>

          </div>

        </div>


        {/* WALLET */}

        <div className="dashboard-card crypto-wallet-card">

          <div className="dashboard-card-header">

            <div>

              <h3>
                My Wallet
              </h3>

              <p>
                Total wallet balance
              </p>

            </div>

            <button>
              •••
            </button>

          </div>


          <div className="wallet-balance">

            <span>
              Available Balance
            </span>

            <strong>
              $8,452.80
            </strong>

          </div>


          <div className="wallet-actions">

            <button>
              ↓
              <span>Receive</span>
            </button>

            <button>
              ↑
              <span>Send</span>
            </button>

            <button>
              ⇄
              <span>Swap</span>
            </button>

          </div>


          <div className="wallet-address">

            <span>
              Wallet Address
            </span>

            <div>

              <p>
                0x71C7...8F4A
              </p>

              <button>
                Copy
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* ASSETS + MARKET */}

      <div className="crypto-bottom-grid">

        {/* ASSETS */}

        <div className="dashboard-card crypto-assets-card">

          <div className="dashboard-card-header">

            <div>

              <h3>
                My Assets
              </h3>

              <p>
                Your cryptocurrency holdings
              </p>

            </div>

            <button>
              View All
            </button>

          </div>


          <div className="crypto-assets-list">

            {cryptoAssets.map((asset) => (

              <div
                className="crypto-asset-row"
                key={asset.symbol}
              >

                <div className="crypto-asset-icon">
                  {asset.icon}
                </div>

                <div className="crypto-asset-name">

                  <strong>
                    {asset.name}
                  </strong>

                  <span>
                    {asset.symbol}
                  </span>

                </div>

                <div className="crypto-asset-price">

                  <strong>
                    {asset.price}
                  </strong>

                  <span
                    className={
                      asset.positive
                        ? "crypto-positive"
                        : "crypto-negative"
                    }
                  >
                    {asset.change}
                  </span>

                </div>

                <div className="crypto-asset-amount">

                  <strong>
                    {asset.amount}
                  </strong>

                  <span>
                    {asset.value}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* MARKET OVERVIEW */}

        <div className="dashboard-card market-card">

          <div className="dashboard-card-header">

            <div>

              <h3>
                Market Overview
              </h3>

              <p>
                Today's crypto market
              </p>

            </div>

            <span>
              •••
            </span>

          </div>


          <div className="market-item">

            <div className="market-coin">
              ₿
            </div>

            <div>
              <strong>
                Bitcoin
              </strong>

              <span>
                BTC
              </span>
            </div>

            <div className="market-price">

              <strong>
                $42,560.20
              </strong>

              <span className="crypto-positive">
                +2.45%
              </span>

            </div>

          </div>


          <div className="market-item">

            <div className="market-coin ethereum-coin">
              Ξ
            </div>

            <div>
              <strong>
                Ethereum
              </strong>

              <span>
                ETH
              </span>
            </div>

            <div className="market-price">

              <strong>
                $2,285.50
              </strong>

              <span className="crypto-positive">
                +1.82%
              </span>

            </div>

          </div>


          <div className="market-item">

            <div className="market-coin tether-coin">
              ₮
            </div>

            <div>
              <strong>
                Tether
              </strong>

              <span>
                USDT
              </span>
            </div>

            <div className="market-price">

              <strong>
                $1.00
              </strong>

              <span className="crypto-positive">
                +0.02%
              </span>

            </div>

          </div>


          <div className="market-item">

            <div className="market-coin bnb-coin">
              B
            </div>

            <div>
              <strong>
                Binance Coin
              </strong>

              <span>
                BNB
              </span>
            </div>

            <div className="market-price">

              <strong>
                $310.25
              </strong>

              <span className="crypto-negative">
                -1.24%
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* TRANSACTIONS */}

      <div className="dashboard-card crypto-transactions">

        <div className="dashboard-card-header">

          <div>

            <h3>
              Recent Transactions
            </h3>

            <p>
              Your latest crypto transactions
            </p>

          </div>

          <button>
            View All
          </button>

        </div>


        <div className="crypto-table-wrapper">

          <table className="crypto-table">

            <thead>

              <tr>

                <th>
                  Asset
                </th>

                <th>
                  Type
                </th>

                <th>
                  Date
                </th>

                <th>
                  Amount
                </th>

                <th>
                  Value
                </th>

                <th>
                  Status
                </th>

              </tr>

            </thead>


            <tbody>

              {transactions.map(
                (transaction, index) => (

                  <tr key={index}>

                    <td>

                      <strong>
                        {transaction.name}
                      </strong>

                    </td>

                    <td>
                      {transaction.type}
                    </td>

                    <td>
                      {transaction.date}
                    </td>

                    <td>
                      {transaction.amount}
                    </td>

                    <td
                      className={
                        transaction.positive
                          ? "crypto-positive"
                          : "crypto-negative"
                      }
                    >
                      {transaction.value}
                    </td>

                    <td>

                      <span className="transaction-status">
                        Completed
                      </span>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>
  );
}