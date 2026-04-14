'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()
  const links = [
    { href: "/", label: "Home" },
    { href: "/library", label: "Library" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#8f673d] bg-[#ecd4af]/95 px-6 py-6 text-[#3f2f21] shadow-lg shadow-[#8f673d]/20">
      <div>
        <h1 className="text-3xl font-bold">Library System</h1>
        <p className="text-sm text-[#6f5235]">Manage your book collection with ease</p>
      </div>

      <div className="flex-1 min-w-55 max-w-lg">
        <input
          type="text"
          name="search"
          id="search-input"
          placeholder="Search books..."
          className="w-full rounded-full border-2 border-[#8f673d] bg-[#faf0dd] px-4 py-2 text-[#3f2f21] shadow-sm shadow-[#7b5b35]/20 focus:border-[#a17c4f] focus:outline-none"
        />
      </div>

      <nav className="flex flex-wrap items-center gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "link active" : "link"}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header;