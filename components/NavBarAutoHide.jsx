import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import useNavScroll from "../hooks/useNavScroll";
import { useTranslation } from "../hooks/useTranslation";
import ArFlag from "../public/assets/img/ar.svg";
import EnFlag from "../public/assets/img/en.svg";

const NavBarAutoHide = ({}) => {
  const { theme, setTheme } = useTheme();
  const { locale, asPath } = useRouter();
  const { translation: t } = useTranslation();
  const { navVisiblity } = useNavScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuOpenHandler = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="h-[60px] bg-transparent">
      <nav
        className={`font-cairo fixed top-0  left-0  right-0 z-50 transform border-gray-200 bg-gray-100 px-4 py-2.5 transition-transform duration-500 ease-linear dark:bg-gray-800 sm:px-4  md:px-8 ${
          navVisiblity ? "" : "-translate-y-[60px]"
        } `}
      >
        <div className=" mx-auto flex flex-wrap items-center justify-between">
          <a href="#" className="flex">
            <svg
              className="h-10 ltr:mr-3 rtl:ml-3"
              viewBox="0 0 52 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
                fill="#76A9FA"
              />
              <path
                d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
                fill="#A4CAFE"
              />
              <path
                d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
                fill="#1C64F2"
              />
            </svg>
            <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
              {t.nav.brand}
            </span>
          </a>
          <button
            onClick={mobileMenuOpenHandler}
            data-collapse-toggle="mobile-menu"
            type="button"
            className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-200  focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 md:hidden "
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <div className="flex flex-col items-center justify-center gap-1  ">
              <span
                className={`h-[2px] w-5 transform rounded bg-gray-400 transition duration-500 ${
                  mobileMenuOpen && "translate-y-[6px] rotate-[225deg]  "
                } `}
              ></span>
              <span
                className={`h-[2px] w-5 rounded bg-gray-400 transition duration-700 ${
                  mobileMenuOpen && "opacity-0"
                }`}
              ></span>
              <span
                className={`h-[2px] w-5 transform rounded bg-gray-400 transition duration-500 ${
                  mobileMenuOpen && "-translate-y-[6px] -rotate-[225deg] "
                }`}
              ></span>
            </div>
          </button>
          <div
            className={`${
              mobileMenuOpen ? "visible" : "hidden"
            } w-full md:block md:w-auto`}
            id="mobile-menu"
          >
            <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:items-center md:space-x-8 md:text-sm md:font-medium ">
              <li>
                <a
                  href="#"
                  className="ml-8 block border-b py-2 pr-4 pl-3 text-gray-700 hover:bg-blue-700 hover:text-white dark:border-gray-700 dark:text-gray-400 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  aria-current="page"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#test"
                  className="block border-b py-2 pr-4 pl-3 text-gray-700   hover:bg-blue-700 hover:text-white dark:border-gray-700 dark:text-gray-400 dark:hover:text-white md:border-0 md:p-0  md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b py-2 pr-4 pl-3 text-gray-700   hover:bg-blue-700 hover:text-white dark:border-gray-700 dark:text-gray-400 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b py-2 pr-4 pl-3 text-gray-700   hover:bg-blue-700 hover:text-white dark:border-gray-700 dark:text-gray-400 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b py-2 pr-4 pl-3 text-gray-700   hover:bg-blue-700 hover:text-white dark:border-gray-700 dark:text-gray-400 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  {t.nav.contact}
                </a>
              </li>
              <li className="cursor-pointer">
                {locale === "ar" ? (
                  <Link href={asPath} locale="en-US" passHref>
                    <div className="block border-b border-gray-200 py-1 pr-4 pl-3 text-gray-700  hover:bg-blue-700 dark:border-gray-700  dark:text-gray-400 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white">
                      <Image src={EnFlag} width={30} height={30} alt="flag" />
                    </div>
                  </Link>
                ) : (
                  <Link href={asPath} locale="ar" passHref>
                    <div className="block border-b border-gray-200 py-1 pr-4 pl-3 text-gray-700  hover:bg-blue-700 dark:border-gray-700  dark:text-gray-400 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white">
                      <Image src={ArFlag} width={30} height={30} alt="flag" />
                    </div>
                  </Link>
                )}
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  type="button"
                  className="block w-full border-b border-gray-200 py-2 pr-4 pl-3 text-gray-700 transition-all hover:bg-blue-700  dark:border-gray-700 dark:text-gray-400 dark:hover:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:opacity-70 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  {theme === "light" ? (
                    <svg
                      id="theme-toggle-dark-icon"
                      className="bg-gradient-to-tr h-6 w-6 rounded-full border from-blue-50 via-blue-100 to-blue-300 shadow-inner"
                      fill="#76A9FA"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6 "
                      fill="rgb(234 179 8)"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarAutoHide;
