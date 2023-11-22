import React from 'react';
import styles from './Header.module.css';
import logoImg from '../../assets/logo-text.svg';

const Header = () => {
  return (
    <header className={styles.container}>
      <a href="/">
        <img src={logoImg} alt="Logo Liturgia da Mãe" />
      </a>
    </header>
  );
};

export default Header;
