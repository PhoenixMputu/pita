import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import styles from './index.module.css';

const Footer = () => {
  const component = useRef(null);
  const { context } = gsap;

  useLayoutEffect(() => {
    const ctx = context(() => {
      gsap.from(['img', 'a', 'h1', 'p', 'a', 'span', 'h2', 'h3', 'li', 'p'], {
        opacity: 0,
        y: -200,
        ease: 'power3',
        duration: 5,
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container} ref={component}>
        <div className={styles.firstSection}>
          <div>
            <h3>{`Commençons par le mot " salut .. "`}</h3>
          </div>
          <div>
            <h3>Kinshasa</h3>
            <p>{`Concession COTEX N° 63 Avenue Colonel Mondjiba Commune de Ngaliema - Kinshasa`}</p>
          </div>
        </div>
        <div className={styles.secondSection}>
          <div>
            <h3>Mes Contacts</h3>
            <ul>
              <li>contact@pitakalala.com</li>
              <li>+243 890 000 000</li>
            </ul>
          </div>
          <div className={styles.subSection}>
            <div>
              <h3>Menu</h3>
              <ul>
                <Link href={'/'}>A propos</Link>
                <Link href={'/'}>Galerie</Link>
                <Link href={'/'}>E-shop</Link>
                <Link href={'/'}>Contact</Link>
              </ul>
            </div>
            <div>
              <h3>Me suivre</h3>
              <ul>
                <Link href={'/'} target="_blank">
                  Behance
                </Link>
                <Link href={'/'} target="_blank">
                  Facebook
                </Link>
                <Link href={'/'} target="_blank">
                  Twitter
                </Link>
                <Link href={'/'} target="_blank">
                  Instagram
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p>{`Copyright Pita Kalala 2023, Tous droits résérvés`}</p>
    </footer>
  );
};

export default Footer;
