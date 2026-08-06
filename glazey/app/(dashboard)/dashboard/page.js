"use client";

import "./../../css/dashboard.css";
import AdminLayout from "../../(auth)/components/AdminLayout";

const stats = [
  {
    icon: "▣",
    number: "932",
    title: "Projects",
    color: "orange",
  },
  {
    icon: "▤",
    number: "1,032",
    title: "Invoices",
    color: "blue",
  },
  {
    icon: "♧",
    number: "102k",
    title: "Transactions",
    color: "purple",
  },
  {
    icon: "♙",
    number: "32k",
    title: "Assets",
    color: "pink",
  },
];

const contacts = [
  {
    name: "Samantha William",
    role: "Marketing Manager",
    initials: "SW",
  },
  {
    name: "Tony Soap",
    role: "UI/UX Designer",
    initials: "TS",
  },
  {
    name: "Karen Hope",
    role: "Senior Manager",
    initials: "KH",
  },
  {
    name: "Jordan Nico",
    role: "Backend Developer",
    initials: "JN",
  },
  {
    name: "Nadila Adja",
    role: "Project Manager",
    initials: "NA",
  },
];

export default function DashboardPage() {
  return (
    <AdminLayout>

      {/* PAGE HEADER */}
      <div className="dashboard-page-header">

        <div>
          <h1>Dashboard</h1>
        </div>

        <button className="change-period">
          <span>▣</span>

          <div>
            <strong>Change Period</strong>
            <small>12 Aug - 18 Aug 2024</small>
          </div>

          <span>⌄</span>
        </button>

      </div>


      {/* STAT CARDS */}
      <div className="dashboard-stats">

        {stats.map((item) => (

          <div className="dashboard-stat-card" key={item.title}>

            <div
              className={`dashboard-stat-icon ${item.color}`}
            >
              {item.icon}
            </div>

            <div>
              <strong>{item.number}</strong>
              <span>{item.title}</span>
            </div>

          </div>

        ))}

      </div>


      {/* MAIN DASHBOARD GRID */}
      <div className="dashboard-main-grid">

        {/* LEFT / CENTER */}
        <div className="dashboard-center">


          {/* PROJECT + EMAIL */}
          <div className="dashboard-two-column">


            {/* PROJECT STATISTICS */}
            <div className="dashboard-card project-stat-card">

              <div className="dashboard-card-header">

                <div>
                  <h3>Project Statistics</h3>
                  <p>Project statistics overview</p>
                </div>

                <select>
                  <option>This Week</option>
                  <option>This Month</option>
                </select>

              </div>


              <div className="project-chart">

                <div className="chart-y-axis">
                  <span>120</span>
                  <span>100</span>
                  <span>80</span>
                  <span>60</span>
                  <span>40</span>
                  <span>20</span>
                  <span>0</span>
                </div>


                <div className="project-chart-area">

                  <div className="chart-grid">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>


                  <svg
                    className="project-svg"
                    viewBox="0 0 600 240"
                    preserveAspectRatio="none"
                  >

                    <polyline
                      points="
                        0,170
                        80,125
                        160,145
                        240,70
                        320,105
                        400,125
                        500,175
                        600,70
                      "
                      fill="none"
                      stroke="#ff7655"
                      strokeWidth="3"
                    />

                    <polyline
                      points="
                        0,145
                        80,115
                        160,165
                        240,120
                        320,145
                        400,185
                        500,205
                        600,70
                      "
                      fill="none"
                      stroke="#f3b83f"
                      strokeWidth="3"
                    />

                  </svg>


                  <div className="chart-days">

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

            </div>


            {/* EMAIL */}
            <div className="dashboard-card email-stat-card">

              <div className="dashboard-card-header">

                <div>
                  <h3>Email</h3>
                  <p>Email statistics</p>
                </div>

                <button className="dots">
                  •••
                </button>

              </div>


              <div className="email-donut">

                <div className="email-donut-inner">
                  <strong>77%</strong>
                  <span>Emails</span>
                </div>

              </div>


              <div className="email-stat-list">

                <div>
                  <span>
                    <i className="dot purple-dot"></i>
                    Primary
                  </span>

                  <strong>762</strong>
                </div>

                <div>
                  <span>
                    <i className="dot orange-dot"></i>
                    Promotion
                  </span>

                  <strong>321</strong>
                </div>

                <div>
                  <span>
                    <i className="dot blue-dot"></i>
                    Forum
                  </span>

                  <strong>69</strong>
                </div>

                <div>
                  <span>
                    <i className="dot pink-dot"></i>
                    Other
                  </span>

                  <strong>184</strong>
                </div>

              </div>

            </div>

          </div>


          {/* STATISTIC */}
          <div className="dashboard-card statistic-section">

            <div className="dashboard-card-header">

              <div>
                <h3>Statistic</h3>
                <p>Monthly statistics</p>
              </div>

              <select>
                <option>This Week</option>
              </select>

            </div>


            <div className="statistic-content">

              <div className="vertical-bar-chart">

                {[
                  50,
                  80,
                  35,
                  60,
                  45,
                  75,
                  40,
                  90,
                  65,
                  45,
                  80,
                  55,
                  70,
                  90,
                  50,
                ].map((height, index) => (

                  <div
                    className="bar-wrapper"
                    key={index}
                  >

                    <span
                      className="bar-orange"
                      style={{
                        height: `${height}%`,
                      }}
                    ></span>

                    <span
                      className="bar-yellow"
                      style={{
                        height: `${Math.max(
                          height - 20,
                          15
                        )}%`,
                      }}
                    ></span>

                  </div>

                ))}

              </div>


              <div className="statistic-values">

                <div className="stat-value-item">

                  <span>
                    ● Income
                  </span>

                  <strong>
                    $12,890.00
                  </strong>

                  <em>
                    +15%
                  </em>

                </div>


                <div className="stat-value-item">

                  <span>
                    ● Expenses
                  </span>

                  <strong>
                    $12,890.00
                  </strong>

                  <em className="expense">
                    -15%
                  </em>

                </div>

              </div>

            </div>

          </div>


          {/* STORAGE + SUMMARY */}
          <div className="dashboard-bottom-grid">


            {/* STORAGE */}
            <div className="dashboard-card storage-card">

              <div className="storage-progress">

                <div className="storage-progress-inner">
                  80%
                </div>

              </div>


              <div className="storage-content">

                <h3>
                  Upgrade Your Storage
                </h3>

                <p>
                  Increase your storage capacity
                  and keep your files safe.
                </p>

                <button>
                  Upgrade
                </button>

              </div>

            </div>


            {/* SUMMARY */}
            <div className="dashboard-card summary-card">

              <div>

                <strong>
                  7,642
                </strong>

                <span>
                  Total Items Submitted
                </span>

              </div>

              <button>
                + Complete task
              </button>

              <div className="summary-progress">

                <span></span>

              </div>

              <small>
                You have successfully completed
                your monthly task.
              </small>

            </div>

          </div>


          {/* USER REVIEWS */}
          <div className="reviews-section">

            <h3>
              User Reviews
            </h3>


            <div className="reviews-grid">

              {[1, 2, 3].map((item) => (

                <div
                  className="dashboard-card review-card"
                  key={item}
                >

                  <div className="review-header">

                    <div className="review-avatar">
                      EX
                    </div>

                    <div>

                      <strong>
                        Exco Libur
                      </strong>

                      <span>
                        ★★★★★
                      </span>

                    </div>

                  </div>


                  <p>
                    Sed ut perspiciatis unde omnis
                    iste natus error sit voluptatem
                    accusantium doloremque laudantium.
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* RIGHT SIDEBAR */}
        <aside className="dashboard-right">


          {/* SERVER STATUS */}
          <div className="dashboard-card server-card">

            <div className="dashboard-card-header">

              <h3>
                Server Status
              </h3>

              <button className="dots">
                •••
              </button>

            </div>


            <div className="server-bars">

              <div>
                <span>CPU</span>
                <i>
                  <b style={{ width: "65%" }}></b>
                </i>
              </div>

              <div>
                <span>RAM</span>
                <i>
                  <b style={{ width: "80%" }}></b>
                </i>
              </div>

              <div>
                <span>Disk</span>
                <i>
                  <b style={{ width: "45%" }}></b>
                </i>
              </div>

              <div>
                <span>Network</span>
                <i>
                  <b style={{ width: "70%" }}></b>
                </i>
              </div>

            </div>


            <div className="server-info">

              <div>
                <span>CPU</span>
                <strong>18%</strong>
              </div>

              <div>
                <span>Memory</span>
                <strong>42%</strong>
              </div>

              <div>
                <span>Disk</span>
                <strong>62%</strong>
              </div>

            </div>

          </div>


          {/* CONTACTS */}
          <div className="dashboard-card dashboard-contacts">

            <div className="dashboard-card-header">

              <div>

                <h3>
                  Contacts
                </h3>

                <p>
                  You have 542 contacts
                </p>

              </div>

              <button className="add-contact">
                +
              </button>

            </div>


            <div className="contacts-list">

              {contacts.map((contact) => (

                <div
                  className="dashboard-contact"
                  key={contact.name}
                >

                  <div className="contact-avatar">
                    {contact.initials}
                  </div>

                  <div className="contact-details">

                    <strong>
                      {contact.name}
                    </strong>

                    <span>
                      {contact.role}
                    </span>

                  </div>

                  <button>
                    ✉
                  </button>

                </div>

              ))}

            </div>


            <button className="view-more">
              View More
            </button>

          </div>


          {/* PROJECT */}
          <div className="dashboard-card right-project-card">

            <div className="dashboard-card-header">

              <h3>
                Project
              </h3>

              <button className="dots">
                •••
              </button>

            </div>


            <div className="project-progress-item">

              <div>
                <span>
                  Web Design
                </span>

                <strong>
                  45%
                </strong>
              </div>

              <i>
                <b style={{ width: "45%" }}></b>
              </i>

            </div>


            <div className="project-progress-item">

              <div>
                <span>
                  Development
                </span>

                <strong>
                  75%
                </strong>
              </div>

              <i>
                <b style={{ width: "75%" }}></b>
              </i>

            </div>


            <div className="project-progress-item">

              <div>
                <span>
                  SEO
                </span>

                <strong>
                  60%
                </strong>
              </div>

              <i>
                <b style={{ width: "60%" }}></b>
              </i>

            </div>


            <div className="project-tags">

              <span>
                Web Design
              </span>

              <span>
                UI/UX
              </span>

              <span>
                Development
              </span>

            </div>

          </div>

        </aside>

      </div>

    </AdminLayout>
  );
}

