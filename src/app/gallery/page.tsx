import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { galleryImages } from "../../lib/gallery"

export const metadata: Metadata = {
    title: "Gallery | Sakura Art",
    description: "Recent hand-painted commissions — sneakers, caps, drinkware, and more.",
}

export default function GalleryPage() {
    return (
        <main className="bg-indigo-deep pt-[73px]">
            <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">Portfolio</p>
                <h1 className="mt-3 font-display text-4xl font-bold uppercase text-paper sm:text-5xl">The Gallery</h1>
                <p className="mt-4 max-w-xl text-lg text-paper/70">
                    A look at recent commissions — every single piece painted by hand.
                </p>
                <div className="mt-10 columns-2 gap-5 sm:columns-3 lg:columns-4">
                    {galleryImages.map((file) => (
                        <div key={file} className="ink-panel mb-5 break-inside-avoid overflow-hidden bg-indigo">
                            <Image
                                src={`/gallery/${file}`}
                                alt="Hand-painted custom piece by Sakura Art"
                                width={600}
                                height={600}
                                sizes="(min-width: 1024px) 25vw, 50vw"
                                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
                <div className="ink-panel mt-16 bg-paper px-6 py-10 text-center text-ink sm:px-12">
                    <h2 className="font-display text-2xl font-bold uppercase sm:text-3xl">
                        See something close to what you want?
                    </h2>
                    <p className="mx-auto mt-2 max-w-md text-ink/70">
                        Every piece here started as someone&apos;s idea. Yours can too.
                    </p>
                    <Link
                        href="/#order"
                        className="mt-6 inline-flex items-center justify-center border-2 border-ink bg-vermillion px-6 py-3 text-sm font-bold uppercase tracking-wide text-paper shadow-[4px_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
                    >
                        Start a Commission
                    </Link>
                </div>
            </section>
        </main>
    )
}
