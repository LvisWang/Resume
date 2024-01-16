import React from 'react';
import './styles.css';

const Tron = () => {
    return (
        <div className='divWithPadding'>
            <h3> Nethermind | <a href="/pdf/usdt.pdf" target="_blank" rel="noopener noreferrer" style={{color: '#004080',  textDecoration: 'underline' }} >USDT Analysis On Tron </a>
            </h3> 

            <div className="case-study-content" style={{ textAlign: 'left', letterSpacing: '0.5px' }}>
                <p style={{ margin: '0', marginTop: '-10px' }}>
                Tron has become an important destination for USDT transfers due to its low transaction fees. This project was undertaken during my tenure at Nethermind with the aim of comprehending the use case of USDT on the Tron blockchain.
                </p>
            </div>
        </div>
    );
};

export default Tron;
