import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

const ContactForm = () => {
  const { translation: data } = useTranslation();
  const [showAlert, setShowAlert] = useState(false);
  const [state, handleSubmit] = useForm("mdobeynn");
  if (state.succeeded) {
    setShowAlert(true);
  }
  const closeAlert = () => {
    setShowAlert(false);
  };
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
        <form onSubmit={handleSubmit} className="" data-aos="fade-up">
          <div>
            <label
              htmlFor="name"
              className="text-sm font-bold uppercase text-gray-600"
            >
              {data.contactForm.fullname}
            </label>
            <input
              className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
              type="text"
              name="name"
              id="name"
              required
              autoComplete="name"
              placeholder=""
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="mt-8">
            <label
              htmlFor="email"
              className="text-sm font-bold uppercase text-gray-600"
            >
              {data.contactForm.email}
            </label>
            <input
              className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
              type="email"
              name="email"
              id="email"
              required
              autoComplete="email"
              placeholder=""
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mt-8">
            <label
              htmlFor="message"
              className="text-sm font-bold uppercase text-gray-600"
            >
              {data.contactForm.message}
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="focus:shadow-outline mt-2 h-32 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="mt-8">
            <button
              type="submit"
              disabled={state.submitting}
              className="focus:shadow-outline bg-primary w-full rounded-lg p-3 text-sm font-bold uppercase tracking-wide text-black focus:outline-none"
            >
              {data.contactForm.btnText}
            </button>
          </div>
        </form>
        {showAlert && (
          <Alert message="Thanks for submiting" close={closeAlert} />
        )}
      </div>
    </section>
  );
};

export default ContactForm;

const Alert = ({ message, close }) => (
  <div
    id="alert-1"
    className="relative  flex items-center justify-center rounded-lg bg-blue-100 p-4 dark:bg-blue-200"
    role="alert"
  >
    <div className=" text-sm font-medium text-blue-700 dark:text-blue-800">
      {message}
    </div>
    <div className="absolute left-4">
      <button
        onClick={close}
        type="button"
        className="  block h-8 w-8 rounded-lg bg-blue-100 p-1.5 text-blue-500 hover:bg-blue-200 focus:ring-2 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300"
        data-collapse-toggle="alert-1"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
);
