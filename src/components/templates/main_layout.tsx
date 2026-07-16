
import { Outlet } from '@tanstack/react-router'

import Header from '../organisms/header'

export default function Layout() {
  return (
    
      <main className="w-full h-full">
        <Header />
        <Outlet />
      </main>
    
  )
}
