import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import styles from './index.module.css';

const BiographyDesktop = () => {
  const component = useRef(null);
  const { context } = gsap;

  useLayoutEffect(() => {
    const ctx = context(() => {
      gsap.from(['img', 'a', 'h1', 'p', 'a', 'span', 'h2', 'h3'], {
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
        <div className={styles.title}>
          <h2>
            <div>Ma</div>
            <div>Biography</div>
          </h2>
        </div>
        <div className={styles.body}>
          <p>
            {`Pita Kalala, né à Kinshasa le 1er Janvier 1991, est un peintre, dessinateur et sculpteur congolais. Il a fait sa formation à l’Académie des beaux-arts de Kinshasa. Ses deux sujets de prédilection sont la beauté de la femme et la biomécanique.Il a une très grande maîtrise des couleurs, qu’il préfère vives, baignées de lumière, comme son pays. Il représente souvent la femme portant un couvre-chef, des lunettes de soleil dans lesquelles se reflètent des décors Kinois, par exemple la tour de l’Echangeur ou le Boulevard du 30 Juin, parfois nue.`}
          </p>
          <Link href="#" className={styles.btn}>
            Voir toute la galerie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BiographyDesktop;
