import React from 'react';
import styles from './Readings.module.css';
import { GlobalContext } from '../../context/GlobalContext';

const FirstReading = () => {
  const { data } = React.useContext(GlobalContext);
  const { primeiraLeitura: firstReadData } = data;

  return (
    <li className={`${styles.firstReadContainer} ${styles.readContainer}`}>
      <div className={styles.headRead}>
        <h2>Primeira Leitura</h2>
        <p>({firstReadData.referencia})</p>
      </div>

      <div className={styles.bodyRead}>
        <p>{firstReadData.texto}</p>
      </div>
    </li>
  );
};

export default FirstReading;
