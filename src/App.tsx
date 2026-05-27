import { Helmet, HelmetProvider } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AppLoader from './components/ui/AppLoader'
import ScrollToTopOnRouteChange from './components/ui/ScrollToTopOnRouteChange'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import AdminDashboardPlaceholder from './pages/AdminDashboardPlaceholder'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/admin" element={<AdminDashboardPlaceholder />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Athiya Developers | Redefining Premium Living</title>
        <meta
          name="description"
          content="Discover exceptional properties and unparalleled architecture. Explore luxury residential, commercial, and investment-ready projects by Athiya Developers."
        />
        <meta property="og:title" content="Athiya Developers | Redefining Premium Living" />
        <meta
          property="og:description"
          content="Premium real estate projects across India with a cinematic, luxury developer experience."
        />
      </Helmet>

      <AppLoader>
        <ScrollToTopOnRouteChange />
        <AnimatedRoutes />
      </AppLoader>
    </HelmetProvider>
  )
}
