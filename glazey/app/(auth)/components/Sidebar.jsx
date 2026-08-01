"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "⌂",
  },
  {
    name: "Email",
    href: "/email",
    icon: "✉",
  },
  {
    name: "Contacts",
    href: "/contacts",
    icon: "♙",
  },
  {
    name: "Crypto",
    href: "/crypto",
    icon: "₿",
  },
  {
    name: "Kanban",
    href: "/kanban",
    icon: "▦",
  },
  {
    name: "Invoicing",
    href: "/invoice",
    icon: "▤",
  },
  {
    name: "Banking",
    href: "/banking",
    icon: "▥",
  },
  {
    name: "Ticketing",
    href: "/ticketing",
    icon: "◫",
  },
  {
    name: "File Manager",
    href: "/file-manager",
    icon: "▣",
  },
  {
    name: "User",
    href: "/user",
    icon: "♙",
  },
  {
    name: "Calendar",
    href: "/calendar",
    icon: "▦",
  },
  {
    name: "Todo List",
    href: "/todo",
    icon: "☷",
  },
  {
    name: "Chat",
    href: "/chat",
    icon: "▰",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <span className="logo-text">Glazey</span>
        <span className="logo-dot">.</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">

        {menuItems.map((item) => {

          const isActive =
            pathname === item.href ||
            (item.href === "/dashboard" && pathname === "/");

          return (
            <Link
              href={item.href}
              key={item.name}
              className={`sidebar-item ${
                isActive ? "sidebar-item-active" : ""
              }`}
            >
              <span className="sidebar-icon">
                {item.icon}
              </span>

              <span className="sidebar-name">
                {item.name}
              </span>
            </Link>
          );
        })}

      </nav>

      {/* Upgrade Card */}
      <div className="upgrade-card">

        <div className="upgrade-top">
          <div>
            <h4>
              Upgrade your
              <br />
              Account to Pro
            </h4>
          </div>

          <span className="upgrade-menu">
            ▦
          </span>
        </div>

        <button className="upgrade-button">
          Upgrade
        </button>

      </div>

    </aside>
  );
}