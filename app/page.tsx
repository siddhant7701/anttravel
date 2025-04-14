"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Mail,
  ChevronRight,
  MapPin,
  Star,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
  CreditCard,
  Search,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import VehicleCard from "@/components/vehicle-card"
import ImageCard from "@/components/image-card"
import ServiceFilter from "@/components/service-filter"
import OfferCard from "@/components/offer-card"

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll for sticky header effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Vehicle data with categories
  const vehicles = [
    {
      name: "Swift Dzire Car",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-1-zNHRLC6zqWIBy7oaLAc3NKfJS3jHXQ.png",
      category: "car",
      price: "₹9/km",
      description: "Comfortable sedan for up to 4 passengers",
      features: ["AC", "4 Passengers", "Luggage Space", "Music System"],
    },
    {
      name: "Toyota Etios Car",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-1-zNHRLC6zqWIBy7oaLAc3NKfJS3jHXQ.png",
      category: "car",
      price: "₹10/km",
      description: "Spacious sedan for family travel",
      features: ["AC", "4 Passengers", "Large Trunk", "Bluetooth Audio"],
    },
    {
      name: "Toyota Innova Car",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-1-zNHRLC6zqWIBy7oaLAc3NKfJS3jHXQ.png",
      category: "car",
      price: "₹14/km",
      description: "Spacious SUV for group travel",
      features: ["AC", "7 Passengers", "Ample Luggage Space", "Premium Interior"],
    },
    {
      name: "12 Seater Traveler",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ant-travels-12-seater-traveler-hire_1.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg",
      category: "minivan",
      price: "₹18/km",
      description: "Comfortable minivan for group travel",
      features: ["AC", "12 Passengers", "Reclining Seats", "Ample Luggage Space"],
    },
    {
      name: "17 Seater Traveler",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minivan-1-HxOkQpCdhZXcqVuHaEkUJZQqNN4JP8.png",
      category: "minivan",
      price: "₹22/km",
      description: "Spacious minivan for larger groups",
      features: ["AC", "17 Passengers", "Comfortable Seating", "Large Storage"],
    },
    {
      name: "27 Seater Coach",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg",
      category: "coach",
      price: "₹35/km",
      description: "Medium coach for group travel",
      features: ["AC", "27 Passengers", "Reclining Seats", "Entertainment System"],
    },
    {
      name: "Delhi-Agra Bus",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bus1.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg",
      category: "bus",
      price: "₹800",
      description: "Daily bus service between Delhi and Agra",
      features: ["AC", "Comfortable Seating", "Daily Departures", "Tourist Friendly"],
    },
    {
      name: "Luxury Bus Interior",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg",
      category: "coach",
      price: "₹45/km",
      description: "Premium coach with luxury interiors",
      features: ["AC", "Plush Seating", "Entertainment System", "Onboard Refreshments"],
    },
  ]

  // Filter vehicles based on active filter
  const filteredVehicles =
    activeFilter === "all" ? vehicles : vehicles.filter((vehicle) => vehicle.category === activeFilter)

  // Special offers data
  const offers = [
    {
      title: "Delhi to Agra Car Hire",
      description: "Book online and get 15% off on your journey",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car%20hire1-01.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg",
      discount: "15% OFF",
      link: "/car-hire",
    },
    {
      title: "Delhi to Agra Bus Tickets",
      description: "25% off on online bus ticket bookings",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bus1.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg",
      discount: "25% OFF",
      link: "/bus-tickets",
    },
    {
      title: "Bus Ticket Cashback",
      description: "Book your bus tickets and get 50% cashback",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/offers-4.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg",
      discount: "50% BACK",
      link: "/bus-tickets",
    },
    {
      title: "Summer Bus Offer",
      description: "Enjoy 60% cashback on beach destination buses",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/offers-2.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg",
      discount: "60% BACK",
      link: "/bus-tickets",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} className="animate-pulse" />
              <span>TOLL FREE: 1800 1027 408</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>sales@anttravels.com</span>
            </div>
          </div>
          <div className="flex gap-4 mt-2 md:mt-0 text-sm">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>Coach Hire: +91-9811992203</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>Car Hire: +91-9811448977</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md py-2" : "py-4"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12434-BLOGO-BOlrOC5v2AlPEyuUrPCEwWWmhU1zHx.png"
                alt="ANT Travels Logo"
                width={180}
                height={60}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden flex items-center" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex flex-wrap justify-center gap-2 md:gap-6">
              {[
                "HOME",
                "About Us",
                "BUS TICKET",
                "COACH HIRE",
                "CAR HIRE",
                "MINIVAN HIRE",
                "GALLERY",
                "CONTACT US",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 px-2 py-1 group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-2 p-4 bg-white shadow-inner">
            {["HOME", "About Us", "BUS TICKET", "COACH HIRE", "CAR HIRE", "MINIVAN HIRE", "GALLERY", "CONTACT US"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 z-10">
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full font-medium animate-pulse">
                Latest Offers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Explore India with <span className="text-blue-600">ANT Travels</span>
              </h1>
              <p className="text-lg text-gray-700">
                Customize Tour Packages, Lowest Rates, Guaranteed Services. Experience the beauty of India with our
                premium transportation services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/explore"
                  className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-blue-600 rounded-lg overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700"
                >
                  <span className="absolute inset-0 w-0 bg-blue-800 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center gap-2">
                    Explore Now
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-blue-600 bg-white border-2 border-blue-600 rounded-lg overflow-hidden transition-all duration-300 ease-out hover:text-white"
                >
                  <span className="absolute inset-0 w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative">Contact Us</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-blue-200">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deal5.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg"
                  alt="Taj Mahal"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold">Taj Mahal, Agra</h3>
                    <p className="text-sm opacity-90">One of the seven wonders of the world</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl transform rotate-12 shadow-lg animate-bounce-slow">
                25% OFF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Special Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our exclusive deals and packages for your next adventure across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.slice(0, 2).map((offer, index) => (
              <OfferCard
                key={index}
                title={offer.title}
                description={offer.description}
                image={offer.image}
                discount={offer.discount}
                link={offer.link}
              />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.slice(2).map((offer, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <Image
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.title}
                  width={400}
                  height={200}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold mb-1">{offer.title}</h3>
                  <p className="text-white/90 text-sm mb-3">{offer.description}</p>
                  <Link
                    href={offer.link}
                    className="inline-flex items-center gap-1 bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white w-fit"
                  >
                    <span>BOOK NOW</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {offer.discount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Transport Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Transport Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Explore India with our premium fleet of vehicles. Customize Tour Packages, Lowest Rates, Guaranteed
              Services.
            </p>
          </div>

          {/* Filter buttons */}
          <ServiceFilter onFilterChange={setActiveFilter} className="mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVehicles.map((vehicle, index) => (
              <VehicleCard
                key={index}
                name={vehicle.name}
                image={vehicle.image}
                description={vehicle.description}
                price={vehicle.price}
                category={vehicle.category}
                features={vehicle.features}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-700"
            >
              <span>View All Vehicles</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the most popular destinations in India with our premium travel services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jaipur",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/package1.jpg-y4JdhKFDyZo6hmYO7fUkcQXBhIxMHn.jpeg",
                desc: "Plan Your Tour to Jaipur With Us. Experience the Pink City with its magnificent palaces and vibrant culture.",
              },
              {
                name: "Delhi",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deal2.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg",
                desc: "Plan Your Tour to Delhi With Us. Explore the capital city with its blend of ancient and modern attractions.",
              },
              {
                name: "Agra",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deal5.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg",
                desc: "Plan Your Tour to Agra With Us. Visit the iconic Taj Mahal and other Mughal architectural wonders.",
              },
            ].map((destination, index) => (
              <ImageCard
                key={index}
                name={destination.name}
                image={destination.image}
                description={destination.desc}
                link={`/destinations/${destination.name.toLowerCase()}`}
                className="h-80"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full font-medium mb-4">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tour & Travels Agency in Delhi, India
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  ANT Travels – Travel Agents in India. Unraveling India travel with the penchant for Extreme Care is
                  what ANT Travels - One of the leading travel agents in India, is famous for!
                </p>
                <p>
                  India, a unique diverse country, is a plethora, of color, heritage, religion, landscape, language &
                  spiritualism. All this diversity is deeply rooted & is boldly connected by the sheer willingness of
                  its people to remain one, which is truly inexplicable.
                </p>
                <p>
                  To integrate all your travel, we bring to you, the travel agent extraordinaire, in Delhi, India. We at
                  ANT Travels - A travel agency in India, make each & every travel a memorable experience.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-700"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/package1.jpg-y4JdhKFDyZo6hmYO7fUkcQXBhIxMHn.jpeg"
                  alt="Hawa Mahal"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold">Hawa Mahal, Jaipur</h3>
                    <p className="text-sm opacity-90">The Palace of Winds</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="text-blue-600 font-bold text-center">
                  <div className="text-2xl">20+</div>
                  <div className="text-xs">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Best Rated Travel Reviews</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our customers have to say about their experience with ANT Travels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-blue-100 hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "Our trip to Rajasthan was amazing thanks to ANT Travels. The car was comfortable, the driver was
                  professional, and the entire journey was well-organized. Would definitely recommend their services!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">John Doe</h4>
                    <p className="text-sm text-gray-500">Delhi, India</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              <span>View All Reviews</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Search Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Search</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find the perfect transportation option for your journey</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 py-6 text-lg hover:bg-blue-50 hover:text-blue-700 border-2"
              >
                <Search size={20} />
                <span>Bus Tickets</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 py-6 text-lg hover:bg-blue-50 hover:text-blue-700 border-2"
              >
                <Search size={20} />
                <span>Car Rental</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 py-6 text-lg hover:bg-blue-50 hover:text-blue-700 border-2"
              >
                <Search size={20} />
                <span>Tour Packages</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <Input placeholder="Enter departure city" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <Input placeholder="Enter destination city" className="w-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Departure Date</label>
                <Input type="date" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Return Date (Optional)</label>
                <Input type="date" className="w-full" />
              </div>
            </div>

            <Button className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700">Search</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore India with Us?</h2>
              <p className="text-white/90 text-lg mb-8">
                Book your next adventure with ANT Travels and experience the best of India with our premium
                transportation services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-blue-600 bg-white rounded-lg overflow-hidden transition-all duration-300 ease-out hover:text-white"
                >
                  <span className="absolute inset-0 w-0 bg-blue-900 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center gap-2">
                    Contact Us
                    <Phone size={18} />
                  </span>
                </Link>
                <Link
                  href="/book-now"
                  className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-transparent border-2 border-white rounded-lg overflow-hidden transition-all duration-300 ease-out hover:bg-white hover:text-blue-600"
                >
                  <span className="relative flex items-center gap-2">
                    Book Now
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-transform duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Clock size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-white/80">Our customer support team is available round the clock to assist you</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-transform duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <CreditCard size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
                <p className="text-white/80">Multiple secure payment options for your convenience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-transform duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pan India Service</h3>
                <p className="text-white/80">We offer our services across all major destinations in India</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-transform duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Star size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Best Prices</h3>
                <p className="text-white/80">Competitive pricing with no compromise on quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoqqqq-Q3aLM9W90D4P02zsEgwa3BOWXDmwxT.png"
                alt="ANT Travels Logo"
                width={180}
                height={60}
                className="mb-6"
              />
              <p className="text-gray-400 mb-6">
                ANT Travels is one of the leading tour operators in Delhi, India. With more than 20 years of experience
                in the travel industry, we specialize in Indian holidays and outbound travel.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-white transition-colors duration-300 hover:bg-blue-600"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-white transition-colors duration-300 hover:bg-blue-600"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-white transition-colors duration-300 hover:bg-blue-600"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-white transition-colors duration-300 hover:bg-blue-600"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600"></span>
              </h3>
              <ul className="space-y-3">
                {["Home", "About Us", "Services", "Bus Tickets", "Car Hire", "Coach Hire", "Contact Us"].map(
                  (item, index) => (
                    <li key={index}>
                      <Link
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <ChevronRight
                          size={16}
                          className="text-blue-500 transition-transform duration-300 group-hover:translate-x-1"
                        />
                        <span>{item}</span>
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                Our Services
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  "Car Rental",
                  "Bus Tickets",
                  "Coach Hire",
                  "Minivan Hire",
                  "Tour Packages",
                  "Corporate Travel",
                  "Airport Transfer",
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ChevronRight
                        size={16}
                        className="text-blue-500 transition-transform duration-300 group-hover:translate-x-1"
                      />
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 relative">
                Contact Information
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">
                    B-128 Sector-69 Transport Nagar, Noida, Uttar Pradesh 201307 - India
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone size={20} className="text-blue-500 flex-shrink-0" />
                  <span className="text-gray-400">TOLL FREE: 1800 1027 408</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={20} className="text-blue-500 flex-shrink-0" />
                  <span className="text-gray-400">sales@anttravels.com</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-900/30 rounded-lg">
                <h4 className="font-bold mb-2">Business Hours</h4>
                <p className="text-gray-400 text-sm">
                  Monday - Saturday: 9:00 AM - 8:00 PM
                  <br />
                  Sunday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} ANT Travels. All Rights Reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 text-sm hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className="text-gray-500 text-sm hover:text-white transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
                <Link href="/sitemap" className="text-gray-500 text-sm hover:text-white transition-colors duration-300">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
