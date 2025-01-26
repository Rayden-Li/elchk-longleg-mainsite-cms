import { getPayload } from 'payload'
import React from 'react'
import config from '@payload-config'
import { Media, Page } from '@/payload-types'
import BannerSlider from '@/components/frontend/BannerSlider'

const Homepage = async () => {
  const payload = await getPayload({ config })
  const getHomePage = await payload.db.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'homepage',
      },
    },
  })

  const pageContent = getHomePage?.docs?.[0] as Page

  const homeDesktopBanners = pageContent.desktopBanner as Page['desktopBanner']
  const desktopBannerIds = homeDesktopBanners?.map((banner) => banner?.homeDesktopBannerSlide)

  const desktopBanners = await payload.db.find({
    collection: 'media',
    where: {
      id: {
        in: desktopBannerIds,
      },
    },
  })

  const getDesktopBanners = desktopBanners?.docs as Media[]

  return (
    <div>
      <div className="bannerSection w-full">
        <BannerSlider banners={getDesktopBanners} bannerData={homeDesktopBanners} />
      </div>
      <div className="w-full bg-white">長腿叔叔有野講：</div>
    </div>
  )
}

export default Homepage
