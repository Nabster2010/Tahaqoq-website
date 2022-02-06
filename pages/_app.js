import { useEffect } from "react";
import Layout from "../components/Layout";
import { useTranslation } from "../hooks/useTranslation";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../styles/globals.css";
import "aos/dist/aos.css";
import "react-image-lightbox/style.css";

function MyApp({ Component, pageProps }) {
  const { dir } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
