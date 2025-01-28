'use client'
import { Media, Page } from '@/payload-types'
import React, { useEffect, useState } from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'

type BannerSliderProps = {
  banners: Media[]
  isMobile?: boolean
  bannerData: Page['desktopBanner']
}

const BannerSlider = ({ banners, bannerData }: BannerSliderProps) => {
  const [slides, setSlides] = useState<BannerSliderProps['banners']>([])
  const [bannerStateData, setBannerStateData] = useState<BannerSliderProps['bannerData']>(null)

  useEffect(() => {
    if (banners && banners?.length > 0) {
      setSlides(banners as BannerSliderProps['banners'])
      setBannerStateData(bannerData)
    }
  }, [bannerData, banners])

  return (
    <div className="h-[500px] w-full max-h-[500px] max-w-[1440px] mx-auto relative">
      <Slide autoplay infinite duration={5000} canSwipe pauseOnHover arrows>
        {Array.isArray(slides) &&
          slides?.map((banner) => {
            const { bannerHeading, bannerDesc } = bannerStateData?.find(
              (state) => state?.homeDesktopBannerSlide === banner.id,
            ) as BannerSliderProps['bannerData']
            return (
              <div
                className="each-slide-effect h-[500px] w-full  max-w-[1440px] mx-auto relative"
                key={banner?.id}
              >
                <div
                  style={{
                    backgroundImage: `url(${banner?.url})`,
                    backgroundRepeat: 'no-repeat',
                    // backgroundSize: 'contain',
                    height: '100%',
                    width: '100%',
                  }}
                  className="h-full relative flex align-middle"
                >
                  <div className="flex flex-col gap-5 justify-center max-w-[745px] mx-auto align-middle p-10">
                    <h1 className="text-white text-2xl">{bannerHeading}</h1>
                    <p className="text-white">{bannerDesc}</p>
                  </div>
                </div>
              </div>
            )
          })}
      </Slide>
    </div>
  )
}

export default BannerSlider
