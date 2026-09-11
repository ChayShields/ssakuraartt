import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Coffee, Paintbrush2, Sparkles, ArrowRight } from "lucide-react"
import { INSTAGRAM_URL, InstagramIcon } from "../components/instagram-icon"
import { galleryImages } from "../lib/gallery"
import OrderForm from "../components/order-form"
import GalleryCarousel from "../components/gallery-carousel"

const services = [
    {
        icon: ShoppingBag,
        title: "Custom Sneakers",
        description: "Nike Air Force 1s and more, hand-painted with anything from cartoon characters to personalised name-drops.",
    },
    {
        icon: Sparkles,
        title: "Caps & Accessories",
        description: "Snapbacks, wallets, and everyday pieces turned into something one-of-a-kind.",
    },
    {
        icon: Coffee,
        title: "Drinkware",
        description: "Tumblers and cups painted with a scene or design as detailed as you want it.",
    },
    {
        icon: Paintbrush2,
        title: "Wall Art & Murals",
        description: "From a single feature wall to a full mural, painted to fit the room and the brief.",
    },
]

const galleryPreview = galleryImages.slice(0, 12)

export default function Home() {
    return (
        <main id="top" className="pt-[73px]">
            {/* HERO — indigo ground, reversed type, blossom motif bleeding off-frame, logo centered between two product shots */}
            <section className="relative overflow-hidden bg-indigo-deep">
                <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
                    <p className="mx-auto inline-flex items-center gap-2 border-2 border-paper/40 bg-indigo-deep px-3 py-1 text-xs font-bold uppercase tracking-widest text-paper">
                        Hand-Painted &middot; One Of One
                    </p>
                    <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold uppercase leading-[0.95] text-paper sm:text-6xl">
                        Turning ordinary items into something extraordinary.
                    </h1>
                    <p className="mx-auto mt-6 max-w-lg text-lg text-paper/70">
                        Sneakers, caps, drinkware, and walls — every piece hand-painted,
                        one at a time. If you can picture it, it can probably be painted.
                    </p>
                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="#order"
                            className="inline-flex items-center justify-center border-2 border-ink bg-vermillion px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-paper shadow-[5px_5px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
                        >
                            Start a Commission
                        </a>
                        <Link
                            href="/gallery"
                            className="inline-flex items-center justify-center border-2 border-paper/40 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:border-paper hover:text-paper"
                        >
                            See the Gallery
                        </Link>
                    </div>

                    <div className="relative mx-auto mt-16 aspect-[850/442] w-full max-w-[420px]">
                        <Image src="/logo.png" alt="Sakura Art logo" fill priority sizes="420px" className="object-contain" />
                    </div>

                    <div className="mt-10 flex items-center justify-center gap-4 sm:gap-8">
                        <div className="ink-panel relative aspect-square w-[38%] max-w-[260px] overflow-hidden bg-indigo sm:w-[280px]">
                            <Image
                                src="/gallery/IMG_0690.jpg"
                                alt="Hand-painted custom sneaker by Sakura Art"
                                fill
                                sizes="280px"
                                className="object-cover"
                            />
                        </div>
                        <div className="ink-panel relative aspect-square w-[38%] max-w-[260px] overflow-hidden bg-indigo sm:w-[280px]">
                            <Image
                                src="/gallery/IMG_0698.jpg"
                                alt="Hand-painted custom sneaker by Sakura Art"
                                fill
                                sizes="280px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT — paper ground, ink-panel photo, dark reads as a print-poster band */}
            <section id="about" className="relative overflow-hidden border-y-2 border-ink bg-indigo-deep py-20 text-paper sm:py-28">
                <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
                    <div className="ink-panel relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden bg-indigo">
                        <Image
                            src="/gallery/IMG_0703.jpg"
                            alt="A recent hand-painted custom sneaker commission"
                            fill
                            sizes="(min-width: 1024px) 420px, 80vw"
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-paper">About</p>
                        <h2 className="mt-3 font-display text-3xl font-bold uppercase sm:text-4xl">Sakura Art</h2>
                        <p className="mt-5 leading-relaxed text-paper/75">
                            Sakura Art is the work of a single artist with a paintbrush and a
                            simple idea: everyday items don&apos;t have to stay ordinary. What
                            started as painting a pair of trainers has grown into full
                            commissions across sneakers, caps, drinkware, and walls.
                        </p>
                        <p className="mt-4 leading-relaxed text-paper/75">
                            Every piece is hand-painted, not printed or vinyl — that&apos;s what
                            makes each one genuinely one of one. No two commissions come out
                            the same, because no two ideas are the same.
                        </p>
                        <Link
                            href="/gallery"
                            className="mt-7 inline-flex items-center gap-2 border-b-2 border-paper/60 pb-1 text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:border-paper hover:text-paper"
                        >
                            See more of the work
                            <ArrowRight className="h-4 w-4" aria-hidden />
                        </Link>
                    </div>
                </div>
            </section>

            {/* RECENT WORK — indigo ground, ink-panel thumbnails */}
            <section className="bg-indigo-deep py-20 sm:py-28">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-paper">Portfolio</p>
                            <h2 className="mt-3 font-display text-3xl font-bold uppercase text-paper sm:text-4xl">Recent Work</h2>
                        </div>
                        <Link
                            href="/gallery"
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-paper hover:text-paper/70 transition-colors"
                        >
                            View full gallery
                            <ArrowRight className="h-4 w-4" aria-hidden />
                        </Link>
                    </div>
                    <div className="mt-10">
                        <GalleryCarousel images={galleryPreview} />
                    </div>
                </div>
            </section>

            {/* SERVICES — paper ground, ink-panel cards, solid colour icon blocks */}
            <section id="services" className="border-y-2 border-ink bg-indigo-deep py-20 text-paper sm:py-28">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-paper">Services</p>
                    <h2 className="mt-3 font-display text-3xl font-bold uppercase sm:text-4xl">What Gets Painted</h2>
                    <p className="mt-3 max-w-xl text-paper/70">
                        A few of the regulars — but if it has a surface, it&apos;s fair game.
                    </p>
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map(({ icon: Icon, title, description }, index) => (
                            <div key={title} className="ink-panel bg-indigo-deep p-6">
                                <div
                                    className="flex h-12 w-12 items-center justify-center border-2 border-ink"
                                    style={{ background: index % 2 === 0 ? "var(--sakura)" : "var(--vermillion)" }}
                                >
                                    <Icon className="h-6 w-6 text-paper" aria-hidden />
                                </div>
                                <h3 className="mt-4 font-display text-lg font-bold uppercase text-paper">{title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-paper/70">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ORDER — indigo ground, paper ink-panel form */}
            <section id="order" className="relative overflow-hidden bg-indigo-deep py-20 sm:py-28">
                <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-paper">Get Started</p>
                        <h2 className="mt-3 font-display text-3xl font-bold uppercase text-paper sm:text-4xl">Start a Commission</h2>
                        <p className="mx-auto mt-3 max-w-lg text-paper/70">
                            Fill this in with what you&apos;re picturing, and it&apos;ll come
                            straight through as an enquiry.
                        </p>
                    </div>
                    <div className="ink-panel mt-10 bg-indigo-deep p-6 sm:p-10">
                        <OrderForm />
                    </div>
                    <p className="mt-8 text-center text-sm text-paper/60">
                        Prefer to just message? Reach out on{" "}
                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-bold text-paper hover:text-paper/70"
                        >
                            <InstagramIcon className="h-3.5 w-3.5" />
                            Instagram
                        </a>{" "}
                        instead.
                    </p>
                </div>
            </section>
        </main>
    )
}
