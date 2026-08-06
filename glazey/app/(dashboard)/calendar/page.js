import "./../../css/calendar.css";

export default function Calendar() {

  const days = [
    { day: "Monday", date: "14" },
    { day: "Tuesday", date: "15" },
    { day: "Wednesday", date: "16" },
    { day: "Thursday", date: "17" },
    { day: "Friday", date: "18" },
    { day: "Saturday", date: "19" },
    { day: "Sunday", date: "20" },
  ];

  const time = [
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 AM",
    "1 PM",
  ];

  return (
    <div className="dashboard">

      {/* Sidebar */}

      <aside className="sidebar">

        <div className="logo">
          <h2>Glazey<span>.</span></h2>
        </div>

        <ul>

          <li className="active">Dashboard</li>
          <li>Email</li>
          <li>Contacts</li>
          <li>Crypto</li>
          <li>Kanban</li>
          <li>Invoicing</li>
          <li>Banking</li>
          <li>Ticketing</li>
          <li>File Manager</li>
          <li>User</li>
          <li>Calendar</li>
          <li>Todo List</li>

        </ul>

        <div className="upgrade">

          <h4>Upgrade your Account to Pro</h4>

          <button>Upgrade</button>

        </div>

      </aside>

      {/* Main */}

      <div className="main">

        {/* Header */}

        <div className="topbar">

          <h2>Calendar</h2>

          <div className="actions">

            <button className="today-btn">
              Today (14)
            </button>

            <button className="new-btn">
              + New Schedule
            </button>

          </div>

        </div>

        {/* Month */}

        <div className="calendar-head">

          <div className="month">

            <button>{"<"}</button>

            <h3>October, 2020</h3>

            <button>{">"}</button>

          </div>

          <div className="tabs">

            <button>Date</button>

            <button className="active">
              Week
            </button>

            <button>Month</button>

            <button>Year</button>

          </div>

        </div>

        {/* Calendar */}

        <div className="calendar">

          <div className="time-column">

            <div className="blank"></div>

            {time.map((item,index)=>(

              <div className="time" key={index}>
                {item}
              </div>

            ))}

          </div>

          {days.map((item,index)=>(

            <div className="day-column" key={index}>

              <div className="day-head">

                <span>{item.day}</span>

                <h3>{item.date}</h3>

              </div>

              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}