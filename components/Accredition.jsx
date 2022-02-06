import { useState } from "react";
import { EffectFlip, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "../hooks/useTranslation";
import Divider from "./Divider";
import Lightbox from "react-image-lightbox";
import Image from "next/image";

const Accreditions = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [openTab, setOpenTab] = useState(1);
  const { locale, dir, lang, translation: data } = useTranslation();
  const images = data.accreditations.cards.find(
    (card) => card.id === openTab
  ).images;
  return (
    <section id="accredition" className="bg-gray-100 ">
      <header className=" text-center text-black">
        <Divider title={data.accreditations.title} animation="fade-up" />
      </header>
      <div className="mx-8 pt-8 pb-16">
        <div
          className="flex items-center justify-center gap-2"
          data-aos="fade-up"
        >
          {data.accreditations.cards.map((card) => (
            <button
              key={card.id}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(card.id);
              }}
              className={
                " rounded-md bg-white py-3 px-5   text-sm text-black transition " +
                (openTab === card.id
                  ? "bg-primary text-white"
                  : "bg-white text-black")
              }
            >
              {card.title}
            </button>
          ))}
        </div>
        <div className="content my-4 text-center text-black" data-aos="fade-up">
          <div>
            <h1 className="pb-8 text-xl font-bold">
              {data.accreditations.cards[openTab - 1].title}
            </h1>
            <p className="">{data.accreditations.cards[openTab - 1].desc}</p>
            <Swiper
              className="py-8"
              dir="rtl"
              modules={[Pagination, EffectFlip]}
              pagination={{
                clickable: true,
                type: "bullets",
              }}
              slidesPerView="auto"
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
            >
              {images.map((src, i) => (
                <SwiperSlide key={i} className="relative ">
                  <div
                    onClick={() => setIsOpen(true)}
                    className="absolute inset-0  z-10  bg-black/50 opacity-0 transition hover:opacity-70 "
                  >
                    <div className=" flex h-full w-full items-center justify-center text-white">
                      <i className="fas fa-eye fa-2x cursor-pointer "></i>
                    </div>
                  </div>

                  <Image
                    src={src}
                    layout="responsive"
                    width={400}
                    height={300}
                    alt=""
                    className=" object-cover group-hover:visible"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </section>
  );
};

export default Accreditions;
