import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import ArFlag from "../public/assets/img/nav/ar.svg";
import EnFlag from "../public/assets/img/nav/en.svg";

export default function Navbar() {
  const { translation: data } = useTranslation();
  const { locale, asPath } = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navTransparent, setNavTransparent] = useState(true);
  const scrollHandler = useCallback(() => {
    if (window.scrollY > 100) {
      setNavTransparent(false);
    } else {
      setNavTransparent(true);
    }
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", scrollHandler);
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <nav
      className={`${
        navTransparent ? "bg-opacity-0 " : "bg-opacity-90"
      } fixed top-0 left-0 right-0  z-50 flex flex-wrap items-center  justify-between bg-black px-2 py-3 transition duration-500  ease-in-out lg:py-0`}
    >
      <div className="mx-8 flex  w-full flex-wrap items-center justify-between">
        <div className="relative flex w-full justify-between text-white lg:static lg:block lg:w-auto lg:justify-start">
          <a
            className={
              "border-primary text-primary mr-4 inline-block  whitespace-nowrap border-b-4 px-4 py-1 text-xl font-extrabold uppercase leading-relaxed"
            }
            href={"/"}
          >
            Tahaqoq
          </a>
          <button
            className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={`fas ${
                navbarOpen ? "fa-times " : "fa-bars "
              }  text-white `}
            ></i>
          </button>
        </div>
        <div
          className={
            "flex-grow items-center bg-white lg:flex lg:flex-grow-0 lg:justify-between lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className=" flex list-none flex-col lg:flex-row ">
            {data?.nav.map((item) => (
              <li
                key={item.id}
                className={`group hover:border-primary lg:hover:border-primary lg:hover:text-primary mx-2 mt-2 flex items-center  rounded-md border-l-8  border-transparent transition ease-in-out hover:bg-gray-200  md:ml-2  lg:rounded-none    lg:border-b-4 lg:border-l-0 lg:hover:bg-transparent`}
              >
                <a
                  className={
                    " group lg:group-hover:text-primary  flex items-center px-3 py-4 text-xs font-bold uppercase text-black lg:py-2 lg:text-white"
                  }
                  href={item.link}
                >
                  {item.name}
                </a>
              </li>
            ))}
            {locale === "ar" ? (
              <Link href={asPath} locale="en-US" passHref>
                <li className="hover:border-primary mx-2 my-2 flex cursor-pointer items-center rounded-md border-l-8 border-transparent transition ease-in-out   hover:bg-gray-200   lg:hover:border-transparent lg:hover:bg-transparent">
                  <div className="flex border-gray-200 py-2 px-3 text-gray-700 dark:border-gray-700  dark:text-gray-400 dark:hover:text-white  md:border-0   lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white">
                    <Image
                      src={EnFlag}
                      width={30}
                      height={30}
                      alt="flag"
                      className="block"
                    />
                  </div>
                </li>
              </Link>
            ) : (
              <Link href={asPath} locale="ar" passHref>
                <li className="hover:border-primary mx-2 my-2 flex cursor-pointer items-center rounded-md border-l-8 border-transparent transition ease-in-out   hover:bg-gray-200   lg:hover:border-transparent lg:hover:bg-transparent">
                  <div className="flex border-gray-200 py-2 px-3 text-gray-700 dark:border-gray-700  dark:text-gray-400 dark:hover:text-white  md:border-0   lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white">
                    <Image
                      src={ArFlag}
                      width={30}
                      height={30}
                      alt="flag"
                      className="block"
                    />
                  </div>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
