import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppLoader from './components/ui/AppLoader'
import ScrollToTopOnRouteChange from './components/ui/ScrollToTopOnRouteChange'
import HomePage from './pages/HomePage'
import AdminDashboardPlaceholder from './pages/AdminDashboardPlaceholder'

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminDashboardPlaceholder />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLoader>
    </HelmetProvider>
  )
}
