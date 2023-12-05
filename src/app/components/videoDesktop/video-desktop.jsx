'use client';
import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { FaStar, FaCirclePlay } from 'react-icons/fa6';
import { MdOutlineCancel } from 'react-icons/md';
import { Player } from 'video-react';
import coverVideo from '../../assets/images/coverVideo.webp';
import styles from './index.module.css';
import 'node_modules/video-react/dist/video-react.css';

const VideoDesktop = () => {
  const [showVideo, setShowVideo] = useState(false);
  const component = useRef(null);
  const { context } = gsap;

  useLayoutEffect(() => {
    const ctx = context(() => {
      gsap.from(['img', 'a', 'h1', 'p', 'a', 'span', 'h2', 'h3', 'h4', 'i'], {
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
      {!showVideo ? (
        <div className={styles.container} ref={component}>
          <Image src={coverVideo} alt="Expo" />
          <div className={styles.overText}>
            <h2>FUTUR - Pita Kalala, W4RTT & Julien Yao</h2>
            <div>
              <FaCirclePlay
                size={80}
                color="#18AB53"
                onClick={() => setShowVideo(!showVideo)}
              />
            </div>
            <p>
              La galerie ArtTime vous invite à découvrir une exposition
              collective présentant des œuvres originales des artistes Pita
              Kalala, W4RTT et Julien Yao. Une exposition positive, stimulante
              et puissante qui nous pousse à faire un bond dynamique vers le
              futur ! Pita Kalala, originaire de Kinshasa,{' '}
            </p>
          </div>
          <div className={styles.tag}>
            <div className={styles.icon}>
              <FaStar color={'#fff'} size={24} />
            </div>
            <div>
              <p>EXPOSITION</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.containerVideo} ref={component}>
          <Player
            playsInline
            poster={coverVideo}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            autoPlay={true}
          />
          <MdOutlineCancel
            color="#18AB53"
            size={64}
            onClick={() => setShowVideo(!showVideo)}
            className={styles.cancelIcon}
          />
        </div>
      )}
    </section>
  );
};

export default VideoDesktop;
