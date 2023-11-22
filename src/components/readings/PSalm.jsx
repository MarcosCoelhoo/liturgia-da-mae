import React from 'react';
import styles from './Readings.module.css';
import { GlobalContext } from '../../context/GlobalContext';

const PSalm = () => {
  const { data } = React.useContext(GlobalContext);
  const { salmo: psalmData } = data;
  const letterArr = psalmData.texto.split('\n');

  return (
    <li className={`${styles.secondReadContainer} ${styles.readContainer}`}>
      <div className={styles.headRead}>
        <h2>Salmo</h2>
        <p>({psalmData.referencia})</p>
      </div>

      <div className={styles.bodyRead}>
        <strong className={styles.highlighted}>{psalmData.refrao}</strong>

        <div className={styles.letter}>
          {letterArr.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </li>
  );
};

export default PSalm;
