import type { Metadata } from "next"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = {
    title: "FAQ | Sakura Art",
    description: "Answers to common questions about commissioning custom hand-painted work.",
}

const faqs = [
    {
        question: "How does a commission actually work?",
        answer: "Send over what you're picturing — an item, a reference image, a rough idea. From there a design gets worked out together before anything gets painted, so there are no surprises when it's finished.",
    },
    {
        question: "Do I need to send my own item?",
        answer: "For most sneakers, caps, and drinkware, yes — the item gets sent over (or dropped off locally) to be painted. This gets confirmed as part of the enquiry.",
    },
    {
        question: "How much does it cost?",
        answer: "There's no fixed price list since every piece is different — size, detail, and item all affect it. Send the idea and a rough budget through the order form and a price gets worked out from there.",
    },
    {
        question: "How long does a commission take?",
        answer: "It depends on the piece and how much is already on the books. A realistic turnaround gets confirmed once the design's agreed.",
    },
    {
        question: "Will the paint actually last?",
        answer: "Pieces are sealed to hold up to everyday wear. Hand-washing rather than machine-washing is recommended to keep them looking their best for longer.",
    },
    {
        question: "Do you ship, or is it local pickup only?",
        answer: "Shipping is available — get in touch with your location and it'll be sorted out as part of the order.",
    },
    {
        question: "Can you paint literally anything?",
        answer: "Almost anything with a paintable surface. A quick chat first helps confirm what's realistic for the specific item before anything's agreed.",
    },
    {
        question: "Do you only do small items, or walls too?",
        answer: "Both — from a single sneaker to a full wall mural. Get in touch with the space and the idea and it'll be scoped properly.",
    },
]

export default function FaqPage() {
    return (
        <main className="bg-indigo-deep pt-[73px]">
            <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">FAQ</p>
                <h1 className="mt-3 font-display text-4xl font-bold uppercase text-paper sm:text-5xl">
                    Frequently Asked Questions
                </h1>
                <p className="mt-4 text-lg text-paper/70">
                    Everything commonly asked before starting a commission.
                </p>
                <div className="ink-panel mt-10 divide-y-2 divide-ink bg-paper">
                    {faqs.map((faq) => (
                        <details key={faq.question} className="group px-6 py-5">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink">
                                {faq.question}
                                <ChevronDown className="h-4 w-4 shrink-0 text-vermillion transition-transform group-open:rotate-180" aria-hidden />
                            </summary>
                            <p className="mt-3 text-sm leading-relaxed text-ink/70">{faq.answer}</p>
                        </details>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-paper/70">Still got a question?</p>
                    <Link
                        href="/#order"
                        className="mt-4 inline-flex items-center justify-center border-2 border-ink bg-vermillion px-6 py-3 text-sm font-bold uppercase tracking-wide text-paper shadow-[4px_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
                    >
                        Start a Commission
                    </Link>
                </div>
            </section>
        </main>
    )
}
