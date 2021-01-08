import React from 'react';
import styled from '@emotion/styled';

import useCoin from '../hooks/useCoin';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`;

const Form = () => {

    const Coins = [
        { code: 'USD', name: 'United State Dolar'},
        { code: 'MXN', name: 'Peso Mexicano'},
        { code: 'EUR', name: 'Euro'},
        { code: 'GBP', name: 'Libra Esterlina'},
        { code: 'ARS', name: 'Peso Argentino'},
        { code: 'COP', name: 'Peso Colombiano'},
    ];

    const [ coin, SelectCoin, updateState ] = useCoin('Choose currency', '', Coins);
    return(
        <form>
            <SelectCoin/>
            <Button
            type="submit"
            value="Calcular"
            />
        </form>
    );
}

export default Form;