'use client';
import { useState, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { CgClose } from 'react-icons/cg';
import {
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import styles from './index.module.css';
import Logo from '../../assets/images/Logo.svg';

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      openOverlay();
    } else {
      closeOverlay();
    }
  }, [open]);

  const openOverlay = () => {
    TweenMax.fromTo(
      document.querySelector('#full-screen-overlay'),
      {
        opacity: 0,
        y: '100%',
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        easing: Power3.easeOut,
      }
    );
  };

  const closeOverlay = () => {
    TweenMax.fromTo(
      document.querySelector('#full-screen-overlay'),
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: '100%',
        duration: 0.5,
        easing: Power3.easeOut,
      }
    );
  };

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Image src={Logo} alt="Logo Pita" />
        <CiMenuFries size={32} color="#18ab53" onClick={() => setOpen(!open)} />
      </nav>
      <div
        id="full-screen-overlay"
        className={styles.full_screen_overlay}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#100f0f',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'column',
          color: 'white',
          zIndex: 999,
          transform: 'translateY(-100%)',
        }}
      >
        <nav className={styles.container}>
          <Image src={Logo} alt="Logo Pita" />
          <CgClose size={32} color="#18ab53" onClick={() => setOpen(!open)} />
        </nav>
        <ul className={styles.links}>
          <Link href="#">Biographie</Link>
          <Link href="#">Galerie</Link>
          <Link href="#">E-shop</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Expo à venir</Link>
        </ul>
        <ul className={styles.social_network}>
          <Link href="#">
            <FaYoutube size={24} color="#fff" />
          </Link>
          <Link href="#">
            <FaLinkedinIn size={24} color="#fff" />
          </Link>
          <Link href="#">
            <BsTwitterX size={24} color="#fff" />
          </Link>
          <Link href="#">
            <FaInstagram size={24} color="#fff" />
          </Link>
          <Link href="#">
            <FaFacebookF size={24} color="#fff" />
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default NavbarMobile;
