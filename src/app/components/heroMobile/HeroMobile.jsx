'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import art from '../../assets/images/mi-art.png';
import styles from './index.module.css';

const HeroMobile = () => {
  const component = useRef(null);
  const { context } = gsap;

  useLayoutEffect(() => {
    const ctx = context(() => {
      gsap.from(['img', 'a', 'h1', 'p'], {
        opacity: 0,
        y: -200,
        ease: 'power3',
        duration: 2,
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container} ref={component}>
        <div className={styles.content}>
          <h1>
            Bienvenu sur <span>mon site</span> officiel
          </h1>
          <p>{`Pita Kalala est originaire de la commune de Ngaliema à Kinshasa, né en 1991. Il fait ses études à l'Académie des beaux-arts de Kinshasa1. Il aime la musique, et particulièrement celles de Stromae et de Damso[réf. souhaitée]. Ces deux artistes lui ont d'ailleurs inspiré plusieurs toiles.`}</p>
          <Link href="#" className={styles.btn}>
            En savoir plus
          </Link>
        </div>
        <Image className={styles.image} src={art} alt="Femme en chapeau" />
      </div>
    </section>
  );
};

export default HeroMobile;
