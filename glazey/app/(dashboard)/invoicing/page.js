import "./../../css/invoicing.css";

const invoices = [
  { client: "Nella Vita", email: "vita@mail.com", date: "June 1, 2020, 08:22 AM", status: "Completed", checked: false },
  { client: "Johnny Ahmad", email: "ahmad@mail.com", date: "June 1, 2020, 08:22 AM", status: "Pending", checked: false },
  { client: "Samantha W.", email: "mantha@mail.com", date: "June 1, 2020, 08:22 AM", status: "Unpaid", checked: true },
  { client: "Tony Soap", email: "soap@mail.com", date: "June 1, 2020, 08:22 AM", status: "Completed", checked: false },
  { client: "Karen Hope", email: "hope@mail.com", date: "June 1, 2020, 08:22 AM", status: "Completed", checked: true },
  { client: "Jordan Nico", email: "jordan@mail.com", date: "June 1, 2020, 08:22 AM", status: "Completed", checked: true },
  { client: "Nadila Adja", email: "adja@mail.com", date: "June 1, 2020, 08:22 AM", status: "Unpaid", checked: false },
];

const menu = [
  "Dashboard",
  "Email",
  "Contacts",
  "Crypto",
  "Kanban",
  "Invoicing",
  "Banking",
  "Ticketing",
  "File Manager",
  "User",
  "Calendar",
  "Todo List",
];

export default function InvoicePage() {
  return (
    <div className="invoice-dashboard">

      {/* ================= SIDEBAR ================= */}
      <aside className="invoice-sidebar">

        <div className="invoice-logo">
          Glazey<span>.</span>
        </div>

        <nav className="invoice-menu">
          {menu.map((item, index) => (
            <div
              key={item}
              className={`invoice-menu-item ${
                index === 0 ? "invoice-active" : ""
              }`}
            >
              <span className="menu-icon">
                {["⌂", "✉", "♙", "◉", "▤", "▥", "▣", "▧", "▱", "♙", "□", "☑"][index]}
              </span>
              <span>{item}</span>
            </div>
          ))}
        </nav>

        <div className="invoice-upgrade">
          <strong>Upgrade your</strong>
          <strong>Account to Pro</strong>

          <button>Upgrade</button>

          <span className="upgrade-grid">▦</span>
        </div>

      </aside>

      {/* ================= MAIN ================= */}
      <main className="invoice-main">

        {/* TOP NAVBAR */}
        <header className="invoice-navbar">

          <div className="invoice-search-top">
            <span>⌕</span>
            <input placeholder="Search here..." />
          </div>

          <div className="invoice-nav-right">

            <button>🇺🇸 English (US)⌄</button>

            <span className="nav-icon">▤</span>
            <span className="nav-icon">♧</span>
            <span className="nav-icon">⚙</span>

            <div className="admin-user">
              <strong>Nella Vita</strong>
              <small>Admin</small>
            </div>

            <div className="admin-avatar"></div>

          </div>

        </header>

        {/* PAGE HEADER */}
        <section className="invoice-title-row">

          <h1>Invoice</h1>

          <div className="invoice-actions">

            <div className="invoice-search">
              <span>⌕</span>
              <input placeholder="Search here..." />
            </div>

            <button className="new-invoice">
              New Invoice ⊕
            </button>

          </div>

        </section>

        {/* SUMMARY CARDS */}
        <section className="invoice-summary">

          <SummaryCard
            icon="✓"
            title="Invoice"
            subtitle="Completed"
            number="3.932"
          />

          <SummaryCard
            icon="○"
            title="Invoice"
            subtitle="Sent"
            number="1.234"
          />

          <SummaryCard
            icon="○"
            title="Invoice"
            subtitle="Unpaid"
            number="345"
          />

          <SummaryCard
            icon="○"
            title="Invoice"
            subtitle="Sent"
            number="932"
          />

        </section>

        {/* TABLE */}
        <section className="invoice-table-box">

          <table className="invoice-table">

            <thead>
              <tr>
                <th className="check-column">
                  <input type="checkbox" />
                </th>
                <th>ID Invoice</th>
                <th>Due Date</th>
                <th>Client</th>
                <th>Contact</th>
                <th>Amount</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>

              {invoices.map((invoice, index) => (

                <tr key={index}>

                  <td className="check-column">
                    <input
                      type="checkbox"
                      defaultChecked={invoice.checked}
                    />
                  </td>

                  <td>
                    <strong>#INV-0001234</strong>
                  </td>

                  <td className="date-text">
                    {invoice.date}
                  </td>

                  <td>
                    <strong>{invoice.client}</strong>
                    <small>Creative Agency</small>
                  </td>

                  <td>
                    <div className="contact-cell">
                      <span className="mail-icon">✉</span>
                      {invoice.email}
                    </div>
                  </td>

                  <td className="amount">
                    $ 650,036.34
                  </td>

                  <td>
                    <span
                      className={`invoice-status ${invoice.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {invoice.status === "Completed" && "✓ "}
                      {invoice.status === "Pending" && "⊙ "}
                      {invoice.status === "Unpaid" && "⊘ "}
                      {invoice.status}
                    </span>
                  </td>

                  <td className="more">
                    •••
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {/* TABLE FOOTER */}

          <div className="invoice-footer">

            <span>
              Showing 1-5 from 100 data
            </span>

            <div className="pagination">

              <button>‹</button>
              <button>1</button>
              <button className="page-active">2</button>
              <button>3</button>
              <button>›</button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}


/* ================= SUMMARY CARD ================= */

function SummaryCard({ icon, title, subtitle, number }) {
  return (
    <div className="summary-card">

      <div className="summary-icon">
        {icon}
      </div>

      <div className="summary-label">
        <span>{title}</span>
        <strong>{subtitle}</strong>
      </div>

      <h3>{number}</h3>

    </div>
  );
}