const data = {
  nav: [
    { id: 1, name: "الرئيسية", link: "#hero" },
    {
      id: 2,
      name: "خدماتنا",
      link: "#services",
    },
    { id: 3, name: "المختبرات", link: "#laboratories" },
    { id: 4, name: "الاعتمادات", link: "#accredition" },
    { id: 5, name: "الوظائف", link: "#" },
    { id: 6, name: " اتصل بنا", link: "#contact" },
  ],
  hero: [
    {
      id: "1",
      title: "مختبرات فحص العاب الاطفال بالرياض ",
      desc: `مختبر التحقق الدولية لفحص ألعاب الأطفال بمدينة الرياض : 
      حاصل على شهادة الإعتماد الدولي حسب متطلبات المواصفة القياسية أيزو 17025 لنشاط فحص ألعاب الأطفال بغرض الفسح الجمركي حيث يتم إخضاع عينات من السلع الواردة إلى المملكة العربية السعودية للاختبارات الميكانيكية والفيزيائية والكيميائية وأهمها : كشف الرؤوس والأدوات الحادـة، مقاومة الإحتراق، مستوى الصوت، المواد الضارة،...وغير ذلك
        `,
      src: "/assets/img/hero/hero.jpg",
    },
    {
      id: "2",
      title: "مختبر فحص منتجات الغزل والنسيج بارياض",
      desc: `متحصل على شهادة الإعتماد الدولي حسب متطلبات المواصفة القياسية أيزو 17025 لنشاط فحص منتجات الغزل والنسيج بغرض الفسح الجمركي حيث يتم إخضاع عينات السلع الواردة إلى المملكة العربية السعودية إلى كافة الاختبارات الفيزيائية والكيميائية المعتمدة وأهمها : نسبة ونوع الألياف، الرقم الهيدروجيني، المواد الضارة، قوة الشد، مقاومة الإحتراق، الكي الساخن، ثباتى اللون للغسيل او الغسيل الجاف او الكي أو العرق، وغير ذلك... `,
      src: "/assets/img/hero/hero2.jpg",
    },
    {
      id: "3",
      title: "مختبر فحص الاحذية والجلود بالرياض",
      desc: `متحصل على شهادة الإعتماد الدولي حسب متطلبات المواصفة القياسية أيزو 17025 لنشاط فحص الأحذية والجلود بغرض الفسح الجمركي حيث يتم إخضاع عينات من السلع الواردة إلى المملكة العربية السعودية للاختبارات الفيزيائية والكيميائية وأهمها : مقاومة الثني، التشقق والتمطط، العزل الحراري، تغير اللون بالتعتيق، امتصاص بخار الماء، الرقم الهيدروجيني...وغير ذلك. `,
      src: "/assets/img/hero/hero3.jpg",
    },
    {
      id: "4",
      title: "شركة التحقق الدولية ",
      desc: "شركة التحقق الدولية هي شركة وطنية تتكون من مجموعة مختبرات تعمل في مجال فحص السلع الواردة إلى المملكة العربية السعودية، وهي حاصلة على الإعتماد  أيزو 17025 منذ سنة 2014 لمختبراتها وعلى الإعتماد من المركز السعودي للإعتماد حسب متطلبات المواصفة القياسية  أيزو 17020 لمراكز فحص المركبات بمدينة جدة ومدينة الدمام  ",
      src: "/assets/img/hero/hero4.jpg",
    },
    {
      id: "5",
      title: "مراكز فحص السيارات ",
      desc: `لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
      أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد  
      أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات `,
      src: "/assets/img/hero/hero.jpg",
    },
  ],
  services: {
    title: "خدماتنا",
    desc: ` ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد  
    أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كو`,
    cards: [
      {
        id: 1,
        title: "فحص العاب الأطفال",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi reiciendis autem pariatur repudiandae, vero unde accusamus dolores sed impedit et aut tempore, perferendis obcaecati, quaerat distinctio quis eligendi architecto.",
        icon: "fas fa-dice-two",
        btnText: "...المزيد",
      },
      {
        id: 2,
        title: "فحص منتجات الغزل",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi reiciendis autem pariatur repudiandae, vero unde accusamus dolores sed impedit et aut tempore, perferendis obcaecati, quaerat distinctio quis eligendi architecto.",
        icon: "fas fa-tshirt",
        btnText: "...المزيد",
      },
      {
        id: 3,
        title: "فحص الجلود والأحذية",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi reiciendis autem pariatur repudiandae, vero unde accusamus dolores sed impedit et aut tempore, perferendis obcaecati, quaerat distinctio quis eligendi architecto.",
        icon: "fas fa-shoe-prints",
        btnText: "...المزيد",
      },
      {
        id: 4,
        title: "فحص المركبات",
        desc: "Imported vehicles inspection centers are the best choice for your car ",
        icon: "fas fa-car",
        btnText: "...المزيد",
      },
    ],
  },
  parteners: {
    title: "شركائنا",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid ab deleniti deserunt sequi necessitatibus quod eius, minus soluta, officiis, error cupiditate reiciendis? Dolorem adipisci consequatur tempora amet fuga excepturi!",
    cards: [
      {
        id: 1,
        title: "Tabadul",
        src: "/assets/img/clients/client-1.png",
      },
      {
        id: 2,
        title: "Ministry of Commerce",
        src: "/assets/img/clients/client-2.png",
      },
      {
        id: 3,
        title: "Saudi Customs",
        src: "/assets/img/clients/client-3.png",
      },
      {
        id: 4,
        title: "Fasah",
        src: "/assets/img/clients/client-4.png",
      },
      {
        id: 5,
        title: "Saac",
        src: "/assets/img/clients/client-5.png",
      },
      {
        id: 6,
        title: "Saso",
        src: "/assets/img/clients/client-6.svg",
      },
      {
        id: 7,
        title: "Tahaqoq International Company",
        src: "/assets/img/clients/client-7.png",
      },
    ],
  },
  laboratories: {
    title: "المختبرات",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid ab deleniti deserunt sequi necessitatibus quod eius, minus soluta, officiis, error cupiditate reiciendis? Dolorem adipisci consequatur tempora amet fuga excepturi!",
    tabs: [
      {
        id: 1,
        title: "مختبرات الالعاب",
        src: "/assets/img/laboratories/toys.png",
        icon: "fas fa-car",
        header: "مختبر التحقق لفحص الالعاب",
        desc: "Tahaqoq’s Toys Laboratory is one of the ISO/IEC 17025 ACCREDITED laboratories that carry out a broad range of tests which are : mechanical/physical tests, flammability test, chemical tests and more...",
      },
      {
        id: 2,
        title: "مختبرات النسيج",
        src: "/assets/img/laboratories/textile.png",
        icon: "fas fa-tshirt",
        header: "مختبرات التحقق لفحص النسيج",
        desc: "Tahaqoq’s Textile testing Laboratory is one of the ISO/IEC 17025 ACCREDITED laboratories that carry out a broad range of tests on all type of textile products (fabrics, Bed sheets, socks, underwear, Baby diapers, work wear, Cotton terry towel, Bath robes, Black okal, Abaya & Tarha, White Ghautra,Silk fabrics, Shemagh ..) which include most of Physcical and chsmical textile tests...",
      },
      {
        id: 3,
        title: "مختبرات الجلود والاحذية",
        src: "/assets/img/laboratories/leather.png",
        icon: "fas fa-shoe-prints",
        header: "مختبرات التحقق للجلود والاحذية",
        desc: "Tahaqoq’s Leather and Shoes testing Laboratory is one of the ISO/IEC 17025 ACCREDITED laboratories that carry out a broad range of tests on all type of shoes and leather products which include most of Physcical and chemical  tests...",
      },
      {
        id: 4,
        title: "مختبرات المركبات",
        src: "/assets/img/laboratories/vehicle.png",
        icon: "fas fa-car",
        header: "مختبرات التحقق لفحص المركبات",
        desc: "Located in Jeddah and Dammam near the main Saudi Arabia ports. TAHAQOQ Inspection Centers  carry out a large range of inspections on all type of vehicles including used private cars, trucks, SUV,.. ",
      },
    ],
  },
  accreditations: {
    title: "الاعتمادات",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid ab deleniti deserunt sequi necessitatibus quod eius, minus soluta, officiis, error cupiditate reiciendis? Dolorem adipisci consequatur tempora amet fuga excepturi!",
    cards: [
      {
        id: 1,
        title: "ISO/IEC 17025",
        header: "ISO/IEC 17025 header",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nisi.",
        images: [
          "/assets/img/accreditions/iso1.jpg",
          "/assets/img/accreditions/iso2.jpg",
          "/assets/img/accreditions/iso3.jpg",
          "/assets/img/accreditions/iso4.jpg",
        ],
      },
      {
        id: 2,
        title: "ISO/IEC 17020",
        header: "ISO/IEC 17020 header",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nisi.",
        images: [
          "/assets/img/accreditions/iso1.jpg",
          "/assets/img/accreditions/iso2.jpg",
          "/assets/img/accreditions/iso3.jpg",
          "/assets/img/accreditions/iso4.jpg",
        ],
      },
      {
        id: 3,
        title: "ISO/IEC ",
        header: "ISO/IEC header",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nisi.",
        images: [
          "/assets/img/accreditions/iso1.jpg",
          "/assets/img/accreditions/iso2.jpg",
          "/assets/img/accreditions/iso3.jpg",
          "/assets/img/accreditions/iso4.jpg",
        ],
      },
    ],
  },
  about: {
    title: "عن الشركة",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nisi.",
    background: "assets/img/about/about-bg.jpg",
    cards: [
      {
        id: 1,
        title: "مهمتنا",
        desc: "TAHAQOQ creates increased safety and added economic value, with comprehensive industry knowledge, our team of specialists provide early consultation and continuous guidance, thus achieving the optimization of technology, systems and expertise.",
        icon: "fas fa-crosshairs",
        src: "/assets/img/about/mission.jpg",
      },
      {
        id: 2,
        title: "الرؤية",
        desc: "TAHAQOQ creates increased safety and added economic value, with comprehensive industry knowledge, our team of specialists provide early consultation and continuous guidance, thus achieving the optimization of technology, systems and expertise.",
        icon: "fas fa-eye",
        src: "/assets/img/about/vision.jpg",
      },
      {
        id: 3,
        title: "قيمنا",
        desc: "TAHAQOQ creates increased safety and added economic value, with comprehensive industry knowledge, our team of specialists provide early consultation and continuous guidance, thus achieving the optimization of technology, systems and expertise.",
        icon: "fas fa-hand-holding-usd",
        src: "/assets/img/about/values.jpg",
      },
      {
        id: 4,
        title: "الجودة",
        desc: "TAHAQOQ creates increased safety and added economic value, with comprehensive industry knowledge, our team of specialists provide early consultation and continuous guidance, thus achieving the optimization of technology, systems and expertise.",
        icon: "fas fa-medal",
        src: "/assets/img/about/quality.jpg",
      },
    ],
  },
  contact: {
    title: "اتصل بنا",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nisi.",
    cards: [
      {
        id: 1,
        title: "العنوان",
        icon: "fas fa-map-marker-alt",
        text: "A108 Adam Street, NY 535022, USA",
      },
      {
        id: 2,
        title: "هاتف",
        icon: "fas fa-phone-alt",
        text: "+1 5589 55488 55",
      },
      {
        id: 3,
        title: "بريد الكتروني",
        icon: "far fa-envelope",
        text: "info@example.com",
      },
    ],
  },
  contactForm: {
    title: "ارسل لنا رساله!",
    fullname: "الاسم ",
    email: "البريد الالكتروني",
    message: "الرساله",
    btnText: "ارسل",
    src: "/assets/img/contact/contact.svg",
  },
  footer: {
    header: "فلنبقي علي اتصال !",
    subheader: `تابعنا علي هذه المنصات .`,
    usefullinks: "روابط مفيده",
    copyRight: "Copyright © Tahaqoq. All rights reserved.",
  },
};
export default data;

