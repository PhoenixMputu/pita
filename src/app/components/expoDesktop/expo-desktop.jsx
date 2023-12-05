import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { BsArrowDownRightSquareFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import Femme from '../../assets/images/femme.png';
import face from '../../assets/images/face.png';
import peter from '../../assets/images/peter.png';
import styles from './index.module.css';

const ExpoDesktop = () => {
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
      <div className={styles.container} ref={component}>
        <div className={styles.firstCard}>
          <h2>
            <div>Mon</div>
            <div>exposition</div>
            <div>virtuelle</div>
          </h2>
          <Image src={Femme} alt="Femme" />
        </div>
        <div className={styles.secondCard}>
          <Image src={peter} alt="Femme" />
          <p>{`Rejoignez ma première exposition 100% virtuelle. Plongez dans le monde de l’art numérique.`}</p>
          <div className={styles.container_button}>
            <Link href="#" className={styles.btn}>
              Voir toute la galerie
            </Link>
          </div>
        </div>
        <Image src={face} alt="Femme" className={styles.rotateImage} />
        <BsArrowDownRightSquareFill
          className={styles.arrowIcon}
          color="#18AB53"
          size={64}
        />
      </div>
    </section>
  );
};

export default ExpoDesktop;
