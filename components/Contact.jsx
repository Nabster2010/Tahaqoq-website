import { useTranslation } from "../hooks/useTranslation";
import ContactForm from "./ContactForm";
import Divider from "./Divider";

const Contact = () => {
  const { locale, dir, lang, translation: data } = useTranslation();

  return (
    <section id="contact ">
      <div className="mx-4 bg-white md:mx-8">
        <header className=" text-center text-black">
          <Divider title={data.contact.title} animation="fade-up" />

          <p data-aos="fade-up" className="text-black">
            {data.contact.desc}
          </p>
        </header>

        <div className="my-8 flex flex-col items-center justify-center  text-center md:flex-row">
          {data.contact.cards.map((item, index) => (
            <div key={item.id} className="md:w-1/3 " data-aos="fade-up">
              <div className="flex flex-col gap-4 p-8">
                <i className={`${item.icon} fa-3x text-primary`}></i>
                <h3 className="text-xl font-bold uppercase text-gray-400">
                  {item.title}
                </h3>
                <address className="text-black">{item.text}</address>
              </div>
            </div>
          ))}
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
