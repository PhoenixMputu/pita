import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import styles from './index.module.css';

const ContactSection = () => {
  const component = useRef(null);
  const { context } = gsap;

  useLayoutEffect(() => {
    const ctx = context(() => {
      gsap.from(['img', 'a', 'h1', 'p', 'span', 'h2', 'h3', 'button', 'div'], {
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
        <p>
          {`JE SUIS TOUJOURS HEUREUX DE COMMENCER À TRAVAILLER SUR DE NOUVEAUX
        PROJETS, ALORS N'HÉSITEZ PAS À ME CONTACTER !`}
        </p>
        <div>
          <Link href="#" className={styles.btn}>
            Voir toute la galerie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
