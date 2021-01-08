import React, { Fragment, useState } from 'react';

const useCoin = (label, initialState, options) => {

    const  [ state, updateState ] = useState(initialState);

    const Select = () => (
            <Fragment>
                <label htmlFor="">{label}</label>
                <select name="" id="">
                    <option value="">--Select an option</option>
                    {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                    ))}
                </select>
            </Fragment>
    );

    return [state, Select, updateState];
}

export default useCoin;

