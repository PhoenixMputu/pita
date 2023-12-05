'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import Art from '../../assets/images/art.png';
import Women2 from '../../assets/images/womenyellow.png';
import Pita from '../../assets/images/Image.png';
import Bg from '../../assets/images/Bg.png';

const HeroDesktop = () => {
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
    <section className={styles.hero}>
      <div className={styles.container} ref={component}>
        <aside>
          <div>
            <p>
              <span>ME</span> REJOINDRE
            </p>
            <ul className={styles.social_network}>
              <Link href="#">
                <FaYoutube size={20} color="#fff" />
              </Link>
              <Link href="#">
                <FaLinkedinIn size={20} color="#fff" />
              </Link>
              <Link href="#">
                <BsTwitterX size={20} color="#fff" />
              </Link>
              <Link href="#">
                <FaInstagram size={20} color="#fff" />
              </Link>
              <Link href="#">
                <FaFacebookF size={20} color="#fff" />
              </Link>
            </ul>
          </div>
        </aside>
        <div className={styles.hero_body}>
          <div className={styles.content}>
            <h1>
              Bienvenu sur <span>mon site</span> officiel
            </h1>
            <p>{`Pita Kalala est originaire de la commune de Ngaliema à Kinshasa, né en 1991. Il fait ses études à l'Académie des beaux-arts de Kinshasa1. Il aime la musique, et particulièrement celles de Stromae et de Damso[réf. souhaitée]. Ces deux artistes lui ont d'ailleurs inspiré plusieurs toiles.`}</p>
            <Link href="#" className={styles.btn}>
              En savoir plus
            </Link>
          </div>
          <Image
            className={styles.Art}
            src={Art}
            alt={`Oeuvre d'une femme au chapeau`}
          />
          <Image
            className={styles.Women2}
            src={Women2}
            alt={`Oeuvre d'une femme en orange avec des lunnette`}
          />
          <Image
            className={styles.pita}
            src={Pita}
            alt={`Pita devant son exposition`}
          />
          <Image
            className={styles.background}
            src={Bg}
            alt={`Background Gris`}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroDesktop;
