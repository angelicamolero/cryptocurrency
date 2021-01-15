import React from 'react';

const Stimator = ({result}) => {
    
    if(Object.keys(result).length === 0) return null;
    return(
    <div>
        <p>The price is: <span>{result.PRICE}</span></p>
        <p>Highest price today: <span>{result.HIGHDAY}</span></p>
        <p>Lowest price today: <span>{result.LOWDAY}</span></p>
        <p>Last 24 hours variation: <span>{result.CHANGEPCT24HOUR}</span></p>
        <p>Last Update: <span>{result.LASTUPDATE}</span></p>
    </div>
    );
}

export default Stimator;