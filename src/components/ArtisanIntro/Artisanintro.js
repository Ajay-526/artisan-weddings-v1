"use client";

import Link from "next/link";
import styles from "./ArtisanIntro.module.css";

const qualities = ["Candid", "Cinematic", "Timeless"];

export default function ArtisanIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <span className={styles.eyebrow}>ARTISAN WEDDINGS</span>

        <h2>
          Made of moments.
          <br />
          <i>Meant to be remembered.</i>
        </h2>
      </div>

      <div className={styles.qualities}>
        {qualities.map((quality, index) => (
          <div className={styles.quality} key={quality}>
            <span>0{index + 1}</span>
            <p>{quality}</p>
          </div>
        ))}
      </div>

      <p className={styles.description}>
        We capture the little things, the grand celebrations, and everything in
        between.
      </p>

      <div className={styles.actions}>
        <Link href="/story">
          View Photos <span>↗</span>
        </Link>

        <Link href="/films">
          View Films <span>↗</span>
        </Link>
      </div>
    </section>
  );
}
