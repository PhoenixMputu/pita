import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import Signature from '../../assets/images/signature.png';
import women from '../../assets/images/women.png';
import art_women from '../../assets/images/image2.png';

const GaleryDesktop = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          <span>Ma</span>
          <span>Galerie</span>
        </h2>
        <Image className={styles.signature} src={Signature} alt="Signature" />
      </div>
      <div className={styles.content}>
        <div className={styles.first_card}>
          <Image src={art_women} alt="Women Art" />
          <div>
            <h4>KASA VUBU, 2021</h4>
            <p>Oil on canvas 120 x 120 cm</p>
          </div>
        </div>
        <div className={styles.second_card}>
          <div>
            <h4>KASA VUBU, 2021</h4>
            <p>Oil on canvas 120 x 120 cm</p>
          </div>
          <Image src={art_women} alt="Women Art" />
        </div>
        <div className={styles.third_card}>
          <Image src={art_women} alt="Women Art" />
          <div>
            <h4>KASA VUBU, 2021</h4>
            <p>Oil on canvas 120 x 120 cm</p>
          </div>
        </div>
      </div>
      <Link href="#" className={styles.btn}>
        En savoir plus
      </Link>
      <Image
        className={styles.women}
        src={women}
        alt="Femme en jaune portant des lunettes"
      />
    </div>
  </section>
);

export default GaleryDesktop;
