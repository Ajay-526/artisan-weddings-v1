"use client";

import Link from "next/link";
import styles from "./ArtisanIntro.module.css";

const qualities = ["Candid", "Cinematic", "Timeless"];

export default function ArtisanIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <h4 className={styles.eyebrow}>ARTISAN WEDDINGS</h4>

        {/* <h2>
          Made of moments.
          <br />
          <i>Meant to be remembered.</i>
        </h2> */}
      </div>

      {/* <div className={styles.qualities}>
        {qualities.map((quality, index) => (
          <div className={styles.quality} key={quality}>
            <span>0{index + 1}</span>
            <p>{quality}</p>
          </div>
        ))}
      </div> */}

      <p className={styles.description}>
        We capture the little things, the grand celebrations, and everything in
        between. The quiet glances, the uncontrollable laughter, and the happy
        tears that make your day unforgettable. Every wedding has its own
        rhythm, its own people, and its own story to tell. We turn those
        fleeting moments into cinematic films filled with genuine emotion. Films
        that bring back the voices, the smiles, the music, and the feeling of
        being there. So years from now, you can return to these moments and feel
        them all over again.
      </p>

      <div className={styles.actions}>
        <Link href="/photos">View Photos</Link>

        <Link href="/films">View Films</Link>
      </div>
    </section>
  );
}
