import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/Layout'
import ScrollToTop from '@/components/ScrollToTop'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import ProjectsPage from '@/pages/ProjectsPage'
import ProjectDetailPage from '@/pages/ProjectDetailPage'
import ContactPage from '@/pages/ContactPage'
import TemplatePage from '@/pages/TemplatePage'
import FAQPage from '@/pages/FAQPage'

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
        <Route path="/contacts" element={<Navigate to="/contact-us" replace />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

