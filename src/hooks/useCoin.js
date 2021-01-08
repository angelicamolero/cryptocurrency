import React, { Fragment, useState } from 'react';

const useCoin = () => {

    const  [ state, updateState ] = useState('');

    const Select = () => (
            <Fragment>
                <label htmlFor="">Coin</label>
                <select name="" id="">
                    <option value="MXN">Peso Mexicano</option>
                </select>
            </Fragment>
    );

    return [state, Select, updateState];
}

export default useCoin;

