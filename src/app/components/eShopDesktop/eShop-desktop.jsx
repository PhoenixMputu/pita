import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import styles from './index.module.css';
import Card from '../card/card';
import bg1 from '../../assets/images/bg1.png';
import bg2 from '../../assets/images/bg2.png';
import bg3 from '../../assets/images/bg3.png';
import bg4 from '../../assets/images/bg4.png';
import bg5 from '../../assets/images/bg5.png';
import bg6 from '../../assets/images/bg6.png';

const EShopDesktop = () => {
  const component = useRef(null);
  const { context } = gsap;

  useLayoutEffect(() => {
    const ctx = context(() => {
      gsap.from(['img', 'a', 'h1', 'p', 'a', 'span', 'h2', 'h3', 'button'], {
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
        <h2>E-shop</h2>
        <div className={styles.wrapper}>
          <Card
            url={bg1}
            title={'The tear'}
            subTitle={'Oil on canvas, Painting'}
            sale={'$200.00'}
            price={'$120.90'}
          />
          <Card
            url={bg2}
            title={'The tear'}
            subTitle={'Oil on canvas, Painting'}
            sale={'$200.00'}
            price={'$120.90'}
          />
          <Card
            url={bg3}
            title={'The tear'}
            subTitle={'Oil on canvas, Painting'}
            sale={'$200.00'}
            price={'$120.90'}
          />
          <Card
            url={bg4}
            title={'The tear'}
            subTitle={'Oil on canvas, Painting'}
            sale={'$200.00'}
            price={'$120.90'}
          />
          <Card
            url={bg5}
            title={'The tear'}
            subTitle={'Oil on canvas, Painting'}
            sale={'$200.00'}
            price={'$120.90'}
          />
          <Card
            url={bg6}
            title={'The tear'}
            subTitle={'Oil on canvas, Painting'}
            sale={'$200.00'}
            price={'$120.90'}
          />
        </div>
        <div className={styles.container_button}>
          <Link href="#" className={styles.btn}>
            Voir toute la galerie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EShopDesktop;
