"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./OurWorkCarousel.module.css";

const images = [
  {
    src: "/images/ANU_0076.jpg",
    couple: "Aarav & Priya",
    location: "Hyderabad",
    category: "Haldi",
  },
  {
    src: "/images/ANU_1751.jpg",
    couple: "Siddharth & Ananya",
    location: "Bangalore",
    category: "Wedding",
  },
  {
    src: "/images/DSC_0576 copy.jpg",
    couple: "Rohit & Meera",
    location: "Goa",
    category: "Celebration",
  },
  {
    src: "/images/DSC_1344 copy.jpg",
    couple: "Karan & Nisha",
    location: "Udaipur",
    category: "Wedding",
  },
  {
    src: "/images/DSC_9975 copy.jpg",
    couple: "Arjun & Diya",
    location: "Chennai",
    category: "Reception",
  },
  {
    src: "/images/DSC03140 copy.jpg",
    couple: "Vihaan & Tara",
    location: "Jaipur",
    category: "Ceremony",
  },
];

export default function OurWorkCarousel() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) => (current + 1) % images.length);
  };

  const previous = () => {
    setActive(
      (current) => (current - 1 + images.length) % images.length
    );
  };

  const getIndex = (offset) => {
    return (active + offset + images.length) % images.length;
  };

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
         <a href="/love-stories" className={styles.explore}>
          Explore Love Stories
          <span>↗</span>
        </a>
      </div>


      {/* Carousel */}
      <div className={styles.carousel}>

        {/* Previous */}
        <button
          className={`${styles.nav} ${styles.prev}`}
          onClick={previous}
          aria-label="Previous photograph"
        >
          <span>←</span>
        </button>


        {/* Previous image */}
        <div className={`${styles.slide} ${styles.previousSlide}`}>
          <Image
            src={images[getIndex(-1)].src}
            alt={images[getIndex(-1)].couple}
            fill
            sizes="25vw"
          />
        </div>


        {/* Main image */}
        <div className={styles.mainSlide}>

          <Image
            key={images[active].src}
            src={images[active].src}
            alt={images[active].couple}
            fill
            priority
            sizes="70vw"
            className={styles.image}
          />

          <div className={styles.imageOverlay} />

          <div className={styles.imageInfo}>
            <span>{images[active].category}</span>

            <h3>{images[active].couple}</h3>

            <p>{images[active].location}</p>
          </div>

        </div>


        {/* Next image */}
        <div className={`${styles.slide} ${styles.nextSlide}`}>
          <Image
            src={images[getIndex(1)].src}
            alt={images[getIndex(1)].couple}
            fill
            sizes="25vw"
          />
        </div>


        {/* Next */}
        <button
          className={`${styles.nav} ${styles.next}`}
          onClick={next}
          aria-label="Next photograph"
        >
          <span>→</span>
        </button>

      </div>


      {/* Bottom */}
      <div className={styles.bottom}>

        <div className={styles.counter}>
          <span>
            {String(active + 1).padStart(2, "0")}
          </span>

          <i />

          <span>
            {String(images.length).padStart(2, "0")}
          </span>
        </div>


        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={
                index === active ? styles.activeDot : ""
              }
              aria-label={`View photograph ${index + 1}`}
            />
          ))}
        </div>


       

      </div>

    </section>
  );
}