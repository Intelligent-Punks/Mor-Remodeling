import { PropsWithChildren } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

