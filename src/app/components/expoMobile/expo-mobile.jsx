import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import peter from '../../assets/images/peter.png';
import styles from './index.module.css';

const ExpoMobile = () => {
  const component = useRef(null);
  const { context } = gsap;

  useLayoutEffect(() => {
    const ctx = context(() => {
      gsap.from(['img', 'a', 'h1', 'p', 'a', 'span'], {
        opacity: 0,
        y: -200,
        ease: 'power3',
        duration: 5,
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <div>Mon</div>
          <div>exposition</div>
          <div>virtuelle</div>
        </h2>
        <Image src={peter} alt="Pita Kalala" />
        <p>{`Rejoignez ma première exposition 100% virtuelle. Plongez dans le monde de l’art numérique.`}</p>
        <Link href="#" className={styles.btn}>
          Voir toute la galerie
        </Link>
      </div>
    </section>
  );
};

export default ExpoMobile;
