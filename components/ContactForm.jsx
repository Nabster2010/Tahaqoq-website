import Image from "next/image";
import { useTranslation } from "../hooks/useTranslation";

const ContactForm = () => {
  const { locale, dir, lang, translation: data } = useTranslation();

  return (
    <section>
      <div className="  mx-auto grid grid-cols-1 gap-8 px-8 py-16 text-gray-900 md:grid-cols-2 md:px-12 lg:px-16  xl:px-32 ">
        <div className="flex flex-col justify-between" data-aos="fade-up">
          <div>
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              {data.contactForm.title}
            </h2>
          </div>
          <div className="mt-8 text-center">
            <Image
              width="100%"
              height="100%"
              layout="responsive"
              src={data.contactForm.src}
              alt=""
            />
          </div>
        </div>
        <div className="" data-aos="fade-up">
          <div>
            <span className="text-sm font-bold uppercase text-gray-600">
              {data.contactForm.fullname}
            </span>
            <input
              className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-gray-600">
              {data.contactForm.email}
            </span>
            <input
              className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
              type="text"
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-gray-600">
              {data.contactForm.message}
            </span>
            <textarea className="focus:shadow-outline mt-2 h-32 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"></textarea>
          </div>
          <div className="mt-8">
            <button className="focus:shadow-outline bg-primary w-full rounded-lg p-3 text-sm font-bold uppercase tracking-wide text-black focus:outline-none">
              {data.contactForm.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
