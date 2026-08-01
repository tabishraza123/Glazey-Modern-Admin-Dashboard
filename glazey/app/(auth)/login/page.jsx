"use client";

import { useState } from "react";
import AdminLayout from "../../(auth)/components/AdminLayout";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  const [user, setUser] = useState({
    firstName: "Tabish",
    lastName: "Mehsi",
    email: "tabish@example.com",
    phone: "+91 98765 43210",
    role: "Admin",
    location: "India",
    bio: "Frontend Developer and Software Engineer.",
  });

  const [editMode, setEditMode] = useState(false);

  const [notifications, setNotifications] = useState({
    email: true,
    messages: true,
    projects: false,
    updates: true,
  });

  const updateUser = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  return (
    <AdminLayout>

      {/* HEADER */}

      <div className="profile-page-header">

        <div>

          <h1>
            My Profile
          </h1>

          <p>
            Manage your account and personal information
          </p>

        </div>

      </div>


      {/* PROFILE TOP */}

      <div className="profile-card profile-cover">

        <div className="profile-avatar">
          TM
        </div>

        <div className="profile-main-info">

          <h2>
            {user.firstName} {user.lastName}
          </h2>

          <p>
            {user.role}
          </p>

          <span>
            📍 {user.location}
          </span>

        </div>

        <button
          className="edit-profile-button"
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? "Cancel" : "Edit Profile"}
        </button>

      </div>


      {/* CONTENT */}

      <div className="profile-content">

        {/* SIDEBAR */}

        <div className="profile-card profile-sidebar">

          <button
            className={
              activeTab === "profile"
                ? "profile-nav active"
                : "profile-nav"
            }
            onClick={() =>
              setActiveTab("profile")
            }
          >
            👤 Personal Information
          </button>

          <button
            className={
              activeTab === "security"
                ? "profile-nav active"
                : "profile-nav"
            }
            onClick={() =>
              setActiveTab("security")
            }
          >
            🔒 Security
          </button>

          <button
            className={
              activeTab === "notifications"
                ? "profile-nav active"
                : "profile-nav"
            }
            onClick={() =>
              setActiveTab("notifications")
            }
          >
            🔔 Notifications
          </button>

        </div>


        {/* MAIN */}

        <div className="profile-card profile-details">

          {/* PERSONAL */}

          {activeTab === "profile" && (

            <div>

              <div className="profile-section-header">

                <div>

                  <h2>
                    Personal Information
                  </h2>

                  <p>
                    Update your personal details
                  </p>

                </div>

              </div>


              <div className="profile-form-grid">

                <div className="profile-field">

                  <label>
                    First Name
                  </label>

                  <input
                    disabled={!editMode}
                    value={user.firstName}
                    onChange={(e) =>
                      updateUser(
                        "firstName",
                        e.target.value
                      )
                    }
                  />

                </div>


                <div className="profile-field">

                  <label>
                    Last Name
                  </label>

                  <input
                    disabled={!editMode}
                    value={user.lastName}
                    onChange={(e) =>
                      updateUser(
                        "lastName",
                        e.target.value
                      )
                    }
                  />

                </div>


                <div className="profile-field">

                  <label>
                    Email Address
                  </label>

                  <input
                    disabled={!editMode}
                    value={user.email}
                    onChange={(e) =>
                      updateUser(
                        "email",
                        e.target.value
                      )
                    }
                  />

                </div>


                <div className="profile-field">

                  <label>
                    Phone Number
                  </label>

                  <input
                    disabled={!editMode}
                    value={user.phone}
                    onChange={(e) =>
                      updateUser(
                        "phone",
                        e.target.value
                      )
                    }
                  />

                </div>


                <div className="profile-field">

                  <label>
                    Role
                  </label>

                  <input
                    disabled
                    value={user.role}
                  />

                </div>


                <div className="profile-field">

                  <label>
                    Location
                  </label>

                  <input
                    disabled={!editMode}
                    value={user.location}
                    onChange={(e) =>
                      updateUser(
                        "location",
                        e.target.value
                      )
                    }
                  />

                </div>


                <div className="profile-field full">

                  <label>
                    Bio
                  </label>

                  <textarea
                    disabled={!editMode}
                    value={user.bio}
                    onChange={(e) =>
                      updateUser(
                        "bio",
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>


              {editMode && (

                <div className="profile-save-area">

                  <button
                    onClick={() =>
                      setEditMode(false)
                    }
                  >
                    Save Changes
                  </button>

                </div>

              )}

            </div>

          )}


          {/* SECURITY */}

          {activeTab === "security" && (

            <div>

              <div className="profile-section-header">

                <h2>
                  Security
                </h2>

                <p>
                  Manage your password and security settings
                </p>

              </div>


              <div className="security-item">

                <div>

                  <h3>
                    Change Password
                  </h3>

                  <p>
                    Update your password regularly
                    to keep your account secure.
                  </p>

                </div>

                <button>
                  Change Password
                </button>

              </div>


              <div className="security-item">

                <div>

                  <h3>
                    Two-Factor Authentication
                  </h3>

                  <p>
                    Add an extra layer of security
                    to your account.
                  </p>

                </div>

                <label className="switch">

                  <input
                    type="checkbox"
                  />

                  <span></span>

                </label>

              </div>


              <div className="security-item">

                <div>

                  <h3>
                    Active Sessions
                  </h3>

                  <p>
                    You are currently logged in
                    from this device.
                  </p>

                </div>

                <button>
                  View Sessions
                </button>

              </div>

            </div>

          )}


          {/* NOTIFICATIONS */}

          {activeTab === "notifications" && (

            <div>

              <div className="profile-section-header">

                <h2>
                  Notifications
                </h2>

                <p>
                  Choose which notifications you want
                  to receive
                </p>

              </div>


              <div className="notification-item">

                <div>

                  <h3>
                    Email Notifications
                  </h3>

                  <p>
                    Receive important updates by email.
                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      email: e.target.checked,
                    })
                  }
                />

              </div>


              <div className="notification-item">

                <div>

                  <h3>
                    New Messages
                  </h3>

                  <p>
                    Get notified when someone sends
                    you a message.
                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={notifications.messages}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      messages: e.target.checked,
                    })
                  }
                />

              </div>


              <div className="notification-item">

                <div>

                  <h3>
                    Project Updates
                  </h3>

                  <p>
                    Receive updates about your projects.
                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={notifications.projects}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      projects: e.target.checked,
                    })
                  }
                />

              </div>


              <div className="notification-item">

                <div>

                  <h3>
                    System Updates
                  </h3>

                  <p>
                    Get important system notifications.
                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={notifications.updates}
                  onChange={(e) =>
                    setNotifications({
                      ...notifications,
                      updates: e.target.checked,
                    })
                  }
                />

              </div>

            </div>

          )}

        </div>

      </div>

    </AdminLayout>
  );
}