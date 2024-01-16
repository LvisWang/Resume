import React from 'react';
import './styles.css';

const Gnosis = () => {
    return (
        <div className='divWithPadding'>
            <h3> Gnosis Safe | <a href="https://sixdegree.substack.com/p/user-engagement-analysis" target="_blank" rel="noopener noreferrer" style={{ color: '#004080', textDecoration: 'underline' }}>User Onchain Behaviour Report </a> |
                 <a href="https://dune.com/queries/1266525" target="_blank" rel="noopener noreferrer" style={{ color: '#004080', textDecoration: 'underline' }}> Dashboards</a> | <a href="https://github.com/safe-global/safe-user-allocation-reports/issues/427#issuecomment-1251932785" target="_blank" rel="noopener noreferrer" style={{color: '#004080',  textDecoration: 'underline'  }}>Feedback</a>
            </h3> 

            <div className="case-study-content" style={{color: '#004080',  textAlign: 'left', letterSpacing: '0.5px' }}>
                <p style={{ margin: '0', marginTop: '-10px' }}>
                Aided the Gnosis Safe team in analyzing on-chain user behavior to prevent misallocation of airdrops to users engaging in airdrop farming. Implemented a criteria-based credit system derived from user behavior to gain deeper insights into user types. Subsequently, successfully applied this methodology to ParaSwap and Zkasino.
                </p>
            </div>
        </div>
    );
};

export default Gnosis;