// export const heroSlides = [
//   {
//     id: "1",
//     title: "TAHAQOQ TOYS TESTING LABORATORY ",
//     desc: "Tahaqoq’s Toys Laboratory is one of the ISO/IEC 17025 ACCREDITED laboratories that carry out a broad range of tests which are : mechanical/physical tests, flammability test, chemical tests and more... ",
//     src: "/assets/img/hero.jpg",
//   },
//   {
//     id: "2",
//     title: "TAHAQOQ Textile Testing Laboratory ",
//     desc: "Tahaqoq’s Textile testing Laboratory is one of the ISO/IEC 17025 ACCREDITED laboratories that carry out a broad range of tests on all type of textile products (fabrics, Bed sheets, socks, underwear, Baby diapers, work wear, Cotton terry towel, Bath robes, Black okal, Abaya & Tarha, White Ghautra,Silk fabrics, Shemagh ..) which include most of Physcical and chsmical textile tests...",
//     src: "/assets/img/hero2.jpg",
//   },
//   {
//     id: "3",
//     title: "TAHAQOQ LEATHER AND SHOES TESTING LABORATORY ",
//     desc: "Tahaqoq’s Leather and Shoes testing Laboratory is one of the ISO/IEC 17025 ACCREDITED laboratories that carry out a broad range of tests on all type of shoes and leather products which include most of Physcical and chemical  tests...",
//     src: "/assets/img/hero3.jpg",
//   },
//   {
//     id: "4",
//     title: "TAHAQOQ INTERNATIONAL CO  ",
//     desc: "Tahaqoq International Company is a group of testing laboratories and inspection bodies located in Saudi Arabia, working especially for Saudi Customs to provide expertise and testing services of goods coming from Outside Saudi Arabia : textile products, leather, shoes, toys and vehicles inspection according to Saudi and Gulf standards.  ",
//     src: "/assets/img/hero4.jpg",
//   },
//   {
//     id: "5",
//     title: "TAHAQOQ VEHICLE INSPECTION LABORATORIES ",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid ab deleniti deserunt sequi necessitatibus quod eius, minus soluta, officiis, error cupiditate reiciendis? Dolorem adipisci consequatur tempora amet fuga excepturi!",
//     src: "/assets/img/hero.jpg",
//   },
// ];
// // laboratories section______________________
// const laboratoriesHeading = `Tahaqoq International Company is a group of testing laboratories located in Riyadh, Jeddah and Dammam, Saudi Arabia. We have five testing laboratories namely : textile, leather & shoes, toys testing laboratories and vehicles testing and inspection centers.

