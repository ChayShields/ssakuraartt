import Image from "next/image"
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "./instagram-icon"

export default function Footer() {
    return (
        <footer className="border-t-2 border-ink bg-indigo-deep py-10 text-paper">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center sm:px-6">
                <div className="relative aspect-[850/442] w-40">
                    <Image src="/logo.png" alt="Sakura Art logo" fill sizes="160px" className="object-contain" />
                </div>
                <p className="mt-2 text-sm text-paper/60">Turning ordinary items into something extraordinary.</p>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mt-2 text-sm font-semibold text-paper hover:text-paper/70 transition-colors">
                    @{INSTAGRAM_HANDLE}
                </a>
            </div>
        </footer>
    )
}
