import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import styles from './index.module.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Card from '../card/card';
import bg1 from '../../assets/images/bg1.png';
import bg2 from '../../assets/images/bg2.png';
import bg3 from '../../assets/images/bg3.png';
import bg4 from '../../assets/images/bg4.png';
import bg5 from '../../assets/images/bg5.png';
import bg6 from '../../assets/images/bg6.png';

const EShopMobile = () => {
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

  return (
    <section className={styles.section}>
      <div className={styles.container} ref={component}>
        <h2>E-shop</h2>
        <div className={styles.wrapper}>
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
          </Carousel>
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

export default EShopMobile;
