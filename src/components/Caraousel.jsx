"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../public/images/1.jpg";
import Image2 from "../../public/images/2.jpg";
import Image3 from "../../public/images/3.jpg";
import Image from "next/image";

function Caraousel() {
  return (
    <Carousel
      autoPlay={true}
      interval={2000}
      showThumbs={false}
      showIndicators={false}
      //   showArrows={false}
      className="relative h-[300px] sm:h-[350px]"
    >
      <div className="">
        <Image
          src={Image1}
          className="h-[300px] bg-cover object-cover sm:h-[350px]"
          alt="images"
        />
      </div>
      <div>
        <Image
          src={Image2}
          className="h-[300px] object-cover bg-cover sm:h-[350px]"
          alt="images"
        />
      </div>
      <div>
        <Image
          src={Image3}
          className="h-[300px] object-cover bg-cover sm:h-[350px]"
          alt="images"
        />
      </div>
    </Carousel>
  );
}

export default Caraousel;
