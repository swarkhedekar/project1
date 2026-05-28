import { collection, getDocs, onSnapshot, type Unsubscribe } from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../firebase'
import type { Slide } from '../types/slide'

/**
 * Premium fallback slides shown when Firestore is empty, unavailable,
 * or Firebase is not configured yet.
 */
export const FALLBACK_SLIDES: Slide[] = [
  {
    // Default slide shown on first page load
    id: 'fallback-1',
    title: 'Luxury Residences Await',
    description:
      'Experience world-class amenities, prime locations, and architecture crafted for discerning lifestyles.',
    imageUrl:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'fallback-2',
    title: 'Redefining Premium Living',
    description:
      'Discover exceptional properties, unparalleled architecture, and investments that secure your future.',
    imageUrl:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'fallback-3',
    title: 'Invest in Your Future',
    description:
      'Premium developments with high ROI potential across India\'s most sought-after destinations.',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
  },
]

/** Normalize raw Firestore data into a valid Slide object */
function toSlide(id: string, data: Record<string, unknown>): Slide | null {
  const title = typeof data.title === 'string' ? data.title.trim() : ''
  const imageUrl = typeof data.imageUrl === 'string' ? data.imageUrl.trim() : ''
  const description =
    typeof data.description === 'string' ? data.description.trim() : ''

  if (!title || !imageUrl) return null

  return {
    id,
    title,
    description,
    imageUrl,
    createdAt: typeof data.createdAt === 'string' ? data.createdAt : undefined,
    updatedAt: typeof data.updatedAt === 'string' ? data.updatedAt : undefined,
  }
}

/**
 * Fetch slideshow slides from Firestore collection "slides".
 * Falls back to demo slides when Firebase is not configured or the collection is empty.
 * Deduplicates slides by ID to ensure no duplicates are shown.
 */
export async function fetchSlides(): Promise<Slide[]> {
  if (!isFirebaseConfigured || !db) {
    return FALLBACK_SLIDES
  }

  try {
    const snapshot = await getDocs(collection(db, 'slides'))
    const slidesMap = new Map<string, Slide>()

    snapshot.docs.forEach((docSnap) => {
      const slide = toSlide(docSnap.id, docSnap.data() as Record<string, unknown>)
      if (slide) {
        slidesMap.set(slide.id, slide)
      }
    })

    const slides = Array.from(slidesMap.values())
    return slides.length > 0 ? slides : FALLBACK_SLIDES
  } catch (error) {
    console.error('Failed to fetch slides from Firestore:', error)
    return FALLBACK_SLIDES
  }
}

/**
 * Subscribe to Firestore "slides" in real-time.
 * This makes slides added from the admin panel appear automatically on the website.
 */
export function subscribeToSlides(
  onData: (slides: Slide[]) => void,
  onError?: (error: unknown) => void,
): Unsubscribe {
  if (!isFirebaseConfigured || !db) {
    onData(FALLBACK_SLIDES)
    return () => {}
  }

  const unsubscribe = onSnapshot(
    collection(db, 'slides'),
    (snapshot) => {
      const slidesMap = new Map<string, Slide>()

      snapshot.docs.forEach((docSnap) => {
        const slide = toSlide(docSnap.id, docSnap.data() as Record<string, unknown>)
        if (slide) {
          slidesMap.set(slide.id, slide)
        }
      })

      const slides = Array.from(slidesMap.values())
      onData(slides.length > 0 ? slides : FALLBACK_SLIDES)
    },
    (error) => {
      console.error('Firestore slide subscription failed:', error)
      onError?.(error)
      onData(FALLBACK_SLIDES)
    },
  )

  return unsubscribe
}
