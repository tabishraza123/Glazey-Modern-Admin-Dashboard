"use client";

import { useState } from "react";
import "./../../css/banking.css";
import AdminLayout from "../../(auth)/components/AdminLayout";

export default function Home() {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    ["⌂", "Dashboard"],
    ["✉", "Email"],
    ["♙", "Contacts"],
    ["₿", "Crypto"],
    ["▣", "Kanban"],
    ["▤", "Invoicing"],
    ["▱", "Banking"],
    ["▣", "Ticketing"],
    ["▤", "File Manager"],
    ["♙", "User"],
    ["□", "Calendar"],
    ["☷", "Todo List"],
  ];

  const transactions = [
    ["Portu Studio", "$ 650,036.34", "March 25, 2021"],
    ["Akademi Studio", "$ 650,036.34", "March 25, 2021"],
    ["Nexturn Studio", "$ 650,036.34", "March 25, 2021"],
    ["Geox Studio", "$ 650,036.34", "March 25, 2021"],
    ["Kleon Studio", "$ 650,036.34", "March 25, 2021"],
  ];

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logo">
          Glazey<span>.</span>
        </div>

        <nav className="menu">
          {menu.map(([icon, name]) => (
            <div
              key={name}
              className={`menu-item ${
                active === name ? "active" : ""
              }`}
              onClick={() => setActive(name)}
            >
              <span className="menu-icon">
                {icon}
              </span>

              <span>
                {name}
              </span>
            </div>
          ))}
        </nav>

        <div className="upgrade">

          <div className="upgrade-title">
            Upgrade your
            <br />
            account to Pro
          </div>

          <button>
            Upgrade
          </button>

        </div>

      </aside>

      {/* MAIN */}
      <main className="main">

        {/* TOP BAR */}
        <header className="topbar">

          <div className="search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search here..."
            />
          </div>

          <div className="top-actions">

            <div className="language">
              🇺🇸 English (US)⌄
            </div>

            <div className="notification">
              ▤
            </div>

            <div className="notification">
              ♧
            </div>

            <div className="profile">

              <div>
                <b>Nello Vita</b>
                <small>Admin</small>
              </div>

              <div className="avatar"></div>

            </div>

          </div>

        </header>

        {/* CONTENT */}
        <div className="content">

          <h1>
            Banking
          </h1>

          <div className="grid">

            {/* LEFT */}
            <section className="left">

              {/* BALANCE */}
              <div className="balance-card">

                <div className="balance-info">

                  <h3>
                    Your Balance
                  </h3>

                  <small>
                    June 1, 2020, 08:22 AM
                  </small>

                  <p>
                    This Month
                  </p>

                  <h2>
                    $23,741.00
                  </h2>

                  <div className="growth">
                    ↗ 15%
                  </div>

                </div>

                {/* CHART */}
                <div className="chart">

                  <div className="chart-tooltip">
                    $ 33,568.60
                  </div>

                  <div className="bars">

                    <div className="bar-group">
                      <i style={{ height: "65%" }}></i>
                      <span>Mon</span>
                    </div>

                    <div className="bar-group">
                      <i style={{ height: "42%" }}></i>
                      <span>Tue</span>
                    </div>

                    <div className="bar-group">
                      <i style={{ height: "30%" }}></i>
                      <span>Wed</span>
                    </div>

                    <div className="bar-group selected">
                      <i style={{ height: "76%" }}></i>
                      <span>Thu</span>
                    </div>

                    <div className="bar-group">
                      <i style={{ height: "35%" }}></i>
                      <span>Fri</span>
                    </div>

                    <div className="bar-group">
                      <i style={{ height: "78%" }}></i>
                      <span>Sat</span>
                    </div>

                    <div className="bar-group">
                      <i style={{ height: "84%" }}></i>
                      <span>Sun</span>
                    </div>

                  </div>

                </div>

              </div>

              {/* INCOME / OUTCOME */}
              <div className="money-row">

                <div className="money-box">

                  <div className="money-icon">
                    ▣
                  </div>

                  <div>
                    <small>
                      Income
                    </small>

                    <strong>
                      $23,741.00
                    </strong>
                  </div>

                </div>

                <div className="money-box">

                  <div className="money-icon">
                    ▣
                  </div>

                  <div>
                    <small>
                      Outcome
                    </small>

                    <strong>
                      $23,741.00
                    </strong>
                  </div>

                </div>

              </div>

              {/* TRANSACTIONS */}
              <div className="transactions">

                <div className="section-heading">

                  <h3>
                    Latest Transaction
                  </h3>

                  <div className="filter">
                    This Month⌄ &nbsp; ⋯
                  </div>

                </div>

                {transactions.map((item, index) => (

                  <div
                    className="transaction"
                    key={index}
                  >

                    <div className="company">

                      <div className="company-icon"></div>

                      <b>
                        {item[0]}
                      </b>

                    </div>

                    <strong>
                      {item[1]}
                    </strong>

                    <span>
                      {item[2]}
                    </span>

                    <div className="transaction-icon">
                      ▣
                    </div>

                    <div className="dots">
                      •••
                    </div>

                  </div>

                ))}

                {/* PAGINATION */}
                <div className="pagination">

                  <small>
                    Showing 1-5 from 100 data
                  </small>

                  <div className="pages">

                    <button>
                      ‹
                    </button>

                    <button>
                      1
                    </button>

                    <button className="selected-page">
                      2
                    </button>

                    <button>
                      3
                    </button>

                    <button>
                      ›
                    </button>

                  </div>

                </div>

              </div>

            </section>

            {/* RIGHT */}
            <aside className="right">

              {/* BANK CARD */}
              <div className="bank-card">

                <div className="card-chip">
                  ▣
                </div>

                <div className="card-number">
                  1234 5678 9012 3456
                </div>

                <div className="card-bottom">

                  <div>
                    <small>
                      Card Holder
                    </small>

                    <b>
                      Nello Vita
                    </b>
                  </div>

                  <div className="master">

                    <div className="circle red"></div>

                    <div className="circle yellow"></div>

                    <small>
                      Master Card
                    </small>

                  </div>

                </div>

              </div>

              {/* QUICK PAYMENT */}
              <div className="quick-payment">

                <h3>
                  Quick Payment
                </h3>

                <div className="payment">

                  <div className="payment-user">

                    <div className="user-icon"></div>

                    <div>
                      <b>
                        Nadia Adjo
                      </b>

                      <small>
                        09/09/2021
                      </small>
                    </div>

                  </div>

                  <strong>
                    $ 12,568.60
                  </strong>

                </div>

                <div className="payment">

                  <div className="payment-user">

                    <div className="user-icon"></div>

                    <div>
                      <b>
                        Nadia Adjo
                      </b>

                      <small>
                        09/09/2021
                      </small>
                    </div>

                  </div>

                  <strong>
                    $ 12,568.60
                  </strong>

                </div>

                <button className="transfer">
                  New Transfer
                </button>

              </div>

              {/* RECENT ACTIVITY */}
              <div className="recent">

                <h3>
                  Recent Activity
                </h3>

                <div className="activity">

                  <div className="activity-icon">
                    ◉
                  </div>

                  <div>
                    <b>
                      Payment
                    </b>

                    <small>
                      2 March 2021, 12:45 PM
                    </small>
                  </div>

                  <strong>
                    +$2000
                  </strong>

                </div>

                <div className="activity">

                  <div className="activity-icon">
                    ▣
                  </div>

                  <div>
                    <b>
                      Subscription
                    </b>

                    <small>
                      2 March 2021, 3:45 PM
                    </small>
                  </div>

                  <strong>
                    -$120
                  </strong>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </main>

    </div>
  );
}