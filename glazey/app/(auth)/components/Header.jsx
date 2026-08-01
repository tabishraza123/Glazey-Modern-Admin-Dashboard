"use client";

import { useState } from "react";

export default function Header({ onMenuClick }) {

  const [search, setSearch] = useState("");

  return (
    <header className="header">

      {/* Mobile Menu */}
      <button
        className="mobile-menu-button"
        onClick={onMenuClick}
      >
        ☰
      </button>

      {/* Search */}
      <div className="header-search">

        <span className="search-icon">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search here..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {/* Header Right */}
      <div className="header-right">

        {/* Language */}
        <button className="language-button">
          🇺🇸
          <span>English (US)</span>
          <span>⌄</span>
        </button>

        {/* Mail */}
        <button className="header-icon-button">
          ✉
          <span className="notification-dot"></span>
        </button>

        {/* Notification */}
        <button className="header-icon-button">
          ♧
          <span className="notification-dot"></span>
        </button>

        {/* Settings */}
        <button className="header-icon-button">
          ⚙
        </button>

        {/* User */}
        <div className="header-user">

          <div className="header-user-info">
            <strong>Nella Vita</strong>
            <span>Admin</span>
          </div>

          <div className="header-avatar">
            NV
          </div>

        </div>

      </div>

    </header>
  );
}