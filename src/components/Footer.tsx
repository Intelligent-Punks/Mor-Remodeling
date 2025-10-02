import common from '@/content/common'
import contacts from '@/content/contacts'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200">
      <div className="h-16 px-4 flex items-center justify-between text-sm">
        <div className="font-medium">{common.siteName}</div>
        <div className="opacity-70 flex items-center gap-4">
          <a href={`tel:${contacts.phone}`} className="hover:underline">{contacts.phone}</a>
          <a href={`mailto:${contacts.email}`} className="hover:underline">{contacts.email}</a>
          <span>© {year} {common.siteName}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

