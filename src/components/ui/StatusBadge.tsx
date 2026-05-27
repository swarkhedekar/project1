import type { ProjectStatus } from '../../types/content'

const statusStyles: Record<ProjectStatus, string> = {
  Completed: 'bg-emerald-500/15 text-emerald-700 border-emerald-500/30',
  Ongoing: 'bg-[#d97706]/15 text-[#d97706] border-[#d97706]/30',
  Upcoming: 'bg-purple-500/15 text-purple-700 border-purple-500/30',
  Planning: 'bg-blue-500/15 text-blue-700 border-blue-500/30',
  'Pre-Launch': 'bg-purple-500/15 text-purple-700 border-purple-500/30',
}

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm ${statusStyles[status]}`}
    >
      {status}
    </span>
  )
}
