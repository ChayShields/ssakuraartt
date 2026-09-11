import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Coffee, Paintbrush2, Sparkles, ArrowRight } from "lucide-react"
import { INSTAGRAM_URL, InstagramIcon } from "../components/instagram-icon"
import { BlossomBranch } from "../components/blossom-branch"
import { galleryImages } from "../lib/gallery"
import OrderForm from "../components/order-form"

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

const galleryPreview = galleryImages.slice(0, 6)

export default function Home() {
    return (
        <main id="top" className="pt-[73px]">
            {/* HERO — indigo ground, reversed type, blossom motif bleeding off-frame */}
            <section className="relative overflow-hidden bg-indigo-deep">
                <BlossomBranch className="pointer-events-none absolute -right-24 -top-16 h-[560px] w-[560px] text-sakura/25" />
                <BlossomBranch className="pointer-events-none absolute -left-28 bottom-[-160px] h-[420px] w-[420px] rotate-[210deg] text-gold/15" />
                <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
                    <div>
                        <p className="inline-flex items-center gap-2 border-2 border-gold bg-indigo-deep px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
                            Hand-Painted &middot; One Of One
                        </p>
                        <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] text-paper sm:text-6xl">
                            Turning ordinary
                            <span className="block text-sakura">items</span>
                            into something
                            <span className="block text-vermillion">extraordinary.</span>
                        </h1>
                        <p className="mt-6 max-w-lg text-lg text-paper/70">
                            Sneakers, caps, drinkware, and walls — every piece hand-painted,
                            one at a time. If you can picture it, it can probably be painted.
                        </p>
                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#order"
                                className="inline-flex items-center justify-center border-2 border-ink bg-vermillion px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-paper shadow-[5px_5px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
                            >
                                Start a Commission
                            </a>
                            <Link
                                href="/gallery"
                                className="inline-flex items-center justify-center border-2 border-paper/40 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:border-gold hover:text-gold"
                            >
                                See the Gallery
                            </Link>
                        </div>
                    </div>
                    <div className="relative mx-auto w-full max-w-sm">
                        <div className="ink-panel relative aspect-square overflow-hidden bg-indigo">
                            <Image
                                src="/gallery/IMG_0688.jpg"
                                alt="Hand-painted cherry blossom design on a black New Era cap"
                                fill
                                priority
                                sizes="(min-width: 1024px) 420px, 80vw"
                                className="object-cover"
                            />
                        </div>
                        <p className="mt-6 text-center font-display text-sm font-bold uppercase tracking-[0.3em] text-gold">
                            Sakura Art
                        </p>
                    </div>
                </div>
            </section>

            {/* ABOUT — paper ground, ink-panel photo, dark reads as a print-poster band */}
            <section id="about" className="relative overflow-hidden border-y-2 border-ink bg-paper py-20 text-ink sm:py-28">
                <BlossomBranch className="pointer-events-none absolute -right-10 -bottom-24 h-[320px] w-[320px] rotate-[300deg] text-sakura/10" />
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
                        <p className="text-xs font-bold uppercase tracking-widest text-vermillion">About</p>
                        <h2 className="mt-3 font-display text-3xl font-bold uppercase sm:text-4xl">Sakura Art</h2>
                        <p className="mt-5 leading-relaxed text-ink/75">
                            Sakura Art is the work of a single artist with a paintbrush and a
                            simple idea: everyday items don&apos;t have to stay ordinary. What
                            started as painting a pair of trainers has grown into full
                            commissions across sneakers, caps, drinkware, and walls.
                        </p>
                        <p className="mt-4 leading-relaxed text-ink/75">
                            Every piece is hand-painted, not printed or vinyl — that&apos;s what
                            makes each one genuinely one of one. No two commissions come out
                            the same, because no two ideas are the same.
                        </p>
                        <Link
                            href="/gallery"
                            className="mt-7 inline-flex items-center gap-2 border-b-2 border-vermillion pb-1 text-sm font-bold uppercase tracking-wide text-vermillion transition-colors hover:border-ink hover:text-ink"
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
                            <p className="text-xs font-bold uppercase tracking-widest text-gold">Portfolio</p>
                            <h2 className="mt-3 font-display text-3xl font-bold uppercase text-paper sm:text-4xl">Recent Work</h2>
                        </div>
                        <Link
                            href="/gallery"
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-sakura hover:text-gold transition-colors"
                        >
                            View full gallery
                            <ArrowRight className="h-4 w-4" aria-hidden />
                        </Link>
                    </div>
                    <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
                        {galleryPreview.map((file) => (
                            <Link key={file} href="/gallery" className="ink-panel relative aspect-square overflow-hidden bg-indigo">
                                <Image
                                    src={`/gallery/${file}`}
                                    alt="Hand-painted custom piece by Sakura Art"
                                    fill
                                    sizes="(min-width: 1024px) 16vw, 33vw"
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES — paper ground, ink-panel cards, solid colour icon blocks */}
            <section id="services" className="border-y-2 border-ink bg-paper py-20 text-ink sm:py-28">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-vermillion">Services</p>
                    <h2 className="mt-3 font-display text-3xl font-bold uppercase sm:text-4xl">What Gets Painted</h2>
                    <p className="mt-3 max-w-xl text-ink/70">
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
                <BlossomBranch className="pointer-events-none absolute -left-20 -top-20 h-[380px] w-[380px] text-gold/10" />
                <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-gold">Get Started</p>
                        <h2 className="mt-3 font-display text-3xl font-bold uppercase text-paper sm:text-4xl">Start a Commission</h2>
                        <p className="mx-auto mt-3 max-w-lg text-paper/70">
                            Fill this in with what you&apos;re picturing, and it&apos;ll come
                            straight through as an enquiry.
                        </p>
                    </div>
                    <div className="ink-panel mt-10 bg-paper p-6 sm:p-10">
                        <OrderForm />
                    </div>
                    <p className="mt-8 text-center text-sm text-paper/60">
                        Prefer to just message? Reach out on{" "}
                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-bold text-sakura hover:text-gold"
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
