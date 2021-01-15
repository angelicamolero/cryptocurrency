import React from 'react';
import styled from '@emotion/styled'

const ResultDiv = styled.div `
    color: #08234d;
    background-color:#fff;
    text-align: center;
    padding: 2rem;
    margin: 2rem 0;
    font-family: Arial, Helvetica, sans-serif;
`;

const Paragraph = styled.p `
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Precio = styled.p `
    font-size: 30px;
    span {
        font-weight: bold;
    }
`;

const Stimator = ({result}) => {
    
    if(Object.keys(result).length === 0) return null;
    return(
    <ResultDiv>
        <Precio>The price is: <span>{result.PRICE}</span></Precio>
        <Paragraph>Highest price today: <span>{result.HIGHDAY}</span></Paragraph>
        <Paragraph>Lowest price today: <span>{result.LOWDAY}</span></Paragraph>
        <Paragraph>Last 24 hours variation: <span>{result.CHANGEPCT24HOUR}</span></Paragraph>
        <Paragraph>Last Update: <span>{result.LASTUPDATE}</span></Paragraph>
    </ResultDiv>
    );
}

export default Stimator;