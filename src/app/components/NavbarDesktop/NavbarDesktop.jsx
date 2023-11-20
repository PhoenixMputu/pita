'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.css';

import Logo from '../../assets/images/Logo.svg';

const NavbarDesktop = () => {
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

    return () => {
      return ctx.revert();
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.container} ref={component}>
        <Image src={Logo} alt="Logo Pita" />
        <ul>
          <Link href="#">Biographie</Link>
          <Link href="#">Galerie</Link>
          <Link href="#">E-shop</Link>
          <Link href="#">Contact</Link>
        </ul>
        <Link href="#" className={styles.btn}>
          Expo à venir
        </Link>
      </nav>
    </header>
  );
};

export default NavbarDesktop;
