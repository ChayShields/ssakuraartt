export function BlossomBranch({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden>
            <path
                d="M20 380 C 80 320, 60 260, 120 220 C 160 195, 200 200, 240 160 C 270 130, 260 90, 300 60"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
            />
            <path
                d="M120 220 C 100 200, 80 190, 70 170"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
            />
            <path
                d="M240 160 C 250 190, 250 210, 270 230"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
            />
            {[
                { cx: 60, cy: 165, r: 22, rot: 10 },
                { cx: 130, cy: 205, r: 18, rot: -15 },
                { cx: 280, cy: 55, r: 26, rot: 20 },
                { cx: 265, cy: 235, r: 20, rot: -5 },
                { cx: 195, cy: 155, r: 16, rot: 30 },
            ].map((b, i) => (
                <g key={i} transform={`translate(${b.cx} ${b.cy}) rotate(${b.rot})`}>
                    {[0, 72, 144, 216, 288].map((angle) => (
                        <ellipse
                            key={angle}
                            cx={0}
                            cy={-b.r * 0.6}
                            rx={b.r * 0.42}
                            ry={b.r * 0.62}
                            fill="currentColor"
                            fillOpacity={0.9}
                            transform={`rotate(${angle})`}
                        />
                    ))}
                    <circle r={b.r * 0.18} fill="var(--gold)" />
                </g>
            ))}
        </svg>
    )
}
