import type { Project } from '../types/content'
import { projects } from '../data/projects'

/**
 * Content service layer.
 * Swap these implementations to call your future backend/CMS without changing UI components.
 */
export async function fetchProjects(): Promise<Project[]> {
  return projects
}

export async function fetchProjectBySlug(slug: string): Promise<Project | undefined> {
  return projects.find((p) => p.id === slug)
}
