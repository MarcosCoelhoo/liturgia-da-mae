import React from 'react';
import styles from './Credits.module.css';

const Credits = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Desenvolvido de 💝 por{' '}
        <a href="https://www.instagram.com/mdev.web/">Marcos Coelho</a>
      </p>
    </div>
  );
};

export default Credits;
