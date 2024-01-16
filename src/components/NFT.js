import React from 'react';
import './styles.css';

const NFT = () => {
    return (
        <div className='divWithPadding'>
            <h3> Nethermind | <a href="/pdf/AA.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#004080',  textDecoration: 'underline' }} > ERC-6551 Report </a> | 
            <a href="https://dune.com/sixdegree/erc6551" target="_blank" rel="noopener noreferrer" style={{color: '#004080',  textDecoration: 'underline' }} > Dashboard</a>
            </h3> 

            <div className="case-study-content" style={{ textAlign: 'left', letterSpacing: '0.5px' }}>
                <p style={{ margin: '0', marginTop: '-10px' }}>
                Within the context of ERC-6551, the token-bound wallet emerged as a groundbreaking development, representing a new frontier for NFTs as native identities in the crypto space. This report delves into the conceptualization, adoption, and potential use cases of this innovative advancement.
                </p>
            </div>
        </div>
    );
};

export default NFT;
