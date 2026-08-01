"use client";

import { useState } from "react";
import AdminLayout from "../../(auth)/components/AdminLayout";

const events = [
  {
    id: 1,
    title: "Team Meeting",
    date: "2024-08-12",
    time: "10:00 AM",
    type: "meeting",
  },
  {
    id: 2,
    title: "Project Review",
    date: "2024-08-15",
    time: "02:00 PM",
    type: "review",
  },
  {
    id: 3,
    title: "Design Presentation",
    date: "2024-08-18",
    time: "11:30 AM",
    type: "design",
  },
  {
    id: 4,
    title: "Client Meeting",
    date: "2024-08-22",
    time: "04:00 PM",
    type: "client",
  },
];

const days = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(7);
  const [currentYear, setCurrentYear] = useState(2024);

  const [showModal, setShowModal] = useState(false);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
  });

  const [calendarEvents, setCalendarEvents] =
    useState(events);

  const monthName = new Date(
    currentYear,
    currentMonth
  ).toLocaleString("default", {
    month: "long",
  });

  const firstDay = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  const totalDays = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date) {
      alert("Please enter event title and date");
      return;
    }

    setCalendarEvents([
      ...calendarEvents,
      {
        id: Date.now(),
        title: newEvent.title,
        date: newEvent.date,
        time: newEvent.time,
        type: "meeting",
      },
    ]);

    setNewEvent({
      title: "",
      date: "",
      time: "",
    });

    setShowModal(false);
  };

  const getEventsForDay = (day) => {
    const dateString =
      `${currentYear}-${String(
        currentMonth + 1
      ).padStart(2, "0")}-${String(day).padStart(
        2,
        "0"
      )}`;

    return calendarEvents.filter(
      (event) => event.date === dateString
    );
  };

  return (
    <AdminLayout>

      {/* HEADER */}

      <div className="calendar-page-header">

        <div>
          <h1>Calendar</h1>

          <p>
            Manage your meetings, events and schedules
          </p>
        </div>

        <button
          className="calendar-add-button"
          onClick={() => setShowModal(true)}
        >
          + Add Event
        </button>

      </div>


      {/* CALENDAR */}

      <div className="calendar-layout">

        {/* MAIN CALENDAR */}

        <div className="dashboard-card calendar-main">

          <div className="calendar-topbar">

            <button
              onClick={previousMonth}
            >
              ‹
            </button>

            <h2>
              {monthName} {currentYear}
            </h2>

            <button
              onClick={nextMonth}
            >
              ›
            </button>

          </div>


          {/* WEEK DAYS */}

          <div className="calendar-weekdays">

            {days.map((day) => (

              <div key={day}>
                {day}
              </div>

            ))}

          </div>


          {/* DAYS */}

          <div className="calendar-grid">

            {Array.from({
              length: firstDay,
            }).map((_, index) => (

              <div
                className="calendar-empty"
                key={`empty-${index}`}
              ></div>

            ))}


            {Array.from({
              length: totalDays,
            }).map((_, index) => {

              const day = index + 1;

              const dayEvents =
                getEventsForDay(day);

              return (

                <div
                  className="calendar-day"
                  key={day}
                >

                  <span className="calendar-day-number">
                    {day}
                  </span>


                  <div className="calendar-events">

                    {dayEvents.map((event) => (

                      <div
                        className={`calendar-event ${event.type}`}
                        key={event.id}
                      >
                        {event.title}
                      </div>

                    ))}

                  </div>

                </div>

              );

            })}

          </div>

        </div>


        {/* UPCOMING EVENTS */}

        <div className="dashboard-card upcoming-events">

          <div className="dashboard-card-header">

            <div>

              <h3>
                Upcoming Events
              </h3>

              <p>
                Your upcoming schedule
              </p>

            </div>

            <button>
              •••
            </button>

          </div>


          <div className="event-list">

            {calendarEvents
              .slice(0, 5)
              .map((event) => (

                <div
                  className="upcoming-event"
                  key={event.id}
                >

                  <div className="event-date-box">

                    <strong>
                      {new Date(
                        event.date
                      ).getDate()}
                    </strong>

                    <span>
                      {new Date(
                        event.date
                      ).toLocaleString(
                        "default",
                        {
                          month: "short",
                        }
                      )}
                    </span>

                  </div>


                  <div className="event-details">

                    <h4>
                      {event.title}
                    </h4>

                    <p>
                      {event.time}
                    </p>

                  </div>

                </div>

              ))}

          </div>

        </div>

      </div>


      {/* ADD EVENT MODAL */}

      {showModal && (

        <div className="calendar-modal-overlay">

          <div className="calendar-modal">

            <div className="calendar-modal-header">

              <h2>
                Add New Event
              </h2>

              <button
                onClick={() =>
                  setShowModal(false)
                }
              >
                ×
              </button>

            </div>


            <div className="calendar-form">

              <label>
                Event Title
              </label>

              <input
                type="text"
                placeholder="Enter event title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    title: e.target.value,
                  })
                }
              />


              <label>
                Date
              </label>

              <input
                type="date"
                value={newEvent.date}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    date: e.target.value,
                  })
                }
              />


              <label>
                Time
              </label>

              <input
                type="time"
                value={newEvent.time}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    time: e.target.value,
                  })
                }
              />


              <div className="calendar-modal-actions">

                <button
                  className="calendar-cancel"
                  onClick={() =>
                    setShowModal(false)
                  }
                >
                  Cancel
                </button>

                <button
                  className="calendar-save"
                  onClick={addEvent}
                >
                  Add Event
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </AdminLayout>
  );
}