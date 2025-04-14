"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ServiceFilterProps {
  onFilterChange: (filter: string) => void
  className?: string
}

export default function ServiceFilter({ onFilterChange, className = "" }: ServiceFilterProps) {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Services" },
    { id: "car", label: "Car Hire" },
    { id: "bus", label: "Bus Tickets" },
    { id: "coach", label: "Coach Hire" },
    { id: "minivan", label: "Minivan Hire" },
  ]

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId)
    onFilterChange(filterId)
  }

  return (
    <div className={`flex flex-wrap gap-2 justify-center ${className}`}>
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
            activeFilter === filter.id ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:text-blue-600"
          }`}
          onClick={() => handleFilterClick(filter.id)}
        >
          {activeFilter === filter.id && (
            <motion.span
              layoutId="filterIndicator"
              className="absolute inset-0 bg-blue-600 rounded-full z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
          <span className="relative z-10">{filter.label}</span>
        </Button>
      ))}
    </div>
  )
}
