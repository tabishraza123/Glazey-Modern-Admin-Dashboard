"use client";

import "./../../css/contacts.css";
import AdminLayout from "../../(auth)/components/AdminLayout";

const contacts = [
  {
    id: 1,
    name: "Jordana Nicolany",
    phone: "+1234567890",
    email: "jordan@gmail.com",
  },
  {
    id: 2,
    name: "Jacob Jack",
    phone: "+1234567890",
    email: "jacob@gmail.com",
  },
  {
    id: 3,
    name: "Jordan Nico",
    phone: "+1234567890",
    email: "victor@gmail.com",
  },
  {
    id: 4,
    name: "Gibs Gibsy",
    phone: "+1234567890",
    email: "gibs@gmail.com",
  },
  {
    id: 5,
    name: "Sam Sammy",
    phone: "+1234567890",
    email: "sam@gmail.com",
  },
  {
    id: 6,
    name: "Corey Core",
    phone: "+1234567890",
    email: "corey@gmail.com",
  },
  {
    id: 7,
    name: "Arca Sodara",
    phone: "+1234567890",
    email: "arca@gmail.com",
  },
  {
    id: 8,
    name: "Ken Smith",
    phone: "+1234567890",
    email: "ken@gmail.com",
  },
  {
    id: 9,
    name: "Johnny Ahmad",
    phone: "+1234567890",
    email: "johnny@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <AdminLayout>

      <div className="contact-header">

        <h1>Contact</h1>

        <div className="contact-actions">

          <button className="layout-btn">
            ☷
          </button>

          <button className="layout-btn active">
            ⊞
          </button>

          <button className="new-contact-btn">
            + New Contact
          </button>

        </div>

      </div>

      <div className="contact-grid">

        {contacts.map((item) => (

          <div
            className="contact-card"
            key={item.id}
          >

            <div className="contact-top">

              <div className="contact-avatar"></div>

              <button className="more-btn">
                •••
              </button>

            </div>

            <div className="online-dot"></div>

            <h3>{item.name}</h3>

            <span className="phone">
              {item.phone}
            </span>

            <p>{item.email}</p>

            <div className="contact-icons">

              <button>📞</button>
              <button>✉</button>
              <button>💬</button>
              <button>🎥</button>

            </div>

          </div>

        ))}

      </div>

      <div className="contact-footer">

        <span>
          Showing 1-9 from 100 data
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

    </AdminLayout>
  );
}