// The facilities and expertise in our laboratories are comparable to  international laboratories. They are provided with the most sophisticated equipment. This will be reflected in accurate and reliable results. Also we have a team of highly skilled personnel and relevant expertise to undertake accredited testing methods.

// Our laboratories are compliant with local and regional standards and are ISO/IEC 17025 accredited through SAC accreditation.

// We are committed to provide customers with accurate and reliable results. Also, we will keep improving the work towards higher standards. We look forward to be one of the leading companies in our region in the area of testing and calibration and serve our country.`;

// export const laboratories = [
//   {
//     id: 1,
//     title: "TOYS",
//     desc: "Tahaqoq’s Toys Laboratory is one of the important laboratories that carry out a broad range of tests which are",
//     src: "",
//   },
//   {
//     id: 2,
//     title: "TEXTILE",
//     desc: "Tahaqoq’s Textile Laboratory is one of its important laboratories in issuing of test reports to determine compliance of textile",
//     src: "",
//   },
//   {
//     id: 3,
//     title: "LEATHER AND SHOES",
//     desc: "Tahaqoq’s Leather & Shoes Laboratory carries out an essential number of tests on leather & shoes products, whether manufactured",
//     src: "",
//   },
//   {
//     id: 4,
//     title: "VEHICLES",
//     desc: "Located in Jeddah and Dammam near the main Saudi Arabia ports. TAHAQOQ Inspection Centers  carry out a large range",
//     src: "",
//   },
// ];

