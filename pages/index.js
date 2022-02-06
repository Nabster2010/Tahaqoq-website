import Head from "next/head";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Team from "../components/Team";
import Finisher from "../components/Finisher";
import About from "../components/About";
import Clients from "../components/Clients";
import Accreditions from "../components/Accredition";
import Laboratories from "../components/Laboratories";
import { useRouter } from "next/router";

export default function Home() {
  const { locale } = useRouter();
  return (
    <div>
      <Head>
        <title>
          {locale === "ar" ? "شركة التحقق الدولية" : "Tahqoq international co."}
        </title>
        <meta name="description" content="Tahaqoq int co. ksa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />
      <Clients />
      <Laboratories />
      <Accreditions />
      <About />

      <Contact />
    </div>
  );
}
