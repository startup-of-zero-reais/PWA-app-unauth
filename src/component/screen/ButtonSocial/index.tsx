import React from 'react';
import styles from './ButtonSocial.module.css';
import { RiFacebookFill, RiGoogleFill } from 'react-icons/ri';

type IButtonSocial = {
    social: 'facebook' | 'google';
};

const ButtonSocial = ({ social }: IButtonSocial) => {
    return (
        <div className={styles.container}>
            {social === 'facebook' ? (
                <RiFacebookFill size={30} color="#3E2F5B" />
            ) : (
                <RiGoogleFill size={30} color="#3E2F5B" />
            )}
        </div>
    );
};

export default ButtonSocial;
