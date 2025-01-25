'use client'
import { CMSLink } from '@/components/Link'
import { Footer, Media } from '@/payload-types'
import Image from 'next/image'

interface FooterClientProps {
  data: Footer
}

export const FooterClient: React.FC<FooterClientProps> = ({ data }) => {
  console.log(data)
  const { navItems, reservedText } = data ?? {}
  const icon = data?.icon as Media
  const watermark = data?.watermark as Media
  return (
    <footer className="w-full h-[108px] bg-white absolute bottom-0 mx-auto p-6">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-5 justify-start align-bottom">
            {navItems?.map(({ link }, i) => {
              return (
                <CMSLink
                  key={i}
                  {...link}
                  appearance="link"
                  className={`font-normal hover:no-underline hover:text-green-700`}
                />
              )
            })}
          </div>
          <div className="text-[14px] font-bold">{reservedText}</div>
        </div>
        {icon.url && (
          <Image
            src={icon?.url}
            width={150}
            height={150}
            alt={icon?.alt || ''}
            className="mr-[10rem]"
          />
        )}
      </div>
      {watermark?.url && (
        <div className="absolute top-0 right-0 overflow-hidden h-full">
          <Image src={watermark?.url} width={200} height={200} alt={watermark?.alt || ''} />
        </div>
      )}
    </footer>
  )
}
