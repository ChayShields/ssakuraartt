"use client"

import { useState } from "react"

// PREVIEW ONLY — not wired up yet. Once the client confirms she wants to
// proceed, this submits to a Brevo contact-form endpoint (same pattern
// used across Chay's other client sites) instead of doing nothing.
export default function OrderForm() {
    const [submitted, setSubmitted] = useState(false)

    const fieldClass =
        "mt-1.5 w-full border-2 border-paper/30 bg-indigo px-4 py-2.5 text-sm text-paper outline-none placeholder:text-paper/40 focus:border-vermillion"
    const labelClass = "text-sm font-bold uppercase tracking-wide text-paper"

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                setSubmitted(true)
            }}
            className="grid gap-5"
        >
            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className={labelClass}>Name</label>
                    <input id="name" name="name" type="text" required className={fieldClass} placeholder="Your name" />
                </div>
                <div>
                    <label htmlFor="contact" className={labelClass}>Email or Instagram</label>
                    <input id="contact" name="contact" type="text" required className={fieldClass} placeholder="you@email.com or @yourhandle" />
                </div>
            </div>

            <div>
                <label htmlFor="item-type" className={labelClass}>What are you after?</label>
                <select id="item-type" name="item-type" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>Select an option</option>
                    <option value="sneakers">Custom Sneakers</option>
                    <option value="caps">Caps &amp; Accessories</option>
                    <option value="drinkware">Drinkware</option>
                    <option value="wall-art">Wall Art / Mural</option>
                    <option value="other">Something else</option>
                </select>
            </div>

            <div>
                <label htmlFor="budget" className={labelClass}>Rough budget (optional)</label>
                <select id="budget" name="budget" defaultValue="" className={fieldClass}>
                    <option value="">Prefer not to say</option>
                    <option value="under-50">Under £50</option>
                    <option value="50-100">£50 - £100</option>
                    <option value="100-250">£100 - £250</option>
                    <option value="250-plus">£250+</option>
                </select>
            </div>

            <div>
                <label htmlFor="description" className={labelClass}>Tell me about the idea</label>
                <textarea
                    id="description"
                    name="description"
                    required
                    rows={5}
                    className={fieldClass}
                    placeholder="What item, what design, any reference images or inspiration..."
                />
            </div>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                    type="submit"
                    className="inline-flex items-center justify-center border-2 border-ink bg-vermillion px-6 py-3 text-sm font-bold uppercase tracking-wide text-paper shadow-[4px_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
                >
                    Send Enquiry
                </button>
                <p className="text-xs text-paper/50">
                    Design preview only — this form isn&apos;t connected yet.
                </p>
            </div>

            {submitted && (
                <p className="border-2 border-gold bg-gold/10 px-4 py-3 text-sm font-medium text-paper">
                    This is a preview, so nothing was actually sent — but this is exactly
                    how the real enquiry form will work once it&apos;s switched on.
                </p>
            )}
        </form>
    )
}
