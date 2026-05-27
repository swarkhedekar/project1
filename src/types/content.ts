export type ProjectStatus = 'Completed' | 'Ongoing' | 'Upcoming' | 'Planning' | 'Pre-Launch'

export type LocationAdvantage = {
  title: string
  description: string
}

export type Project = {
  id: string
  title: string
  location: string
  status: ProjectStatus
  description: string
  imageUrl: string
  featuresAndAmenities?: string[]
  tagline?: string
  about?: string
  amenities?: string[]
  gallery?: string[]
  locationAdvantages?: LocationAdvantage[]
  hasDetailPage?: boolean
}

export const PROJECT_FEATURES = [
  'Prime Location',
  'High ROI',
  'Modern Infrastructure',
  '24/7 Security',
  'Green Environment',
  'Smart Living',
  'Luxury Amenities',
  'Premium Connectivity',
] as const
