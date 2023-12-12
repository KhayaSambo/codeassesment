import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import CaseStudies from "./components/casestudies";
import Brands from "./components/brands";
import Footer from "./components/footer";

export default function Home() {
  
  const services: Service[] = [
    {
      imgSrc: "/assets/Web Dev Icon.svg",
      altText: "Web development",
      title: "Web development",
      description:
        "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.",
    },
    {
      imgSrc: "/assets/UX Icon.svg",
      altText: "User experience & design",
      title: "User experience & design",
      description:
        "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.",
    },
    {
      imgSrc: "/assets/App Dev Icon.svg",
      altText: "Mobile app development",
      title: "Mobile app development",
      description:
        "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.",
    },
    {
      imgSrc: "/assets/icon.svg",
      altText: "Blockchain solutions",
      title: "Blockchain solutions",
      description:
        "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.",
    },
  ];
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero
        title="Live with Confidence"
        description="José Mourinho brings confidence to pan-African Sanlam campaign."
        imageUrl="/assets/josehero.png"
      />
      <div className="bodyBlock">
        <Content services={services} />
        <CaseStudies />
        <Brands />
        
      </div>
      <Footer/>
    </main>
  );
}
