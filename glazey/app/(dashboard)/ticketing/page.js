import "./../../css/ticketing.css";

export default function TicketingPage() {
  const tickets = [
    {
      event: "Music Event",
      email: "nadia@gmail.com",
      status: "Completed",
      amount: "- $60.00",
    },
    {
      event: "Anime Music Event",
      email: "sam@gmail.com",
      status: "Completed",
      amount: "- $60.00",
    },
    {
      event: "Webinar Event",
      email: "will@gmail.com",
      status: "Pending",
      amount: "- $60.00",
    },
    {
      event: "UX Design Workshop",
      email: "samantha@gmail.com",
      status: "Completed",
      amount: "- $60.00",
    },
    {
      event: "Music Event",
      email: "soap@gmail.com",
      status: "Pending",
      amount: "- $60.00",
    },
    {
      event: "Design Event",
      email: "jack@gmail.com",
      status: "Completed",
      amount: "- $60.00",
    },
    {
      event: "Music Event",
      email: "jordan@gmail.com",
      status: "Unpaid",
      amount: "- $60.00",
    },
  ];

  return (
    <div className="ticket-page">
      {/* Header */}

      <div className="ticket-header">
        <h2>Ticketing</h2>

        <div className="ticket-search">
          <input type="text" placeholder="Search here..." />
          <button>Search</button>
        </div>
      </div>

      {/* Summary */}

      <div className="ticket-summary">
        <div className="summary-card">
          <p>Ticket Sold</p>
          <h3>11,720</h3>
        </div>

        <div className="summary-card">
          <p>Ticket Refund</p>
          <h3>2,345</h3>
        </div>

        <div className="summary-card">
          <p>Canceled</p>
          <h3>980</h3>
        </div>

        <div className="summary-card">
          <p>Rescheduled</p>
          <h3>720</h3>
        </div>
      </div>

      <div className="ticket-grid">
        {/* Transactions */}

        <div className="transaction-box">
          <h3>Latest Transaction</h3>

          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Email</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((item, index) => (
                <tr key={index}>
                  <td>{item.event}</td>

                  <td>{item.email}</td>

                  <td>
                    <span className={item.status.toLowerCase()}>
                      {item.status}
                    </span>
                  </td>

                  <td className="amount">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Agenda */}

        <div className="agenda-box">
          <h3>Event Agenda</h3>

          <div className="agenda-item">
            <div className="date">1 Dec</div>

            <div>
              <h4>Design Webinar</h4>
              <p>1 December 2021</p>
            </div>
          </div>

          <div className="agenda-item">
            <div className="date">1 Nov</div>

            <div>
              <h4>Anime Music Event</h4>
              <p>1 December 2021</p>
            </div>
          </div>

          <div className="agenda-item">
            <div className="date">23 Dec</div>

            <div>
              <h4>Top Management</h4>
              <p>1 December 2021</p>
            </div>
          </div>

          <button className="view-btn">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}