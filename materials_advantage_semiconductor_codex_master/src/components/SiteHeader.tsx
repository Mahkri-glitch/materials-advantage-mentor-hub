"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/mentorship", label: "Mentorship" },
  { href: "/semiconductors", label: "Semiconductors" },
  { href: "/templates", label: "Templates" },
  { href: "/faculty", label: "Faculty" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        <Link href="/" className="brand">Entering Research</Link>
        <nav className="topNav" aria-label="Site navigation">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={active ? "navLink activeNav" : "navLink"}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
