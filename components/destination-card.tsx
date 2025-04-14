import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface DestinationCardProps {
  name: string
  image: string
  description: string
}

export default function DestinationCard({ name, image, description }: DestinationCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={400}
        height={300}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300">
        <h3 className="text-white text-2xl font-bold mb-2">{name}</h3>
        <p className="text-white/90 mb-4">{description}</p>
        <Link
          href={`/destinations/${name.toLowerCase()}`}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-blue-600 w-fit"
        >
          <span>View More</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
