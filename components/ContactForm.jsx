import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

const ContactForm = () => {
  const { translation: data } = useTranslation();
  const [state, handleSubmit] = useForm("mdobeynn");
  if (state.succeeded) {
    alert("Thanks for your message!");
  }

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
      </div>
    </section>
  );
};

export default ContactForm;
