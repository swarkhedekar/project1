import { Link } from 'react-router-dom'
import LuxuryButton from '../components/ui/LuxuryButton'

export default function AdminDashboardPlaceholder() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#081229] px-6 text-white">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d97706]">
          Future Integration
        </p>
        <h1 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl">
          Admin Dashboard Placeholder
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-white/70">
          This route is reserved for future CMS/admin integration. Content is currently
          managed through the service layer and can be swapped to API calls without UI
          changes.
        </p>
        <div className="mt-8">
          <LuxuryButton href="/">Back to Website</LuxuryButton>
        </div>
        <p className="mt-6 text-xs text-white/45">
          Route: <Link to="/admin" className="text-[#d97706]">/admin</Link>
        </p>
      </div>
    </div>
  )
}
