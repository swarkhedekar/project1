export type ProjectStatus = 'Completed' | 'Ongoing' | 'Planning' | 'Pre-Launch'

export type Project = {
  id: string
  title: string
  location: string
  status: ProjectStatus
  description: string
  imageUrl: string
  featuresAndAmenities: string[]
}

