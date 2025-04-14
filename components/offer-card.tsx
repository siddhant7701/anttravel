import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface OfferCardProps {
  title: string
  description: string
  image: string
  discount: string
  link: string
}

export default function OfferCard({ title, description, image, discount, link }: OfferCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={600}
        height={300}
        className="w-full h-auto transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
        <div className="absolute top-4 right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl transform rotate-12 shadow-lg animate-bounce-slow z-10">
          {discount}
        </div>

        <h3 className="text-white text-2xl font-bold mb-2 transition-transform duration-300 group-hover:translate-y-[-10px]">
          {title}
        </h3>
        <p className="text-white/90 mb-4 transition-all duration-500 opacity-80 group-hover:opacity-100">
          {description}
        </p>

        <Link
          href={link}
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white w-fit transform translate-y-0 group-hover:translate-y-[-5px]"
        >
          <span>BOOK NOW</span>
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
