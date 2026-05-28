/** Slideshow slide — matches the Firestore "slides" collection shape from the admin panel */
export type Slide = {
  id: string
  title: string
  description: string
  imageUrl: string
  createdAt?: string
  updatedAt?: string
}
