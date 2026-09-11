import Link from "next/link"
import { InstagramIcon, INSTAGRAM_URL } from "./instagram-icon"

export default function Header() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 border-b-2 border-ink bg-indigo-deep/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
                <Link href="/" className="font-display text-lg font-bold lowercase tracking-wide text-paper">
                    <span className="text-sakura">s</span>sakuraartt
                </Link>
                <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide text-paper/80 sm:flex">
                    <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                    <Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
                    <Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link>
                    <Link href="/#order" className="hover:text-gold transition-colors">Order</Link>
                </nav>
                <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-ink bg-vermillion px-4 py-2 text-sm font-bold uppercase tracking-wide text-paper shadow-[3px_3px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
                >
                    <InstagramIcon className="h-4 w-4" />
                    <span className="hidden sm:inline">Commission</span>
                    <span className="sm:hidden">DM</span>
                </a>
            </div>
        </header>
    )
}
