import { useEffect, useState } from "react";
import styles from "./SpaceHero.module.css";

export const SpaceHero = () => {
  // Generate static stars
  const stars = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
  }));

  return (
    <div className={styles.hero}>
      {/* Static Stars */}
      <div className={styles.stars}>
        {stars.map((star) => (
          <div
            key={star.id}
            className={styles.star}
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.left + "%",
              top: star.top + "%",
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className={styles.shootingStar + " " + styles.shootingStar1} />
      <div className={styles.shootingStar + " " + styles.shootingStar2} />
      <div className={styles.shootingStar + " " + styles.shootingStar3} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Explore the Cosmos</h1>
          <p className={styles.subtitle}>
            Discover the mysteries of the universe
          </p>
          <button className={styles.button}>Begin Journey</button>
        </div>
      </div>
    </div>
  );
};
