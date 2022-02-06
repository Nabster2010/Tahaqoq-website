import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch(`${process.env.NEXT_PUBLIC_FORM_ENDPOINT}`, {
      method: "POST",
      body: formData,
    })
      .then(() => setQuery({ name: "", email: "", message: "" }))
      .then(() => alert("Message sent successfully"))
      .catch(() => alert("Error"))
      .finally(() => setIsSubmitting(false));
  };
  const { translation: data } = useTranslation();

  return (
    <section className="bg-white">
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
        <form onSubmit={formSubmit} className="" data-aos="fade-up">
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
              value={query.name}
              onChange={handleParam()}
            />
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
              value={query.email}
              onChange={handleParam()}
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
              value={query.message}
              onChange={handleParam()}
              id="message"
              required
              className="focus:shadow-outline mt-2 h-32 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
            ></textarea>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="focus:shadow-outline bg-primary w-full rounded-lg p-3 text-sm font-bold uppercase tracking-wide text-black focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400"
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
