"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AdminLayout({
  children,
}) {

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <div
        className={
          sidebarOpen
            ? "sidebar-wrapper sidebar-open"
            : "sidebar-wrapper"
        }
      >
        <Sidebar />
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}

      {/* Main */}
      <div className="admin-main">

        <Header
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />

        <main className="page-content">
          {children}
        </main>

      </div>

    </div>
  );
}