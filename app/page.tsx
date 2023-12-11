import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import CaseStudies from "./components/casestudies";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero
        title="Live with Confidence"
        description="José Mourinho brings confidence to pan-African Sanlam campaign."
        imageUrl="/assets/josehero.png"
      />
      <div className="bodyBlock">
        <Content />
        <CaseStudies />
      </div>
    </main>
  );
}
