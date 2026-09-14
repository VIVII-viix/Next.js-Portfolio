"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../css/navbar-style.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contacts", href: "" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`nav-link ${pathname === item.href ? "active" : ""}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
