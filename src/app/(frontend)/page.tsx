import { getPayload } from 'payload'
import React from 'react'
import config from '@payload-config'
import { Media, Page } from '@/payload-types'
import HomeBannerSlider from '@/components/frontend/homepage/HomeBannerSlider'
import EncouragingSection from '@/components/frontend/homepage/EncouragingSection'

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
        <HomeBannerSlider banners={getDesktopBanners} bannerData={homeDesktopBanners} />
      </div>
      <div className="w-full">
        <EncouragingSection />
      </div>
    </div>
  )
}

export default Homepage
