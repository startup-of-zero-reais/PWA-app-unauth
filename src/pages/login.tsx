import React from 'react';
import Manchas1 from '../assets/Manchas1';
import Manchas2 from '../assets/Manchas2';
import ButtonSocial from '../component/screen/ButtonSocial';
import Button from '../component/shared/Button';
import Input from '../component/shared/Input';
import styles from '../styles/Login.module.css';
export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.spotOne}>
                <Manchas1 />
            </div>

            <div className={styles.wrapperInputAndButton}>
                <h1>Bem Vindo</h1>
                <h6>E-mail</h6>
                <Input placeholder="vicente19981@live.com" />
                <Button />
            </div>

            <div className={styles.containerSocials}>
                <ButtonSocial social="facebook" />
                <ButtonSocial social="google" />
            </div>

            <div className={styles.spotTwo}>
                <Manchas2 />
            </div>
        </div>
    );
}
