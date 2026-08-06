import "./../../css/todo.css";

export default function TodoPage() {

  const tasks = [
    {
      title: "Web Design Webinar",
      company: "Sanctuary Studio",
      date: "March 26, 2021",
      time: "09:00 - 10:00 AM",
      color: "red"
    },
    {
      title: "Usability Testing",
      company: "Neftora Studio",
      date: "March 26, 2021",
      time: "09:00 - 10:00 AM",
      color: "green"
    },
    {
      title: "Workout Weekly",
      company: "Self",
      date: "March 26, 2021",
      time: "09:00 - 10:00 AM",
      color: "orange"
    },
    {
      title: "Weekly Meeting",
      company: "Portal Team",
      date: "March 26, 2021",
      time: "09:00 - 10:00 AM",
      color: "yellow"
    }
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

      <main className="main">

        <div className="topbar">

          <h2>To Do List</h2>

          <button className="new-btn">
            + New Task
          </button>

        </div>

        <div className="todo-grid">

          {/* Upcoming */}

          <div className="upcoming">

            <h3>Upcoming List</h3>

            <p>Thursday, 10th April, 2023</p>

            {

              tasks.map((item,index)=>(

                <div
                  key={index}
                  className={`task-card ${item.color}`}
                >

                  <div className="task-info">

                    <h4>{item.title}</h4>

                    <span>{item.company}</span>

                    <p>{item.date}</p>

                    <small>{item.time}</small>

                  </div>

                  <div className="task-box"></div>

                </div>

              ))

            }

          </div>

          {/* Right */}

          <div className="right-panel">

            <div className="calendar-card">

              <h3>JANUARY</h3>

              <div className="calendar-grid">

                {
                  Array.from({length:35}).map((_,i)=>(
                    <div key={i}>{i+1<=31?i+1:""}</div>
                  ))
                }

              </div>

            </div>

            <div className="status-card">

              <h3>Task</h3>

              <div className="status-item">

                <span className="red-dot"></span>

                <div>
                  <h4>To Do</h4>
                  <p>5 Task Now</p>
                </div>

              </div>

              <div className="status-item">

                <span className="orange-dot"></span>

                <div>
                  <h4>In Progress</h4>
                  <p>3 Task Now</p>
                </div>

              </div>

              <div className="status-item">

                <span className="green-dot"></span>

                <div>
                  <h4>Completed</h4>
                  <p>15 Task Completed</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>

  );

}