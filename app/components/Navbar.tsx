import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { NAVBAR_CONFIG } from "@/lib/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/85">
      <nav
        className="mx-auto flex min-h-[74px] w-full max-w-7xl items-center justify-between gap-4 px-4 md:px-6"
        aria-label="Primary"
      >
        <Link href="/" className="inline-flex items-center">
          <Image src={logo} alt="Rite Realty" className="h-10 w-auto md:h-12" priority />
        </Link>

        <ul className="flex list-none items-center gap-1 p-0 text-[15px] font-medium text-zinc-900 dark:text-zinc-100">
          <li className="group relative">
            <button
              className="inline-flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:hover:bg-zinc-800"
              type="button"
            >
              Property Type <span aria-hidden="true">{"\u25BE"}</span>
            </button>
            <ul
              className="invisible absolute left-0 top-[calc(100%+8px)] z-20 w-sm -translate-y-1 rounded-xl border border-zinc-200 bg-white p-2 opacity-0 shadow-lg transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 dark:border-zinc-700 dark:bg-zinc-900 grid grid-cols-2 gap-2"
              aria-label="Properties submenu"
            >
              {NAVBAR_CONFIG.propertyType.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="group relative">
            <button
              className="inline-flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:hover:bg-zinc-800"
              type="button"
            >
              Best Locations <span aria-hidden="true">{"\u25BE"}</span>
            </button>
            <ul
              className="invisible absolute left-0 top-[calc(100%+8px)] z-20 w-72 -translate-y-1 rounded-xl border border-zinc-200 bg-white p-2 opacity-0 shadow-lg transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 dark:border-zinc-700 dark:bg-zinc-900"
              aria-label="Locations submenu"
            >
              {NAVBAR_CONFIG.locations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm leading-snug hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="group relative">
            <button
              className="inline-flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:hover:bg-zinc-800"
              type="button"
            >
              Project Status <span aria-hidden="true">{"\u25BE"}</span>
            </button>
            <ul
              className="invisible absolute left-0 top-[calc(100%+8px)] z-20 w-56 -translate-y-1 rounded-xl border border-zinc-200 bg-white p-2 opacity-0 shadow-lg transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 dark:border-zinc-700 dark:bg-zinc-900"
              aria-label="Project status submenu"
            >
              {NAVBAR_CONFIG.projectStatus.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link
              href="/builders"
              className="inline-flex items-center rounded-lg px-3 py-2 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:hover:bg-zinc-800"
            >
              Builders
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="inline-flex items-center rounded-lg bg-zinc-900 px-3 py-2 text-white transition hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              cms
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
