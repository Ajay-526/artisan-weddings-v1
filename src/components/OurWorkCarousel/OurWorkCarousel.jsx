"use client";

import Image from "next/image";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./OurWorkCarousel.module.css";


const s3ImagesUrl = process.env.NEXT_PUBLIC_S3_IMAGES_URL;

const images = [
  {
    src: `${s3ImagesUrl}/love+stories/vrushank%2Bmounika/image10.webp`,
    couple: "Vrushank & Mounika",
    location: "Hyderabad",
    category: "Wedding",
  },
  {
    src: `${s3ImagesUrl}/love+stories/vrushank%2Bmounika/image7.webp`,
    couple: "Vrushank & Mounika",
    location: "Hyderabad",
    category: "Cute Moment",
  },
  {
    src: `${s3ImagesUrl}/love+stories/saisrinivas%2Bsushma/image18.webp`,
    couple: "Sai Srinivas & Sushma",
    location: "Bangalore",
    category: "Wedding",
  },
  {
    src: `${s3ImagesUrl}/love+stories/saisrinivas%2Bsushma/image14.webp`,
    couple: "Sai Srinivas & Sushma",
    location: "Bangalore",
    category: "Pre Wedding",
  },
  {
    src:`${s3ImagesUrl}/love+stories/rachana%2Bsaikrishna/image3.webp`,
    couple: "Rachana & Sai Krishna",
    location: "Goa",
    category: "Haldi",
  },
   {
    src:`${s3ImagesUrl}/love+stories/rachana%2Bsaikrishna/image8.webp`,
    couple: "Rachana & Sai Krishna",
    location: "Goa",
    category: "Love",
  },
  {
    src: `${s3ImagesUrl}/love+stories/sreeja%2Bakarshith/image12.webp`,
    couple: "Akarshith & Sreeja",
    location: "Udaipur",
    category: "Wedding",
  },
  {
    src: `${s3ImagesUrl}/love+stories/sreeja%2Bakarshith/image19.webp`,
    couple: "Akarshith & Sreeja",
    location: "Udaipur",
    category: "Happy",
  },
  {
    src: "/images/DSC03140 copy.webp",
    couple: "Sindhu & Neeshal",
    location: "Jaipur",
    category: "Ceremony",
  },{
    src: `${s3ImagesUrl}/love+stories/sindhu%2Bneeshal/image19.webp`,
    couple: "Sindhu & Neeshal",
    location: "Jaipur",
    category: "Celebration",
  },
];

export default function OurWorkCarousel() {
  const swiperRef = useRef(null);

  return (
    <section className={styles.section}>

      {/* Header */}
      <div className={styles.header}>
        <h4 className={styles.eyebrow}>OUR WORK</h4>

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