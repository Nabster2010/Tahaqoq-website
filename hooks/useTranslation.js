import { useRouter } from "next/router";
import arData from "../locales/ar/ar.js";
import enData from "../locales/en/en.js";

export const useTranslation = () => {
  const { locale } = useRouter();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const lang = locale === "ar" ? "ar" : "en";
  const translation = locale === "ar" ? arData : enData;

  return {
    locale,
    dir,
    lang,
    translation,
  };
};
