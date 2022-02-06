import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper";
import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";
const Hero = () => {
  const { locale, dir, lang, translation: data } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className=" h-screen w-full " id="hero">
      <Swiper
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        id="hero-swiper"
        dir="rtl"
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        effect={"fade"}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-full w-full"
      >
        {data.hero.map((slide, index) => {
          const isActive = activeSlide === index;
          return (
            <SwiperSlide
              key={slide.id}
              className="relative h-full w-full bg-black "
            >
              <Image
                src={slide.src}
                alt=""
                className="absolute inset-0  object-cover  opacity-30"
                layout="fill"
              />
              <div className="absolute flex h-full w-full flex-col items-center justify-center px-4">
                <div className=" w-10/12 text-center lg:w-8/12">
                  <h1
                    className={`mt-8 scale-0 transform text-3xl font-semibold text-white opacity-0 transition-transform   duration-1000 ease-linear  md:text-4xl ${
                      isActive ? " scale-100  opacity-100" : ""
                    } `}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={` mt-10 scale-0  transform text-sm text-gray-300 opacity-0 transition-transform duration-1000 ease-linear  md:text-lg ${
                      isActive ? " scale-100  opacity-100 " : ""
                    }`}
                  >
                    {slide.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Hero;
