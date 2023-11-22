import React from 'react';
import heroImg from '../../assets/foto-header.png';
import LogoIcon from '../icon/LogoIcon';
import styles from './Hero.module.css';
import { GlobalContext } from '../../context/GlobalContext';

const COLORS = {
  Verde: '#7EAA92',
  Vermelho: '#FF6464',
  Branco: '#9CB4CC',
  Roxo: '#9376E0',
};

const Hero = () => {
  const { data } = React.useContext(GlobalContext);

  return (
    <section className={styles.container}>
      <img src={heroImg} alt="Banner da Paróquia de Nossa Senhora D'Assunção" />
      <div className={styles.infos}>
        <time className={styles.date} dateTime={data.data}>
          Data: <span style={{ color: COLORS[data.cor] }}>{data.data}</span>
        </time>
        <p className={styles.color}>
          Cor litúrgica:
          <span style={{ color: COLORS[data.cor] }}>
            {data.cor} <LogoIcon size={28} color={COLORS[data.cor]} />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
