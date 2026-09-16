"use client";

import Image from "next/image";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./OurWorkCarousel.module.css";

const images = [
  {
    src: "/images/ANU_0076.webp",
    couple: "Aarav & Priya",
    location: "Hyderabad",
    category: "Haldi",
  },
  {
    src: "/images/ANU_1751.webp",
    couple: "Siddharth & Ananya",
    location: "Bangalore",
    category: "Wedding",
  },
  {
    src: "/images/DSC_0576 copy.webp",
    couple: "Rohit & Meera",
    location: "Goa",
    category: "Celebration",
  },
  {
    src: "/images/DSC_1344 copy.webp",
    couple: "Karan & Nisha",
    location: "Udaipur",
    category: "Wedding",
  },
  {
    src: "/images/DSC_9975 copy.webp",
    couple: "Arjun & Diya",
    location: "Chennai",
    category: "Reception",
  },
  {
    src: "/images/DSC03140 copy.webp",
    couple: "Vihaan & Tara",
    location: "Jaipur",
    category: "Ceremony",
  },
];

export default function OurWorkCarousel() {
  const swiperRef = useRef(null);

  return (
    <section className={styles.section}>

      {/* Header */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>OUR WORK</p>

        <h2>
          Moments worth
          <br />
          <em>remembering.</em>
        </h2>

        <p className={styles.intro}>
          Every wedding has its own story, its own energy, and its own little moments that make it unforgettable. From the quiet glances to the loud celebrations, we love being there to capture it all as it naturally unfolds. Here are a few stories and moments that have stayed with us.
        </p>
        <div className="mt-6.25">

         <a href="/love-stories" className={styles.explore}>
          Explore Love Stories
        </a>
        </div>
      </div>


      <div className={styles.carousel}>
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          centeredSlides
          spaceBetween={0}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.45, spaceBetween: 20 },
            1024: { slidesPerView: 2.15, spaceBetween: 24 },
          }}
          className={styles.swiper}
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.src} className={styles.swiperSlide}>
              <div className={styles.mainSlide}>
                <Image
                  src={image.src}
                  alt={image.couple}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 52vw, 92vw"
                  className={styles.image}
                />
                <div className={styles.imageOverlay} />
                <div className={styles.imageInfo}>
                  <span>{image.category}</span>
                  <h3>{image.couple}</h3>
                  <p>{image.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`${styles.nav} ${styles.prev}`}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous photograph"
        >
          <span>←</span>
        </button>
        <button
          className={`${styles.nav} ${styles.next}`}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next photograph"
        >
          <span>→</span>
        </button>
      </div>

    </section>
  );
}