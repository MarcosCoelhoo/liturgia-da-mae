import React from 'react';
import styles from './Readings.module.css';
import { GlobalContext } from '../../context/GlobalContext';

const Gospel = () => {
  const { data } = React.useContext(GlobalContext);
  const { evangelho: gospelReadData } = data;

  return (
    <li className={`${styles.gospelReadContainer} ${styles.readContainer}`}>
      <div className={styles.headRead}>
        <h2>Evangelho</h2>
        <p>({gospelReadData.referencia})</p>
      </div>

      <div className={styles.bodyRead}>
        <strong className={styles.highlighted}>{gospelReadData.titulo}</strong>
        <p>{gospelReadData.texto}</p>
      </div>
    </li>
  );
};

export default Gospel;
