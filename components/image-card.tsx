import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ImageCardProps {
  name: string
  image: string
  description: string
  link?: string
  linkText?: string
  className?: string
}

export default function ImageCard({
  name,
  image,
  description,
  link = "#",
  linkText = "View More",
  className = "",
}: ImageCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-xl shadow-lg ${className}`}>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 z-10"></div>

      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={400}
        height={300}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
      />

      {/* Always visible content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
        <h3 className="text-white text-2xl font-bold mb-2 transition-all duration-300 transform translate-y-0 group-hover:translate-y-[-20px]">
          {name}
        </h3>

        {/* Content that appears on hover */}
        <div className="transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0">
          <p className="text-white/90 mb-4">{description}</p>
          <Link
            href={link}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-blue-600 w-fit"
          >
            <span>{linkText}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
