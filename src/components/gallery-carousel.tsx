import Image from "next/image"
import Link from "next/link"

export default function GalleryCarousel({ images }: { images: string[] }) {
    const loop = [...images, ...images]

    return (
        <div className="group overflow-hidden">
            <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
                {loop.map((file, index) => (
                    <Link
                        key={`${file}-${index}`}
                        href="/gallery"
                        className="ink-panel relative aspect-square w-[220px] shrink-0 overflow-hidden bg-indigo sm:w-[260px] lg:w-[300px]"
                    >
                        <Image
                            src={`/gallery/${file}`}
                            alt="Hand-painted custom piece by Sakura Art"
                            fill
                            sizes="300px"
                            className="object-cover"
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}
