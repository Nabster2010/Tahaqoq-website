import { useTranslation } from "../hooks/useTranslation";
import Divider from "./Divider";
const Services = () => {
  const { locale, dir, lang, translation: data } = useTranslation();

  return (
    <section
      id="services"
      className=" relative "
      data-aos="fade-in"
      style={{
        background: `url("/assets/img/services/services-bg.jpg") no-repeat  center fixed`,
      }}
    >
      <div className="absolute inset-0 bg-gray-100/90 "></div>
      <div className="mx-8 pb-16">
        <Divider title={data.services.title} animation="fade-up" />

        <div className=" mx-auto ">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {data.services.cards.map((service, index) => (
              <div
                key={service.id}
                className=" w-full px-4 pt-6 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="relative flex w-full min-w-0 flex-col break-words rounded-lg  bg-white transition duration-300 hover:shadow-xl">
                  <div className="flex-auto px-4 py-5">
                    <div className="border-primary  text-primary mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border p-3 text-center shadow">
                      <i className={service.icon}></i>
                    </div>
                    <h6 className="text-xl font-semibold">{service.title}</h6>
                    <p className="mt-2 mb-4 text-gray-600">{service.desc}</p>
                    <button className="border-primary hover:bg-primary/75 rounded-md border px-8  py-2 text-black  transition-opacity hover:border-transparent">
                      {service.btnText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
