import React from "react";
import { useTranslation } from "../hooks/useTranslation";

export default function Footer() {
  const { locale, dir, lang, translation: data } = useTranslation();

  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="text-3xl font-semibold">{data.footer.header}</h4>
            <h5 className="mt-0 mb-2 text-lg text-gray-700">
              {data.footer.subheader}{" "}
            </h5>
            <div className="mt-6">
              <button
                className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-blue-400 shadow-lg outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-twitter flex"></i>
              </button>
              <button
                className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-blue-600 shadow-lg outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-facebook-square flex"></i>
              </button>
              <button
                className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-pink-400 shadow-lg outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-dribbble flex"></i>
              </button>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="ml-auto w-full px-4 lg:w-4/12">
                <span className="mb-2 block pt-3 text-sm font-semibold uppercase text-gray-600">
                  {data.footer.usefullinks}
                </span>
                <ul className="list-unstyled">
                  {data.nav.map((item) => (
                    <li key={item.id}>
                      <a
                        className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                        href={item.link}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-gray-600">
              {data.footer.copyRight} {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
