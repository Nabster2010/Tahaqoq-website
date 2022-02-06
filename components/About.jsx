import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";
import Divider from "./Divider";

const About = () => {
  const { locale, dir, lang, translation: data } = useTranslation();

  return (
    <section
      id="about"
      className="relative px-8"
      style={{
        background: `url(${data.about.background}) no-repeat top center fixed`,
      }}
    >
      <div className="absolute inset-0 bg-gray-100/90 "></div>
      <div className="relative  mx-auto ">
        <header className=" text-center text-black" data-aos="zoom-in">
          <Divider title={data.about.title} animation="zoom-in" />
          <p>{data.about.desc}</p>
        </header>
        <div className="mt-8 grid grid-cols-1 justify-items-center gap-3 pb-16 md:grid-cols-2 lg:grid-cols-3 ">
          {data.about.cards.map((item, index) => (
            <div
              data-aos="fade-up"
              key={item.id}
              className=" mb-6  rounded-md bg-white text-center text-black shadow-md  "
            >
              <div className="relative w-full ">
                <Image
                  src={item.src}
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  alt=""
                  className=" rounded-t-md "
                />
                <div className="group bg-primary absolute -bottom-8 left-1/2 flex h-16 w-16 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-white text-center hover:bg-white">
                  <i
                    className={`${item.icon} group-hover:text-primary text-white`}
                  ></i>
                </div>
              </div>
              <h2 className="pb-4 pt-10 text-2xl  font-bold text-black">
                <a href="#">{item.title}</a>
              </h2>
              <p className=" p-4 text-black">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
