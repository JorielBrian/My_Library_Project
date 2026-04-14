import { ReactNode } from 'react'
import Header from '@/components/Header'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className=''>
        <Header />
        <div className="layout">
            {children}
        </div>
    </main>
  )
}

export default Layout