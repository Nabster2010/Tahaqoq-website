import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Divider from "./Divider";
import { useTranslation } from "../hooks/useTranslation";
import Image from "next/image";
SwiperCore.use([Pagination]);

const Clients = () => {
  const { locale, dir, lang, translation: data } = useTranslation();

  return (
    <section id="clients" className="mx-8 pb-16">
      <div data-aos="zoom-in">
        <header className=" text-center">
          <Divider title={data.parteners.title} animation="zoom-in" />
        </header>
        <Swiper
          className="flex flex-col-reverse items-center justify-center gap-4 "
          centeredSlides={true}
          dir="rtl"
          spaceBetween={50}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          slidesPerView="auto"
          loop={true}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {data.parteners.cards.map((partener) => (
            <SwiperSlide key={partener.id} className="swiper-slide">
              <Image
                src={partener.src}
                layout="responsive"
                width={0}
                height={0}
                className="mx-4 h-16 object-contain"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
