'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import Signature from '../../assets/images/signature.png';
import art_women from '../../assets/images/image2.png';
import art_women2 from '../../assets/images/image3.png';
import art_women3 from '../../assets/images/image4.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const GaleryMobile = () => {
  const component = useRef(null);
  const { context } = gsap;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 730 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  useLayoutEffect(() => {
    const ctx = context(() => {
      gsap.from(['img', 'a', 'h1', 'p', 'a', 'span', 'h2', 'h3', 'h4'], {
        opacity: 0,
        y: -200,
        ease: 'power3',
        duration: 5,
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.gallery} ref={component}>
      <div className={styles.groupTitle}>
        <h2>Ma Gallery</h2>
        <Image src={Signature} alt="Signature" />
      </div>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        infinite={true}
        sliderClass={styles.slider}
        showDots={true}
        dotListClass={styles.dotList}
        autoPlay
        autoPlaySpeed={2500}
        arrows
        swipeable
        partialVisible
        centerMode={false}
        keyBoardControl
        minimumTouchDrag={80}
        rewind={false}
        slidesToSlide={1}
        rewindWithAnimation={false}
        rtl={false}
      >
        <div className={styles.card}>
          <Image src={art_women2} alt="Women Art" />
          <div>
            <h4>KASA VUBU, 2021</h4>
            <p>Oil on canvas 120 x 120 cm</p>
          </div>
        </div>
        <div className={styles.card}>
          <Image src={art_women} alt="Women Art" />
          <div>
            <h4>KASA VUBU, 2021</h4>
            <p>Oil on canvas 120 x 120 cm</p>
          </div>
        </div>
        <div className={styles.card}>
          <Image src={art_women3} alt="Women Art" />
          <div>
            <h4>KASA VUBU, 2021</h4>
            <p>Oil on canvas 120 x 120 cm</p>
          </div>
        </div>
      </Carousel>
      <div className={styles.container_button}>
        <Link href="#" className={styles.btn}>
          Voir toute la galerie
        </Link>
      </div>
    </section>
  );
};

export default GaleryMobile;
