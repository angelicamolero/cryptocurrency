import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import useCoin from '../hooks/useCoin';
import useCryptoCoin from '../hooks/useCryptocurrency';
import axios from 'axios';

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

    const [ crypto, saveCrypto ] = useState([]);

    const Coins = [
        { code: 'USD', name: 'United State Dolar'},
        { code: 'MXN', name: 'Peso Mexicano'},
        { code: 'EUR', name: 'Euro'},
        { code: 'GBP', name: 'Libra Esterlina'},
        { code: 'ARS', name: 'Peso Argentino'},
        { code: 'COP', name: 'Peso Colombiano'},
    ];

    const [ coin, SelectCoin] = useCoin('Choose currency', '', Coins);

    const [ cryptocoin, SelectCrypto] = useCryptoCoin('Choose crypto', '', crypto);

    // call API
    useEffect(() => {
        const checkAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const result = await axios.get(url);

            saveCrypto(result.data.Data);
        }
        checkAPI();
    }, []);

    return(
        <form>
            <SelectCoin/>
            <SelectCrypto/>
            <Button
            type="submit"
            value="Calcular"
            />
        </form>
    );
}

export default Form;