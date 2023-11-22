import React from 'react';
import styles from './Readings.module.css';
import { GlobalContext } from '../../context/GlobalContext';

const SecondReading = () => {
  const { data } = React.useContext(GlobalContext);
  const { segundaLeitura: secondReadData } = data;

  if (secondReadData === 'Não há segunda leitura hoje!') return <></>;
  return (
    <li className={`${styles.firstReadContainer} ${styles.readContainer}`}>
      <div className={styles.headRead}>
        <h2>Segunda Leitura</h2>
        <p>({secondReadData.referencia})</p>
      </div>

      <div className={styles.bodyRead}>
        <p>{secondReadData.texto}</p>
      </div>
    </li>
  );
};

export default SecondReading;
