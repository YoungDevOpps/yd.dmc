"use client";

import Slider from "react-slick";
import { motion } from "framer-motion";
import domains from "@/mock/domains.json";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HomeCarouselSection() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const imgCarousel = ["/c1.jpg", "/c2.jpg"];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-transparent">
      <Slider {...sliderSettings}>
        {imgCarousel.map((item, i) => (
          <div key={i} className="relative w-full h-screen">
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
              <Image
                fill
                src={item}
                alt="Domaine"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="bg-black/50 absolute top-0 left-0 z-10 w-full h-screen"></div>
      <motion.div className="absolute top-0 left-0 h-screen  w-full flex flex-col space-y-4 justify-center items-center z-11">
        <span className="text-2xl sm:text-3xl md:text-5xl font-semibold uppercase text-center text-white">
          {"Le génie d'un partenaire à votre service"}
        </span>
        <span className="text-lg sm:text-xl md:text-3xl font-semibold uppercase text-white">
          <TypeAnimation
            sequence={[...domains.flatMap((name) => [name.name, 5000, ""])]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            deletionSpeed={70}
          />
        </span>
      </motion.div>
    </section>
  );
}
