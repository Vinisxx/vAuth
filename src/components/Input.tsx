import React from 'react';
import styles from '../styles/input/Input.module.css';

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...inputProps }: InputProps) {

    return (

        <input
            {...inputProps}
            className={inputProps.type === 'submit' ? styles.submit : styles.input} />
    );
}
