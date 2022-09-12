import styles from './Temperature.module.css';
import React from 'react';

type TemperatureProps = {
    t: number;
}

export function Temperature({t}: TemperatureProps) {
    if (t > 0) {
        return <div className={styles.hot}> {t} </div>;
    }
    return <div className={styles.cold}> {t} </div>;
}