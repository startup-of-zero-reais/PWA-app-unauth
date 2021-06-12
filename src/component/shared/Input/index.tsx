import React from 'react';
import styles from './Input.module.css';
import { FiAtSign } from 'react-icons/fi';

type InputProps = {
    icon?: string;
    placeholder?: string;
};

const Input = ({ icon: Icon, placeholder }: InputProps) => {
    return (
        <div className={styles.container}>
            <FiAtSign
                color="#3E2F5B"
                style={{
                    marginLeft: 10,
                }}
                size={20}
            />
            <input placeholder={placeholder} />
        </div>
    );
};

export default Input;
