import React from 'react';
import Image from 'next/image';
import { CiHeart } from 'react-icons/ci';
import styles from './index.module.css';

const Card = ({ url, title, subTitle, sale, price }) => (
  <article className={styles.card}>
    <Image src={url} alt="Image" />
    <div className={styles.body}>
      <h3>{title}</h3>
      <p>{subTitle}</p>
      <div>
        <p>{sale}</p>
        <p>{price}</p>
      </div>
    </div>
    <div className={styles.container_button}>
      <button className={styles.btn}>Acheter</button>
      <div className={styles.icon}>
        <CiHeart />
      </div>
    </div>
  </article>
);

export default Card;
