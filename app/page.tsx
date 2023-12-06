import { Header, Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <div>
        <div className="flex justify-center">
          <img
            src="https://dyvak8rtbn5om.cloudfront.net/wp-content/uploads/2022/01/website-under-construction-1.jpg"
            alt="Const"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
