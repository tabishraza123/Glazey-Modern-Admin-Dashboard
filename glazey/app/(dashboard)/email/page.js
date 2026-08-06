"use client";

import "./../../css/email.css";
import AdminLayout from "../../(auth)/components/AdminLayout";

const folders = [
  "Inbox",
  "Sent",
  "Favorite",
  "Draft",
  "Important",
  "Scheduled",
  "More",
];

const categories = [
  "Work",
  "Side Project",
];

const tags = [
  "#projectmanagement",
  "#teamwork",
  "#design",
  "#weeklymeetings",
];

const emails = [
  {
    id: 1,
    star: true,
    checked: false,
    subject: "How to manage your working time in this pandemic",
    from: "kevinharris@gmail.com",
    time: "24 min ago",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    labels: ["Master Plan", "Cover Preview.jpg", "4 files more"],
  },
  {
    id: 2,
    star: false,
    checked: true,
    subject: "How to manage your working time in this pandemic",
    from: "kevinharris@gmail.com",
    time: "24 min ago",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    labels: ["Master Plan", "Cover Preview.jpg"],
  },
  {
    id: 3,
    star: true,
    checked: false,
    subject: "How to manage your working time in this pandemic",
    from: "kevinharris@gmail.com",
    time: "24 min ago",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    labels: ["Master Plan"],
  },
  {
    id: 4,
    star: false,
    checked: true,
    subject: "How to manage your working time in this pandemic",
    from: "kevinharris@gmail.com",
    time: "24 min ago",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    labels: ["Master Plan", "Cover Preview.jpg"],
  },
  {
    id: 5,
    star: true,
    checked: false,
    subject: "How to manage your working time in this pandemic",
    from: "kevinharris@gmail.com",
    time: "24 min ago",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    labels: ["Master Plan", "Cover Preview.jpg", "4 files more"],
  },
];

export default function EmailPage() {
  return (
    <AdminLayout>

      <h1 className="email-page-title">
        Email
      </h1>

      <div className="email-layout">

        {/* LEFT */}

        <aside className="email-sidebar">

          <button className="compose-btn">
            Compose Email
          </button>

          <div className="folder-list">

            {folders.map((item, index) => (

              <div
                key={item}
                className={`folder-item ${
                  index === 0 ? "active" : ""
                }`}
              >
                <span>{item}</span>

                {index === 0 && <b>2</b>}
              </div>

            ))}

          </div>

          <div className="sidebar-block">

            <h4>Categories</h4>

            {categories.map((cat) => (
              <div className="category-item" key={cat}>
                {cat}
              </div>
            ))}

          </div>

          <div className="sidebar-block">

            <h4>Tags</h4>

            <div className="tag-list">

              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}

            </div>

          </div>

        </aside>

        {/* RIGHT */}

        <section className="email-content">

          <div className="email-toolbar">

            <div className="toolbar-left">

              <input type="checkbox" />

              <button>Important</button>
              <button>Socials</button>
              <button>Promotion</button>

            </div>

            <div className="toolbar-right">

              <button>🗑</button>
              <button>✉</button>
              <button>⚙</button>
              <button>⋯</button>

            </div>

          </div>

          <div className="email-list">

            {emails.map((mail) => (

              <div
                className="email-item"
                key={mail.id}
              >

                <div className="email-left">

                  <input
                    type="checkbox"
                    defaultChecked={mail.checked}
                  />

                  <span className="star">
                    {mail.star ? "★" : "☆"}
                  </span>

                  <div className="avatar"></div>

                </div>

                <div className="email-body">

                  <div className="email-head">

                    <span className="from">
                      {mail.from}
                    </span>

                    <span className="time">
                      {mail.time}
                    </span>

                  </div>

                  <h3>
                    {mail.subject}
                  </h3>

                  <p>
                    {mail.text}
                  </p>

                  <div className="mail-labels">

                    {mail.labels.map((label) => (
                      <span key={label}>
                        {label}
                      </span>
                    ))}

                  </div>

                </div>

                <div className="email-actions">

                  <button>🗑</button>
                  <button>⟳</button>
                  <button>✎</button>

                </div>

              </div>

            ))}

          </div>

          <div className="email-footer">

            <span>
              Showing 1-5 from 100 data
            </span>

            <div className="pagination">

              <button>{"<"}</button>

              <button className="active">
                2
              </button>

              <button>3</button>

              <button>{">"}</button>

            </div>

          </div>

        </section>

      </div>

    </AdminLayout>
  );
}