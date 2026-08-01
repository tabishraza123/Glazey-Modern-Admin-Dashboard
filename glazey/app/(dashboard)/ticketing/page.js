"use client";

import { useState } from "react";
import AdminLayout from "../../(auth)/components/AdminLayout";

const initialTasks = [
  {
    id: 1,
    title: "Create Dashboard UI",
    description: "Build the main admin dashboard interface.",
    status: "todo",
    priority: "High",
    assignee: "TM",
  },
  {
    id: 2,
    title: "Setup API Integration",
    description: "Connect frontend with backend APIs.",
    status: "progress",
    priority: "Medium",
    assignee: "AK",
  },
  {
    id: 3,
    title: "Test Login Module",
    description: "Check authentication and login flow.",
    status: "review",
    priority: "High",
    assignee: "RS",
  },
  {
    id: 4,
    title: "Responsive Design",
    description: "Make dashboard responsive for all devices.",
    status: "completed",
    priority: "Low",
    assignee: "TM",
  },
];

const columns = [
  {
    id: "todo",
    title: "To Do",
  },
  {
    id: "progress",
    title: "In Progress",
  },
  {
    id: "review",
    title: "Review",
  },
  {
    id: "completed",
    title: "Completed",
  },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    assignee: "TM",
  });

  const filteredTasks = tasks.filter(
    (task) =>
      task.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const addTask = () => {
    if (!newTask.title) {
      alert("Please enter task title");
      return;
    }

    const task = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      status: "todo",
      priority: newTask.priority,
      assignee: newTask.assignee,
    };

    setTasks([...tasks, task]);

    setNewTask({
      title: "",
      description: "",
      priority: "Medium",
      assignee: "TM",
    });

    setShowModal(false);
  };

  const deleteTask = (id) => {
    if (
      confirm(
        "Are you sure you want to delete this task?"
      )
    ) {
      setTasks(
        tasks.filter(
          (task) => task.id !== id
        )
      );
    }
  };

  const moveTask = (id, status) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status,
            }
          : task
      )
    );
  };

  return (
    <AdminLayout>

      {/* HEADER */}

      <div className="tasks-page-header">

        <div>

          <h1>
            Tasks
          </h1>

          <p>
            Manage your team's tasks and workflow
          </p>

        </div>

        <button
          className="add-task-button"
          onClick={() =>
            setShowModal(true)
          }
        >
          + Add Task
        </button>

      </div>


      {/* TOOLBAR */}

      <div className="tasks-toolbar">

        <div className="task-search">

          <span>
            ⌕
          </span>

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="task-count">

          Total Tasks:
          <strong>
            {tasks.length}
          </strong>

        </div>

      </div>


      {/* KANBAN */}

      <div className="kanban-board">

        {columns.map((column) => (

          <div
            className="kanban-column"
            key={column.id}
          >

            <div className="kanban-column-header">

              <h2>
                {column.title}
              </h2>

              <span>
                {
                  filteredTasks.filter(
                    (task) =>
                      task.status ===
                      column.id
                  ).length
                }
              </span>

            </div>


            <div className="kanban-tasks">

              {filteredTasks
                .filter(
                  (task) =>
                    task.status ===
                    column.id
                )
                .map((task) => (

                  <div
                    className="task-card"
                    key={task.id}
                  >

                    <div className="task-card-top">

                      <span
                        className={`task-priority ${task.priority.toLowerCase()}`}
                      >
                        {task.priority}
                      </span>

                      <button
                        onClick={() =>
                          deleteTask(
                            task.id
                          )
                        }
                      >
                        🗑
                      </button>

                    </div>


                    <h3>
                      {task.title}
                    </h3>

                    <p>
                      {task.description}
                    </p>


                    <div className="task-card-footer">

                      <div className="task-assignee">
                        {task.assignee}
                      </div>

                      <select
                        value={task.status}
                        onChange={(e) =>
                          moveTask(
                            task.id,
                            e.target.value
                          )
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

                        <option value="completed">
                          Completed
                        </option>

                      </select>

                    </div>

                  </div>

                ))}


              {filteredTasks.filter(
                (task) =>
                  task.status ===
                  column.id
              ).length === 0 && (

                <div className="empty-task">
                  No tasks
                </div>

              )}

            </div>

          </div>

        ))}

      </div>


      {/* ADD TASK MODAL */}

      {showModal && (

        <div className="task-modal-overlay">

          <div className="task-modal">

            <div className="task-modal-header">

              <h2>
                Add New Task
              </h2>

              <button
                onClick={() =>
                  setShowModal(false)
                }
              >
                ×
              </button>

            </div>


            <div className="task-form">

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
                    title:
                      e.target.value,
                  })
                }
              />


              <label>
                Description
              </label>

              <textarea
                placeholder="Enter task description"
                value={
                  newTask.description
                }
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    description:
                      e.target.value,
                  })
                }
              />


              <label>
                Priority
              </label>

              <select
                value={
                  newTask.priority
                }
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    priority:
                      e.target.value,
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
                Assignee
              </label>

              <select
                value={
                  newTask.assignee
                }
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    assignee:
                      e.target.value,
                  })
                }
              >

                <option>
                  TM
                </option>

                <option>
                  AK
                </option>

                <option>
                  RS
                </option>

                <option>
                  SK
                </option>

              </select>


              <div className="task-modal-actions">

                <button
                  className="task-cancel"
                  onClick={() =>
                    setShowModal(false)
                  }
                >
                  Cancel
                </button>

                <button
                  className="task-save"
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