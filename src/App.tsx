import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import ProjectsPage from '@/pages/ProjectsPage'
import ContactsPage from '@/pages/ContactsPage'
import TemplatePage from '@/pages/TemplatePage'
import FAQPage from '@/pages/FAQPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact-us" element={<ContactsPage />} />
        <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
        <Route path="/contacts" element={<Navigate to="/contact-us" replace />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

