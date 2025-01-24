'use client'

import React from 'react'

import type { Header as HeaderType, Media } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const logo = data?.logo as Media
  const buttonItems = data?.buttonItems || []
  const pathname = usePathname()

  return (
    <div className="flex justify-between w-full">
      {logo.url && <Image src={logo.url} width={100} height={100} alt={logo?.alt || ''} />}
      <nav className="flex gap-5 items-center justify-center">
        {navItems.map(({ link }, i) => {
          return (
            <CMSLink
              key={i}
              {...link}
              appearance="link"
              className={`font-normal hover:no-underline hover:text-green-700`}
            />
          )
        })}
      </nav>
      <div className="flex gap-5">
        {buttonItems.map(({ link }, i) => {
          return (
            <CMSLink
              key={i}
              {...link}
              appearance="link"
              className={`font-normal p-2 bg-white border-green-700 border-2 rounded-[6px] hover:no-underline`}
            />
          )
        })}
      </div>
    </div>
  )
}