// // accreditions section______________________

// const accreditation = [
//   {
//     id: 1,
//     title: "ISO/IEC 17025",
//     desc: "Tahaqoq’s Textile testing Laboratory is one of the ISO/IEC 17025 ACCREDITED laboratories that carry out a broad range of tests on all type of textile products (fabrics, Bed sheets, socks, underwear, Baby diapers, work wear, Cotton terry towel, Bath robes, Black okal, Abaya & Tarha, White Ghautra, Silk fabrics, Shemagh ..) which include most of Physcical and chsmical textile tests...",
//     src: "",
//   },
//   {
//     id: 2,
//     title: "ISO 17020",
//     desc: "Tahaqoq’s Vehicles Laboratory is one of the ISO 17020 ACCREDITED laboratories that carry out a broad range of tests on vehicles...",
//     src: "",
//   },
// ];

// export const laboratoriesDetails = [
//   {
//     heading: "TOYS",
//     desc: `Tahaqoq’s Toys Laboratory is one of the important laboratories that carry out a broad range of tests which are needed to verify the compliance of toys with national, regional and international standards. These tests are to guarantee the requirements of safety in the kingdom where a special attention is given to toys.

//     The laboratory is equipped with sophisticated equipment and instruments which will be of great effect on the accuracy and precision of the tests carried out.

