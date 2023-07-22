import React from "react";
import styles from './Styles.module.css';

const HeroSection = () => {
  return (
    <div className={styles.HeroSection}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 id={styles.heroTitle}>Antique Adventures: Uncovering Legends and Defending History</h1>
          <p className={styles.textContentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</p>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.btnHero1}>Explore now!</button>
          <button className={styles.btnHero2}>Create</button>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span>100+</span>
            <span className={styles.brand}>Brands</span>
          </div>
          <div className={styles.stat}>
            <span>20k+</span>
            <span className={styles.brand}>Fashion Designers</span>
          </div>
          <div className={styles.stat}>
            <span>60k+</span>
            <span className={styles.brand}>Fashion Shows</span>
          </div>
        </div>
      </div>
      <div className={styles.imageGroup}>
        <img id={styles.img2} src="/images/antique_camera.jpg" alt="Antique Camera" />
        <img id={styles.img3} src="/images/cash_register.jpg" alt="Cash Register" />
        <img id={styles.img4} src="/images/old_clock.jpg" alt="Old Clock" />
        <img id={styles.img5} src="/images/compass.jpg" alt="Compass" />
        <img id={styles.img6} src="/images/lighter.jpg" alt="Lighter" />
      </div>
    </div>
  );
};

export default HeroSection;
