import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/Layout'
import ScrollToTop from '@/components/ScrollToTop'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import ServiceDetailPage from '@/pages/ServiceDetailPage'
import ProjectsPage from '@/pages/ProjectsPage'
import ProjectDetailPage from '@/pages/ProjectDetailPage'
import ContactPage from '@/pages/ContactPage'
import ThankYouPage from '@/pages/ThankYouPage'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage'

export default function App() {
  useSmoothScroll()
  
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
        <Route path="/contacts" element={<Navigate to="/contact-us" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