//     The laboratory is run by highly qualified and competent technicians who got a valuable experience and who do tests in light of national, regional and international standards. All the capabilities of the laboratory will ensure and help us in fulfilling our commitment to provide our customers with accurate, reliable and technically competent test reports.`,
//     slides: [
//       { id: 1, src: "" },
//       { id: 2, src: "" },
//       { id: 3, src: "" },
//       { id: 4, src: "" },
//       { id: 5, src: "" },
//       { id: 6, src: "" },
//     ],
//     certificates: [
//       { id: 1, src: "" },
//       { id: 2, src: "" },
//       { id: 3, src: "" },
//       { id: 4, src: "" },
//     ],
//   },

//   {
//     heading: "TEXTILE",
//     desc: `Tahaqoq’s Textile Laboratory is one of its important laboratories in issuing of test reports to determine compliance of textile products, whether manufactured in the kingdom or imported from abroad, with local, regional and international standards (ISO/IEC 17025:2005).
//     The laboratory is equipped with sophisticated equipment which will be reflected on the accuracy and precision of the tests carried out by this equipment.
//     The laboratory staff includes technically competent personnel who carry out the tests in light of national, regional and international standards. All of this ensures our commitment to provide customers with accurate, reliable and technically competent test reports.`,
//     slides: [
//       { id: 1, src: "" },
//       { id: 2, src: "" },
//       { id: 3, src: "" },
//       { id: 4, src: "" },
//       { id: 5, src: "" },
//       { id: 6, src: "" },
//     ],
//     certificates: [
//       { id: 1, src: "" },
//       { id: 2, src: "" },
//       { id: 3, src: "" },
//       { id: 4, src: "" },
//     ],
//   },
//   {
//     heading: "LEATHER AND SHOES",
//     desc: `Tahaqoq’s Leather & Shoes Laboratory carries out an essential number of tests on leather & shoes products, whether manufactured in the kingdom or imported from abroad, to ensure the compliance of these products with national, regional and international standards (ISO/IEC 17025:2005).
//   The laboratory is equipped with the latest equipment which will be reflected on the accuracy and precision of the results of the tests carried out.
//   The laboratory is run by highly skilled and competent technicians who carry out all tests in light of national, regional and international standards. All of these capabilities will be of great help to us in fulfilling our commitment to provide our customers with accurate, reliable and technically competent test reports.`,
//     slides: [
//       { id: 1, src: "" },
//       { id: 2, src: "" },
//       { id: 3, src: "" },
//       { id: 4, src: "" },
//       { id: 5, src: "" },
//       { id: 6, src: "" },
//     ],
//     certificates: [
//       { id: 1, src: "" },
//       { id: 2, src: "" },
//       { id: 3, src: "" },
//       { id: 4, src: "" },
//     ],
//   },
//   {
//     heading: "VEHICLES",
//     desc: `Located in Jeddah and Dammam near the main Saudi Arabia ports. TAHAQOQ Inspection Centers  carry out a large range of inspections on all type of vehicles including used private cars, trucks, SUV,.. : Visual and undercarriage inspections, Service and parking Brake inspections, Suspension system, Gaz emission,  Side slip, Highbeam intensity,…etc . Inspection Reports provide also information about the history of cars (Frame damage, salvage, Police use, Taxi use,..) as per new Saudi standard SASO 1284 : 2017.
//   TAHAQOQ inspection centers are accredited according to ISO 17020 by Saudi Accreditation Center.`,
//     slides: [
//       { id: 1, src: "" },
//       { id: 2, src: "" },
//       { id: 3, src: "" },
//       { id: 4, src: "" },
//       { id: 5, src: "" },
//       { id: 6, src: "" },
//     ],
//     certificates: [
//       { id: 1, src: "" },
//       { id: 2, src: "" },
//       { id: 3, src: "" },
//       { id: 4, src: "" },
//     ],
//   },
// ];

