"use client";

import { useState } from "react";
import AdminLayout from "../../(auth)/components/AdminLayout";

const initialUsers = [
  {
    id: 1,
    name: "Samantha William",
    email: "samantha@example.com",
    role: "Admin",
    status: "Active",
    joined: "12 Aug 2024",
  },
  {
    id: 2,
    name: "Tony Soap",
    email: "tony@example.com",
    role: "Developer",
    status: "Active",
    joined: "18 Aug 2024",
  },
  {
    id: 3,
    name: "Karen Hope",
    email: "karen@example.com",
    role: "Designer",
    status: "Active",
    joined: "22 Aug 2024",
  },
  {
    id: 4,
    name: "Jordan Nico",
    email: "jordan@example.com",
    role: "Manager",
    status: "Inactive",
    joined: "02 Sep 2024",
  },
  {
    id: 5,
    name: "Kevin Ard",
    email: "kevin@example.com",
    role: "Developer",
    status: "Active",
    joined: "10 Sep 2024",
  },
];

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "Developer",
  });

  const filteredUsers = users.filter(
    (user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const addUser = () => {
    if (!newUser.name || !newUser.email) {
      alert("Please enter name and email");
      return;
    }

    const user = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: "Active",
      joined: "Today",
    };

    setUsers([...users, user]);

    setNewUser({
      name: "",
      email: "",
      role: "Developer",
    });

    setShowModal(false);
  };

  const deleteUser = (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmDelete) {
      setUsers(
        users.filter((user) => user.id !== id)
      );
    }
  };

  return (
    <AdminLayout>

      {/* HEADER */}

      <div className="users-page-header">

        <div>
          <h1>Users</h1>

          <p>
            Manage your team members and user accounts
          </p>
        </div>

        <button
          className="add-user-button"
          onClick={() => setShowModal(true)}
        >
          + Add User
        </button>

      </div>


      {/* STATS */}

      <div className="users-stats">

        <div className="user-stat-card">
          <span>Total Users</span>
          <strong>{users.length}</strong>
        </div>

        <div className="user-stat-card">
          <span>Active Users</span>
          <strong>
            {users.filter(
              (user) => user.status === "Active"
            ).length}
          </strong>
        </div>

        <div className="user-stat-card">
          <span>Developers</span>
          <strong>
            {users.filter(
              (user) => user.role === "Developer"
            ).length}
          </strong>
        </div>

        <div className="user-stat-card">
          <span>Designers</span>
          <strong>
            {users.filter(
              (user) => user.role === "Designer"
            ).length}
          </strong>
        </div>

      </div>


      {/* USER TABLE */}

      <div className="users-card">

        <div className="users-card-header">

          <div>
            <h2>All Users</h2>
            <p>
              View and manage all users
            </p>
          </div>

          <div className="users-search">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

        </div>


        <div className="users-table-wrapper">

          <table className="users-table">

            <thead>

              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {filteredUsers.map((user) => (

                <tr key={user.id}>

                  <td>

                    <div className="user-table-info">

                      <div className="user-table-avatar">
                        {user.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>

                      <div>
                        <strong>
                          {user.name}
                        </strong>

                        <span>
                          {user.email}
                        </span>
                      </div>

                    </div>

                  </td>


                  <td>

                    <span className="user-role">
                      {user.role}
                    </span>

                  </td>


                  <td>

                    <span
                      className={
                        user.status === "Active"
                          ? "user-status active"
                          : "user-status inactive"
                      }
                    >
                      {user.status}
                    </span>

                  </td>


                  <td>
                    <span className="joined-date">
                      {user.joined}
                    </span>
                  </td>


                  <td>

                    <div className="user-actions">

                      <button
                        title="Edit"
                        onClick={() =>
                          alert(
                            `Edit ${user.name}`
                          )
                        }
                      >
                        ✎
                      </button>

                      <button
                        title="Delete"
                        onClick={() =>
                          deleteUser(user.id)
                        }
                      >
                        🗑
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {filteredUsers.length === 0 && (

          <div className="no-users">
            No users found
          </div>

        )}

      </div>


      {/* ADD USER MODAL */}

      {showModal && (

        <div className="users-modal-overlay">

          <div className="users-modal">

            <div className="users-modal-header">

              <h2>
                Add New User
              </h2>

              <button
                onClick={() =>
                  setShowModal(false)
                }
              >
                ×
              </button>

            </div>


            <div className="users-form">

              <label>
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter full name"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    name: e.target.value,
                  })
                }
              />


              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    email: e.target.value,
                  })
                }
              />


              <label>
                Role
              </label>

              <select
                value={newUser.role}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    role: e.target.value,
                  })
                }
              >
                <option>Admin</option>
                <option>Manager</option>
                <option>Developer</option>
                <option>Designer</option>
              </select>


              <div className="users-modal-actions">

                <button
                  className="users-cancel"
                  onClick={() =>
                    setShowModal(false)
                  }
                >
                  Cancel
                </button>

                <button
                  className="users-save"
                  onClick={addUser}
                >
                  Add User
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </AdminLayout>
  );
}
