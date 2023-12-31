'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import Signature from '../../assets/images/signature.png';
import women from '../../assets/images/women.png';
import art_women from '../../assets/images/images.png';
import art_women2 from '../../assets/images/imageCapeau.png';
import art_women3 from '../../assets/images/imageblack.png';

const GaleryDesktop = () => {
  const component = useRef(null);
  const { context } = gsap;

  useLayoutEffect(() => {
    const ctx = context(() => {
      gsap.from(['img', 'a'], {
        opacity: 0,
        y: -200,
        ease: 'power3',
        duration: 2,
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container} ref={component}>
        <div className={styles.title}>
          <h2>
            <span>Ma</span>
            <span>Galerie</span>
          </h2>
          <Image className={styles.signature} src={Signature} alt="Signature" />
        </div>
        <div className={styles.content}>
          <div className={styles.first_card}>
            <Image src={art_women2} alt="Women Art" />
            <div>
              <h4>KASA VUBU, 2021</h4>
              <p>Oil on canvas 120 x 120 cm</p>
            </div>
          </div>
          <div className={styles.second_card}>
            <div>
              <h4>LE ROUGE, 2021</h4>
              <p>Oil and acrylic on canvas 150 x 120 cm</p>
            </div>
            <Image src={art_women} alt="Women Art" />
          </div>
          <div className={styles.third_card}>
            <div>
              <h4>LES ANNÉES ZAÏRE, 2021</h4>
              <p>Oil and acrylic on canvas 150 x 150 cm</p>
            </div>
            <Image src={art_women3} alt="Women Art" />
          </div>
        </div>
        <div className={styles.container_button}>
          <Link href="#" className={styles.btn}>
            Voir toute la galerie
          </Link>
        </div>
        <Image
          className={styles.women}
          src={women}
          alt="Femme en jaune portant des lunettes"
        />
      </div>
    </section>
  );
};

export default GaleryDesktop;
