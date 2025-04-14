import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Info } from "lucide-react"

interface VehicleCardProps {
  name: string
  image: string
  description?: string
  price?: string
  category: string
  features?: string[]
}

export default function VehicleCard({ name, image, description, price, category, features = [] }: VehicleCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group">
      <div className="relative overflow-hidden h-48">
        {/* Overlay that appears on hover */}
        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/70 transition-all duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="text-white p-4 text-center transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
            <Info size={24} className="mx-auto mb-2" />
            <h4 className="font-bold mb-2">Features:</h4>
            <ul className="text-sm space-y-1">
              {features.length > 0 ? (
                features.map((feature, index) => <li key={index}>{feature}</li>)
              ) : (
                <>
                  <li>Air Conditioned</li>
                  <li>Comfortable Seating</li>
                  <li>Professional Driver</li>
                </>
              )}
            </ul>
          </div>
        </div>

        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
        />

        {price && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
            {price}
          </div>
        )}

        <div className="absolute top-3 left-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium z-20">
          {category}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
        {description && <p className="text-gray-600 text-sm mb-3">{description}</p>}
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-medium">View Details</span>
          <Link
            href={`/vehicles/${name.toLowerCase().replace(/\s+/g, "-")}`}
            className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"
          >
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}
