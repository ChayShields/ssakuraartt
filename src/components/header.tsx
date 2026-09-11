"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { InstagramIcon, INSTAGRAM_URL } from "./instagram-icon"

const links = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/faq", label: "FAQ" },
    { href: "/#order", label: "Order" },
]

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 inset-x-0 z-50 border-b-2 border-ink bg-indigo-deep/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
                <Link href="/" className="font-display text-lg font-bold lowercase tracking-wide text-paper">
                    ssakuraartt
                </Link>

                <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide text-paper/80 sm:flex">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-paper/70 transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden items-center gap-2 border-2 border-ink bg-vermillion px-4 py-2 text-sm font-bold uppercase tracking-wide text-paper shadow-[3px_3px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
                    >
                        <InstagramIcon className="h-4 w-4" />
                        Commission
                    </a>

                    <button
                        type="button"
                        onClick={() => setOpen((value) => !value)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-indigo text-paper sm:hidden"
                    >
                        {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="border-t-2 border-ink bg-indigo-deep px-4 pb-6 pt-2 sm:hidden">
                    <nav className="flex flex-col gap-1 text-sm font-semibold uppercase tracking-wide text-paper/80">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="border-b border-paper/10 py-3 hover:text-paper transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center gap-2 border-2 border-ink bg-vermillion px-4 py-3 text-sm font-bold uppercase tracking-wide text-paper shadow-[3px_3px_0_0_var(--ink)]"
                    >
                        <InstagramIcon className="h-4 w-4" />
                        Commission
                    </a>
                </div>
            )}
        </header>
    )
}
