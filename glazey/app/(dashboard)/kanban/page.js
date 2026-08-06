"use client";

import "./../../css/kanban.css";
import { useState } from "react";
import AdminLayout from "../../(auth)/components/AdminLayout";

const initialColumns = [
  {
    id: "todo",
    title: "To Do",
    color: "blue",
    tasks: [
      {
        id: 1,
        title: "Create dashboard design",
        description: "Prepare the admin dashboard UI design.",
        priority: "High",
        date: "Aug 24, 2024",
        members: ["A", "K"],
      },
      {
        id: 2,
        title: "Research competitors",
        description: "Analyze competitor products and features.",
        priority: "Medium",
        date: "Aug 26, 2024",
        members: ["T"],
      },
      {
        id: 3,
        title: "Prepare project documentation",
        description: "Create complete project documentation.",
        priority: "Low",
        date: "Aug 28, 2024",
        members: ["S", "J"],
      },
    ],
  },
  {
    id: "progress",
    title: "In Progress",
    color: "orange",
    tasks: [
      {
        id: 4,
        title: "Develop authentication",
        description: "Implement login and registration system.",
        priority: "High",
        date: "Aug 22, 2024",
        members: ["K", "M"],
      },
      {
        id: 5,
        title: "Build responsive layout",
        description: "Make dashboard responsive for all devices.",
        priority: "Medium",
        date: "Aug 25, 2024",
        members: ["A"],
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    color: "purple",
    tasks: [
      {
        id: 6,
        title: "Review API integration",
        description: "Check all API requests and responses.",
        priority: "High",
        date: "Aug 20, 2024",
        members: ["M", "R"],
      },
      {
        id: 7,
        title: "Test user profile",
        description: "Test profile editing and user settings.",
        priority: "Low",
        date: "Aug 21, 2024",
        members: ["S"],
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "green",
    tasks: [
      {
        id: 8,
        title: "Setup Next.js project",
        description: "Initialize Next.js project structure.",
        priority: "High",
        date: "Aug 15, 2024",
        members: ["A", "K"],
      },
      {
        id: 9,
        title: "Create database",
        description: "Setup database and required collections.",
        priority: "Medium",
        date: "Aug 17, 2024",
        members: ["T"],
      },
    ],
  },
];

export default function KanbanPage() {
  const [columns, setColumns] = useState(initialColumns);

  const [showModal, setShowModal] = useState(false);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    column: "todo",
  });

  const addTask = () => {
    if (!newTask.title.trim()) {
      alert("Please enter task title");
      return;
    }

    const task = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      priority: newTask.priority,
      date: "Today",
      members: ["N"],
    };

    setColumns((oldColumns) =>
      oldColumns.map((column) => {
        if (column.id === newTask.column) {
          return {
            ...column,
            tasks: [...column.tasks, task],
          };
        }

        return column;
      })
    );

    setNewTask({
      title: "",
      description: "",
      priority: "Medium",
      column: "todo",
    });

    setShowModal(false);
  };

  return (
    <AdminLayout>

      {/* PAGE HEADER */}

      <div className="kanban-page-header">

        <div>

          <h1>
            Project Management
          </h1>

          <p>
            Manage your project tasks and team workflow
          </p>

        </div>

        <div className="kanban-header-actions">

          <button className="kanban-filter-button">
            Filter ⌄
          </button>

          <button
            className="kanban-add-button"
            onClick={() => setShowModal(true)}
          >
            + Add Task
          </button>

        </div>

      </div>


      {/* PROJECT INFO */}

      <div className="kanban-project-bar">

        <div className="kanban-project-info">

          <div className="kanban-project-icon">
            P
          </div>

          <div>

            <h2>
              Website Development
            </h2>

            <p>
              Development Task
            </p>

          </div>

        </div>


        <div className="kanban-project-stats">

          <div>

            <strong>
              9
            </strong>

            <span>
              Total Tasks
            </span>

          </div>

          <div>

            <strong>
              2
            </strong>

            <span>
              In Progress
            </span>

          </div>

          <div>

            <strong>
              2
            </strong>

            <span>
              Completed
            </span>

          </div>

          <div className="kanban-progress">

            <div className="kanban-progress-bar">

              <span></span>

            </div>

            <small>
              22% Complete
            </small>

          </div>

        </div>

      </div>


      {/* KANBAN BOARD */}

      <div className="kanban-board">

        {columns.map((column) => (

          <div
            className="kanban-column"
            key={column.id}
          >

            {/* COLUMN HEADER */}

            <div className="kanban-column-header">

              <div>

                <span
                  className={`kanban-status-dot ${column.color}`}
                ></span>

                <h3>
                  {column.title}
                </h3>

                <b>
                  {column.tasks.length}
                </b>

              </div>

              <button>
                •••
              </button>

            </div>


            {/* TASKS */}

            <div className="kanban-task-list">

              {column.tasks.map((task) => (

                <div
                  className="kanban-task-card"
                  key={task.id}
                >

                  <div className="kanban-task-top">

                    <span
                      className={`task-priority ${task.priority.toLowerCase()}`}
                    >
                      {task.priority}
                    </span>

                    <button>
                      •••
                    </button>

                  </div>


                  <h4>
                    {task.title}
                  </h4>


                  <p>
                    {task.description}
                  </p>


                  <div className="kanban-task-footer">

                    <div className="kanban-task-date">
                      📅 {task.date}
                    </div>

                    <div className="kanban-members">

                      {task.members.map(
                        (member, index) => (

                          <span
                            key={index}
                          >
                            {member}
                          </span>

                        )
                      )}

                    </div>

                  </div>

                </div>

              ))}


              {/* ADD TASK */}

              <button
                className="kanban-add-task"
                onClick={() => {
                  setNewTask({
                    ...newTask,
                    column: column.id,
                  });

                  setShowModal(true);
                }}
              >
                + Add Task
              </button>

            </div>

          </div>

        ))}

      </div>


      {/* ADD TASK MODAL */}

      {showModal && (

        <div className="kanban-modal-overlay">

          <div className="kanban-modal">

            <div className="kanban-modal-header">

              <h2>
                Add New Task
              </h2>

              <button
                onClick={() => setShowModal(false)}
              >
                ×
              </button>

            </div>


            <div className="kanban-form">

              <label>
                Task Title
              </label>

              <input
                type="text"
                placeholder="Enter task title"
                value={newTask.title}
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    title: e.target.value,
                  })
                }
              />


              <label>
                Description
              </label>

              <textarea
                placeholder="Enter task description"
                value={newTask.description}
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    description: e.target.value,
                  })
                }
              ></textarea>


              <label>
                Priority
              </label>

              <select
                value={newTask.priority}
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    priority: e.target.value,
                  })
                }
              >

                <option>
                  Low
                </option>

                <option>
                  Medium
                </option>

                <option>
                  High
                </option>

              </select>


              <label>
                Status
              </label>

              <select
                value={newTask.column}
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    column: e.target.value,
                  })
                }
              >

                <option value="todo">
                  To Do
                </option>

                <option value="progress">
                  In Progress
                </option>

                <option value="review">
                  Review
                </option>

                <option value="done">
                  Done
                </option>

              </select>


              <div className="kanban-modal-actions">

                <button
                  className="cancel-button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="save-task-button"
                  onClick={addTask}
                >
                  Add Task
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </AdminLayout>
  );
}