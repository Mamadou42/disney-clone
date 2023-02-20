import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image width="1500" height="300" loading="lazy" src="/images/slider-1.jpg" alt="" />
        </div>
        <div>
          <Image width="1500" height="300" loading="lazy" src="/images/slider-2.jpg" alt="" />
        </div>
        <div>
          <Image width="1500" height="300" loading="lazy" src="/images/slider-3.jpg" alt="" />
        </div>
        <div>
          <Image width="1500" height="300" loading="lazy" src="/images/slider-4.jpeg" alt="" />
        </div>
      </Carousel>
    </section>
  );
}

export default Slider;
