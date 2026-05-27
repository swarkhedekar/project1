import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    id: 'maha-mumbai',
    title: 'Maha Mumbai',
    location: 'Navi Mumbai',
    status: 'Completed',
    description:
      'A modern urban residential township with premium connectivity and commercial opportunities.',
    imageUrl:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2000&q=80',
    tagline: 'Urban sophistication redefined.',
    about:
      'Maha Mumbai is a modern urban residential township strategically located near upcoming infrastructure developments. It offers smart living spaces with premium connectivity and commercial opportunities.',
    amenities: [
      'Smart Security',
      'Rooftop Lounge',
      'Business Center',
      'Gymnasium',
      'EV Charging',
      'Sky Garden',
    ],
    hasDetailPage: true,
  },
  {
    id: 'green-valley-heights',
    title: 'Green Valley Heights',
    location: 'Lonavala',
    status: 'Ongoing',
    description:
      'Premium villa plots overlooking the lush Lonavala valleys with panoramic mountain views.',
    imageUrl:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80',
    tagline: 'Luxury living amidst the clouds.',
    about:
      'Green Valley Heights is a premium hillside villa plotting project surrounded by the Sahyadri mountains. The development offers panoramic valley views, cool climate, landscaped roads, and luxurious amenities designed for nature lovers and weekend homeowners.',
    amenities: [
      'Valley View Decks',
      'Private Clubhouse',
      'Trekking Trails',
      'Gated Community',
      'Swimming Pool',
      'Meditation Garden',
    ],
    hasDetailPage: true,
  },
  {
    id: 'the-farm-dale',
    title: 'The Farm Dale',
    location: 'Karjat',
    status: 'Ongoing',
    description:
      'Luxury farmhouse community combining modern architecture with open green landscapes.',
    imageUrl:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80',
    tagline: 'Reconnect with nature in luxury.',
    about:
      'The Farm Dale is a luxury farmhouse community designed for peaceful countryside living. The project combines modern architecture with open green landscapes and private farming spaces.',
    amenities: [
      'Organic Farming Area',
      'Rainwater Harvesting',
      'Horse Riding Zone',
      'Weekend Villas',
      'Kids Play Area',
      'Solar Street Lighting',
    ],
    hasDetailPage: true,
  },
  {
    id: 'dapoli-712',
    title: 'Dapoli 712',
    location: 'Dapoli',
    status: 'Upcoming',
    description:
      'A serene coastal investment destination offering sea-facing villa plots near Konkan beaches.',
    imageUrl:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80',
    tagline: 'Experience the serenity of the coastline.',
    about:
      'Dapoli 712 is a coastal investment destination offering sea-facing villa plots near Konkan beaches. The project focuses on luxury vacation living with tropical landscape planning and premium infrastructure.',
    amenities: [
      'Sea View Points',
      'Beach Access',
      'Palm Landscapes',
      'Infinity Pool',
      'Resort Style Entrance',
      'Open Air Café',
    ],
    hasDetailPage: true,
  },
  {
    id: 'athiya-business-park',
    title: 'Athiya Business Park',
    location: 'Kharghar',
    status: 'Planning',
    description:
      'State-of-the-art commercial spaces designed for modern enterprises.',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'riverside-residencies',
    title: 'Riverside Residencies',
    location: 'Panvel',
    status: 'Completed',
    description:
      'Exclusive residential towers with uninterrupted river views.',
    imageUrl:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=80',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.hasDetailPage)
}
