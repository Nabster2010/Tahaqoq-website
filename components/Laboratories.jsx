import Divider from "./Divider";
import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import Image from "next/image";

const Laboratories = () => {
  const { locale, dir, lang, translation: data } = useTranslation();

  return (
    <section
      className="relative px-8 pb-16"
      data-aos="fade-up"
      style={{
        background: `url("/assets/img/lab-bg.jpg") no-repeat  fixed`,
      }}
    >
      <div className="absolute inset-0 bg-gray-100/90 "></div>
      <div className="relative">
        <header className=" text-center">
          <Divider title={data.laboratories.title} animation="fade-up" />
        </header>
        <Tabs color="yellow" data={data} />
      </div>
    </section>
  );
};

export default Laboratories;

const Tabs = ({ color, data }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap" data-aos="fade-up">
        <div className="w-full">
          <ul
            className="mb-0 flex list-none flex-row flex-wrap pt-3 pb-4"
            role="tablist"
          >
            {data.laboratories.tabs.map((tab) => (
              <li key={tab.id} className="my-1 mx-2 flex-auto text-center ">
                <a
                  className={
                    "block rounded px-3 py-3 text-xs font-bold uppercase leading-normal shadow-lg " +
                    (openTab === tab.id
                      ? "bg-primary text-black"
                      : "bg-white text-black")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(tab.id);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="tab-content tab-space">
                <LaboratoryCard
                  tab={data.laboratories.tabs.find((tab) => tab.id === openTab)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const LaboratoryCard = ({ tab }) => (
  <>
    <div className="flex flex-col items-center justify-center md:flex-row  ">
      <div className="md:w4/12 h-full w-full ">
        <Image
          src={tab.src}
          layout="responsive"
          width={0}
          height={0}
          alt=""
          className=" rounded-md object-contain"
        />
      </div>
      <div className="md:w8/12 px-8 py-4 ">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-stretch">
          <div>
            <div className="bg-primary inline-flex h-16 w-16 items-center justify-center rounded-full p-3  text-center text-white shadow-lg ">
              <i className={`${tab.icon} text-xl`}></i>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold ">{tab.title}</h3>

            <div className="">
              <p className=" mt-4 text-lg leading-relaxed text-gray-600">
                {tab.desc}
              </p>
              <ul className="mt-6 list-none">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="bg-primary mr-3 inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase text-white">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Lorem, ipsum dolor.</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="bg-primary mr-3 inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase text-white">
                        <i className="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Lorem ipsum dolor sit.</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="bg-primary mr-3 inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase text-white">
                        <i className="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Lorem ipsum dolor sit.</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
