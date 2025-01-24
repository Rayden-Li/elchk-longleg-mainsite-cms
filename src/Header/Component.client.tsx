'use client'
import type { Header } from '@/payload-types'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */

  return (
    <header className="relative z-20 w-full bg-[#E6F1E2]">
      <div className="w-full max-w-[1440px] mx-auto p-6">
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
