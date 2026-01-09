export interface FootballField {
  id: string
  name: string
  description: string
  location: string
  pricePerHour: number
  size: string
  surface: string
}

export const mockFields: FootballField[] = [
  {
    id: "1",
    name: "Stadium 1(VIP)",
    description:
      "Premium football field located in the heart of the city. Features professional-grade turf and excellent lighting for evening games.",
    location: "Khlong 6, Pathum Thani",
    pricePerHour: 50,
    size: "7vx7",
    surface: "Artificial Turf",
  },
  {
    id: "2",
    name: "Stadium 2(VIP)",
    description:
      "Beautiful field overlooking the river with natural grass surface. Perfect for competitive matches and training sessions.",
    location: "Khlong 6, Pathum Thani",
    pricePerHour: 45,
    size: "7vx7",
    surface: "Artificial Turf",
  },
  {
    id: "3",
    name: "Stadium 3",
    description:
      "Well-maintained community field ideal for casual games and local tournaments. Great facilities and parking available.",
    location: "Khlong 6, Pathum Thani",
    pricePerHour: 35,
    size: "7v7",
    surface: "Artificial Turf",
  },
  {
    id: "4",
    name: "Stadium 4",
    description:
      "State-of-the-art facility with multiple fields, changing rooms, and professional equipment. Used by local professional teams.",
    location: "Khlong 6, Pathum Thani",
    pricePerHour: 75,
    size: "11v11 (Full Size)",
    surface: "Hybrid Grass",
  },
  {
    id: "5",
    name: "Fitness U Sport",
    description:
      "Family-friendly field in a scenic park setting. Perfect for weekend games and recreational play.",
    location: "Khlong 6, Pathum Thani",
    pricePerHour: 30,
    size: "-",
    surface: "Gym",
  },
]