// const parteners = [
//   "saudi accreditation center",
//   "Saso",
//   "Saudi Customs",
//   "Fasah",
// ];

// export const services = [
//   {
//     id: 1,
//     title: "TOYS",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi reiciendis autem pariatur repudiandae, vero unde accusamus dolores sed impedit et aut tempore, perferendis obcaecati, quaerat distinctio quis eligendi architecto.",
//     icon: "fas fa-dice-two",
//   },
//   {
//     id: 2,
//     title: "TEXTILE",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi reiciendis autem pariatur repudiandae, vero unde accusamus dolores sed impedit et aut tempore, perferendis obcaecati, quaerat distinctio quis eligendi architecto.",
//     icon: "fas fa-tshirt",
//   },
//   {
//     id: 3,
//     title: "LEATHER",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi reiciendis autem pariatur repudiandae, vero unde accusamus dolores sed impedit et aut tempore, perferendis obcaecati, quaerat distinctio quis eligendi architecto.",
//     icon: "fas fa-shoe-prints",
//   },
//   {
//     id: 4,
//     title: "VEHICLES",
//     desc: "Imported vehicles inspection centers are the best choice for your car ",
//     icon: "fas fa-car",
//   },
// ];

// // about us___________________
// export const about = [
//   {
//     id: 1,
//     title: "Vision",
//     desc: `To be the local and regional leader in the area of testing activities of Textile products, Leather & Shoes, Toys and Vehicles inspection..`,
//     src: "/assets/img/vision.jpg",
//   },
//   {
//     id: 2,
//     title: "Mission",
//     desc: `TAHAQOQ creates increased safety and added economic value,  with comprehensive industry knowledge, our team of specialists provide early consultation and continuous guidance, thus achieving the optimization of technology, systems and expertise.`,
//     src: "/assets/img/mission.jpg",
//   },
//   {
//     id: 3,
//     title: "Values",
//     desc: `Customer eccentric: Place customer first in every activity we do.`,
//     src: "/assets/img/values.jpg",
//   },
//   {
//     id: 4,
//     title: "Quality",
//     desc: `To be the local and regional leader in the area of testing activities of Textile products, Leather & Shoes, Toys and Vehicles inspection..`,
//     src: "/assets/img/quality.jpg",
//   },
// ];
