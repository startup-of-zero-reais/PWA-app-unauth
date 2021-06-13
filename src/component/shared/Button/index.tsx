import React, { CSSProperties } from 'react';
import styles from './Button.module.css';

type IButton = {
    color?: string;
};

const Button = ({ color = '#F34213' }: IButton) => {
    const cssProperties: CSSProperties = {};
    cssProperties['--color'] = color;

    return (
        <div style={cssProperties} className={styles.container}>
            <p>Continuar</p>
        </div>
    );
};

export default Button;
