"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface Venue {
  id: number
  name: string
  location: string
  rating: number
  reviews: number
  type: "football" | "fitness"
  image: string
}

const venues: Venue[] = [
  {
    id: 1,
    name: "Stadium 1 (VIP)",
    location: "Khlong 6, Pathum Thani",
    rating: 4.6,
    reviews: 1,
    type: "football",
    image: "/assets/images/stadium.jpg",
  },
  {
    id: 2,
    name: "Stadium 2 (VIP)",
    location: "Khlong 6, Pathum Thani",
    rating: 4.5,
    reviews: 12,
    type: "football",
    image: "/assets/images/stadium.jpg",
  },
  {
    id: 3,
    name: "Stadium 3",
    location: "Khlong 6, Pathum Thani",
    rating: 4.8,
    reviews: 20,
    type: "football",
    image: "/assets/images/stadium1.jpg",
  },
  {
    id: 4,
    name: "Stadium 4",
    location: "Khlong 6, Pathum Thani",
    rating: 4.3,
    reviews: 30,
    type: "football",
    image: "/assets/images/stadium1.jpg",
  },
  {
    id: 5,
    name: "Fitness U Sport",
    location: "Khlong 6, Pathum Thani",
    rating: 4.2,
    reviews: 8,
    type: "fitness",
    image: "/assets/images/fitness.png",
  },
]

function getFormattedDate() {
  const date = new Date()
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return `${date.getDate()} ${months[date.getMonth()]}`
}

export default function Home() {
  const [filterType, setFilterType] = useState<"all" | "football" | "fitness">("all")
  const currentDate = getFormattedDate()

  const filteredVenues =
    filterType === "all"
      ? venues
      : venues.filter((venue) => venue.type === filterType)

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-red-600">
              U-Sport
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Find sports, venues..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-600"
              />
              <svg
                className="absolute right-3 top-2.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 ml-auto">
            <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-red-600 font-medium">
              <span>🏠</span> Home
            </Link>
            <Link href="/fields" className="flex items-center gap-2 text-gray-700 hover:text-red-600 font-medium">
              <span>📍</span> Venues
            </Link>
            <Link href="/bookings" className="flex items-center gap-2 text-gray-700 hover:text-red-600 font-medium">
              <span>📅</span> My Bookings
            </Link>
            <Link href="/profile" className="flex items-center gap-2 text-gray-700 hover:text-red-600 font-medium">
              <span>👤</span> Profile
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Banner Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <img
              src="https://img.salehere.co.th/p/1200x0/2023/10/14/w52bktu2aajd.jpg"
              alt="U Sport Arena Promo"
              className="w-full max-w-4xl rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Available Venues Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Available Venues</h2>
            
            {/* Filter Badges */}
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">{currentDate}</span>
              <button
                onClick={() => setFilterType("all")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filterType === "all"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType("football")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filterType === "football"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Football
              </button>
              <button
                onClick={() => setFilterType("fitness")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filterType === "fitness"
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Fitness
              </button>
            </div>
          </div>
          
          {/* Venues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVenues.map((venue) => (
              <Link key={venue.id} href={`/fields/${venue.id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-48 object-cover"
                    />
                    <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{venue.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {venue.location}
                    </p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">{venue.rating} ({venue.reviews})</span>
                      <span className="text-sm text-gray-600 capitalize">{venue.type}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4 text-gray-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                      </svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
