import React from 'react';
import styles from './Readings.module.css';
import { GlobalContext } from '../../context/GlobalContext';
import FirstReading from './FirstReading';
import PSalm from './PSalm';
import SecondReading from './SecondReading';
import Gospel from './Gospel';

const Readings = () => {
  const { data } = React.useContext(GlobalContext);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <p className={styles.liturgy}>{data.liturgia}</p>
        <h1 className={styles.titleHeader}>Liturgia do dia</h1>
      </div>

      <ul className={styles.readings}>
        <FirstReading />
        <PSalm />
        <SecondReading />
        <Gospel />
      </ul>
    </section>
  );
};

export default Readings;
